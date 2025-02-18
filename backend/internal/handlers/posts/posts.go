package posts

import (
	"backend/internal/models"
	"database/sql"
	"github.com/gin-gonic/gin"
	"github.com/lib/pq"
	"log"
	"net/http"
	"strconv"
)

type PostActionRequestBody struct {
	Username string `json:"username"`
}

func GetAllPosts(db *sql.DB, c *gin.Context) {
	var posts []models.Post
	rows, err := db.Query("SELECT * FROM posts")
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	defer rows.Close()
	for rows.Next() {
		var post models.Post
		if err := rows.Scan(&post.ID, &post.Author, &post.Category,
			&post.Tags, &post.Title, &post.Body, &post.Upvotes, &post.Downvotes,
			&post.Comments, &post.CreatedAt); err != nil {
			c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		}
		posts = append(posts, post)
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
	c.IndentedJSON(http.StatusOK, posts)
}

func CreatePost(db *sql.DB, c *gin.Context) {
	var newPost models.Post
	if err := c.BindJSON(&newPost); err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	_, err := db.Exec("INSERT INTO posts(author, category, tags, title, body, upvotes, downvotes, comments)"+
		"VALUES($1, $2, $3, $4, $5, $6, $7, $8)",
		newPost.Author, newPost.Category, newPost.Tags, newPost.Title,
		newPost.Body, newPost.Upvotes, newPost.Downvotes, newPost.Comments)
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}
	c.IndentedJSON(http.StatusCreated, newPost)
}

func UpvotePost(db *sql.DB, c *gin.Context) {
	postId := c.Param("id")
	var requestBody PostActionRequestBody
	if err := c.BindJSON(&requestBody); err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	username := requestBody.Username
	result, err := db.Exec(
		"UPDATE posts\n"+
			"SET upvotes = CASE\n"+
			"WHEN $1 = ANY(upvotes) THEN array_remove(upvotes, $1)\n"+
			"ELSE array_append(upvotes, $1)\nEND\nWHERE id = $2;",
		username, postId)
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"message": "Post not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Upvote toggled"})
}

func DownvotePost(db *sql.DB, c *gin.Context) {
	postId := c.Param("id")
	var requestBody PostActionRequestBody

	if err := c.BindJSON(&requestBody); err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}

	username := requestBody.Username
	result, err := db.Exec(
		"UPDATE posts\n"+
			"SET downvotes = CASE\n"+
			"WHEN $1 = ANY(downvotes) THEN array_remove(downvotes, $1)\n"+
			"ELSE array_append(downvotes, $1)\nEND\nWHERE id = $2;",
		username, postId)
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"message": "Post not found"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Downvote toggled"})
}

func DeletePost(db *sql.DB, c *gin.Context) {
	postIdStr := c.Param("id")
	postId, err := strconv.Atoi(postIdStr)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Invalid post ID"})
		return
	}

	rows, err := db.Query("SELECT unnest(comments) FROM posts WHERE id = $1", postId)
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve comments: " + err.Error()})
		return
	}
	defer rows.Close()

	var commentIds []int64
	for rows.Next() {
		var commentId int64
		if err := rows.Scan(&commentId); err != nil {
			c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": "Error scanning comment IDs: " + err.Error()})
			return
		}
		commentIds = append(commentIds, commentId)
	}

	if len(commentIds) > 0 {
		_, err = db.Exec("DELETE FROM comments WHERE id = ANY($1)", pq.Array(commentIds))
		if err != nil {
			c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete comments: " + err.Error()})
			return
		}
	}

	if _, err := db.Exec("DELETE FROM posts WHERE id = $1", postId); err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete posts: " + err.Error()})
		return
	}

	c.IndentedJSON(http.StatusOK, gin.H{"message": "Post deleted"})
}

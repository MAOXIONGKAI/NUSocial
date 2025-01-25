package comments

import (
	"backend/internal/models"
	"database/sql"
	"github.com/gin-gonic/gin"
	"github.com/lib/pq"
	"log"
	"net/http"
	"strconv"
)

func GetPostComments(db *sql.DB, c *gin.Context) {
	var postId = c.Param("postId")
	row := db.QueryRow("SELECT * FROM posts WHERE id = $1", postId)

	var post models.Post
	if err := row.Scan(&post.ID, &post.Author, &post.Category,
		&post.Tags, &post.Title, &post.Body, &post.Upvotes, &post.Downvotes,
		&post.Comments, &post.CreatedAt); err != nil {
		if err == sql.ErrNoRows {
			c.IndentedJSON(http.StatusNotFound, gin.H{"message": "post not found"})
		}
		return
	}

	commentIds := post.Comments

	rows, err := db.Query("SELECT * FROM comments WHERE id = ANY($1)", pq.Array(commentIds))
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	defer rows.Close()

	var comments []models.Comment
	for rows.Next() {
		var comment models.Comment
		if err := rows.Scan(&comment.ID, &comment.Author, &comment.Text, &comment.CreatedAt); err != nil {
			c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}
		comments = append(comments, comment)
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
		return
	}
	c.IndentedJSON(http.StatusOK, comments)
}

func GetCommentbyId(db *sql.DB, c *gin.Context) {
	commentIdStr := c.Param("id")
	commentId, err := strconv.Atoi(commentIdStr)
	if err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"error": "Invalid comment ID"})
		return
	}

	row := db.QueryRow("SELECT * FROM comments WHERE id = $1", commentId)
	var comment models.Comment
	err = row.Scan(&comment.ID, &comment.Author, &comment.Text, &comment.CreatedAt)

	if err != nil {
		if err == sql.ErrNoRows {
			c.IndentedJSON(http.StatusNotFound, gin.H{"message": "comment not found"})
			return
		}
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	}

	c.IndentedJSON(http.StatusOK, comment)
}

func CreatePostComment(db *sql.DB, c *gin.Context) {
	postId := c.Param("postId")
	if postId == "" {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"message": "post not found for commenting"})
		return
	}

	var newComment models.Comment
	if err := c.BindJSON(&newComment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var newCommentId int64
	if err := db.QueryRow("INSERT INTO comments (author, text) "+
		"VALUES ($1, $2) RETURNING id", newComment.Author, newComment.Text).Scan(&newCommentId); err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	_, err := db.Exec("UPDATE posts SET comments = array_append(comments, $1) WHERE id = $2",
		newCommentId, postId)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	newComment.ID = newCommentId
	c.IndentedJSON(http.StatusCreated, newComment)
}

func DeletePostComment(db *sql.DB, c *gin.Context) {
	commentId := c.Param("id")
	if commentId == "" {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"message": "comment not found for deleting"})
		return
	}

	_, err := db.Exec("DELETE FROM comments WHERE id = $1", commentId)
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	_, err = db.Exec("UPDATE posts SET comments = array_remove(comments, $1) WHERE $1 = ANY(comments)", commentId)
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"error": "Failed to remove comment ID from posts: " + err.Error()})
		return
	}
	c.IndentedJSON(http.StatusOK, gin.H{"message": "comment deleted successfully"})
}

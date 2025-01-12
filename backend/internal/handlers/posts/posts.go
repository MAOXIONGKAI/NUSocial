package posts

import (
	"backend/internal/models"
	"database/sql"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

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

package comments

import (
	"backend/internal/models"
	"database/sql"
	"github.com/gin-gonic/gin"
	"net/http"
)

func CreateComment(db *sql.DB, c *gin.Context) {
	var newComment models.Comment
	if err := c.BindJSON(&newComment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	}
}

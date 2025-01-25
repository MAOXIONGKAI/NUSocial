package routes

import (
	"database/sql"
	"github.com/gin-gonic/gin"
	"net/http"
)

func CheckMain(db *sql.DB, c *gin.Context) {
	c.IndentedJSON(http.StatusOK, gin.H{"message": "Backend Running Normally..."})
}

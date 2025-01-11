package handlers

import (
	"database/sql"
	"github.com/gin-gonic/gin"
)

func MakeHandler(fn func(*sql.DB, *gin.Context), db *sql.DB) gin.HandlerFunc {
	return func(c *gin.Context) {
		fn(db, c)
	}
}

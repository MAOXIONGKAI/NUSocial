package routes

import (
	"backend/internal/handlers/users"
	"github.com/gin-gonic/gin"
)

func GetRoutes(r *gin.Engine) {
	api := r.Group("/api")
	{
		api.GET("/users", users.GetAllUsers)
		api.GET("/users/:username", users.GetUser)
		api.POST("/users", users.CreateUser)
	}
}

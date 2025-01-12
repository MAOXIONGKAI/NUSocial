package routes

import (
	"backend/internal/handlers"
	"backend/internal/handlers/posts"
	"backend/internal/handlers/users"
	"database/sql"
	"github.com/gin-gonic/gin"
)

// GetRoutes Define routes between the given router and database
func GetRoutes(r *gin.Engine, db *sql.DB) {
	api := r.Group("/api")
	{
		api.GET("/users", handlers.MakeHandler(users.GetAllUsers, db))
		api.GET("/users/:username", handlers.MakeHandler(users.GetUser, db))
		api.POST("/users", handlers.MakeHandler(users.CreateUser, db))

		api.GET("/posts", handlers.MakeHandler(posts.GetAllPosts, db))
		api.POST("/posts", handlers.MakeHandler(posts.CreatePost, db))
	}
}

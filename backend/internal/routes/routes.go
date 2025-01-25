package routes

import (
	"backend/internal/handlers"
	"backend/internal/handlers/comments"
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
		api.POST("/posts/upvote/:id", handlers.MakeHandler(posts.UpvotePost, db))
		api.POST("/posts/downvote/:id", handlers.MakeHandler(posts.DownvotePost, db))
		api.DELETE("/posts/:id", handlers.MakeHandler(posts.DeletePost, db))

		api.GET("posts/comments/:postId", handlers.MakeHandler(comments.GetPostComments, db))
		api.POST("/posts/comments/:postId", handlers.MakeHandler(comments.CreatePostComment, db))
		api.GET("comments/:id", handlers.MakeHandler(comments.GetCommentbyId, db))
	}
}

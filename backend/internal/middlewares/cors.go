package middlewares

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var corsConfig = cors.Config{
	AllowOrigins:     []string{"http://localhost:5173"},
	AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
	AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type", "Authorization"},
	ExposeHeaders:    []string{"Content-Length"},
	AllowCredentials: true,
}

func CorsMiddleware() gin.HandlerFunc {
	return cors.New(corsConfig)
}

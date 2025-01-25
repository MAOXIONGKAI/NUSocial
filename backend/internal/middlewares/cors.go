package middlewares

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"os"
)

const dev_frontend = "http://localhost:5173"

var prod_frontend = os.Getenv("FRONTEND_URL")

var corsConfig = cors.Config{
	AllowOrigins:     []string{dev_frontend, prod_frontend},
	AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
	AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type", "Authorization"},
	ExposeHeaders:    []string{"Content-Length"},
	AllowCredentials: true,
}

func CorsMiddleware() gin.HandlerFunc {
	return cors.New(corsConfig)
}

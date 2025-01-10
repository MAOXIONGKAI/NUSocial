package router

import (
	"backend/internal/middlewares"
	"backend/internal/routes"
	"github.com/gin-gonic/gin"
)

func Setup() *gin.Engine {
	r := gin.Default()
	setUpMiddlewares(r)
	setUpRoutes(r)
	return r
}

func setUpRoutes(r *gin.Engine) {
	routes.GetRoutes(r)
}

func setUpMiddlewares(r *gin.Engine) {
	r.Use(middlewares.CorsMiddleware())
}

package router

import (
	"backend/internal/routes"
	"github.com/gin-gonic/gin"
)

func Setup() *gin.Engine {
	r := gin.Default()
	setUpRoutes(r)
	return r
}

func setUpRoutes(r *gin.Engine) {
	routes.GetRoutes(r)
}

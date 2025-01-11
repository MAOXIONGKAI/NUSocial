package router

import (
	"backend/internal/middlewares"
	"backend/internal/routes"
	"database/sql"
	"github.com/gin-gonic/gin"
)

// Setup Set up and return a router that connects with the running database
func Setup(db *sql.DB) *gin.Engine {
	r := gin.Default()
	setUpMiddlewares(r)
	setUpRoutes(r, db)
	return r
}

// Connect routes between the given router and database
func setUpRoutes(r *gin.Engine, db *sql.DB) {
	routes.GetRoutes(r, db)
}

// Set up middlewares for the given router
func setUpMiddlewares(r *gin.Engine) {
	r.Use(middlewares.CorsMiddleware())
}

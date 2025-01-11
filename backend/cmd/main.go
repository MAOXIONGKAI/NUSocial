package main

import (
	"backend/internal/database"
	"backend/internal/router"
	"fmt"
	"log"
)

const port = 8080

func main() {
	db := database.ConnectDB()
	defer database.DisconnectDB(db)
	r := router.Setup(db)
	log.Fatal(r.Run(fmt.Sprintf(":%d", port)))
}

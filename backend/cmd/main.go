package main

import (
	"backend/internal/router"
	"fmt"
	"log"
)

const port = 8080

func main() {
	r := router.Setup()
	log.Fatal(r.Run(fmt.Sprintf(":%d", port)))
}

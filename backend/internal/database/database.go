package database

import (
	"backend/internal/config"
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"log"
)

var DBConfig = config.LoadDBConfig()

var connectionStr = fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable",
	DBConfig.Host, DBConfig.Port, DBConfig.User, DBConfig.Password, DBConfig.Name)

func ConnectDB() *sql.DB {
	db, err := sql.Open("postgres", connectionStr)
	if err != nil {
		log.Fatalf("Unable to connect to the database: %v", err)
		return nil
	}

	if err = db.Ping(); err != nil {
		log.Fatalf("Database connection unstable: %v", err)
		return nil
	}

	fmt.Println("Successfully connected to the database")
	return db
}

func DisconnectDB(db *sql.DB) {
	err := db.Close()
	if err != nil {
		log.Fatalf("Unable to close the database: %v", err)
		return
	}
	fmt.Println("Successfully closed the database")
}

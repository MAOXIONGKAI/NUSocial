package config

import (
	"github.com/joho/godotenv"
	"log"
	"os"
)

type DBConfig struct {
	User          string
	Password      string
	ConnectionStr string
}

func LoadDBConfig() DBConfig {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	return DBConfig{
		User:          os.Getenv("DB_USER"),
		Password:      os.Getenv("DB_PASSWORD"),
		ConnectionStr: os.Getenv("AWS_DB_ENDPOINT"),
	}
}

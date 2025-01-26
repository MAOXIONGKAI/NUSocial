package config

import (
	"os"
)

type DBConfig struct {
	User          string
	Password      string
	ConnectionStr string
}

func LoadDBConfig() DBConfig {
	// Load environment variable from .env file only when running locally
	//err := godotenv.Load("../.env")
	//if err != nil {
	//	log.Fatal("Error loading .env file: " + err.Error())
	//}

	return DBConfig{
		User:          os.Getenv("DB_USER"),
		Password:      os.Getenv("DB_PASSWORD"),
		ConnectionStr: os.Getenv("AWS_DB_ENDPOINT"),
	}
}

package users

import (
	"backend/internal/models"
	"database/sql"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

func GetUser(db *sql.DB, c *gin.Context) {
	username := c.Param("username")
	var user models.User
	row := db.QueryRow("SELECT * FROM users WHERE username = $1", username)
	if err := row.Scan(&user.ID, &user.Username, &user.Password); err != nil {
		if err == sql.ErrNoRows {
			c.IndentedJSON(http.StatusNotFound, gin.H{"message": "user not found"})
		}
		return
	}
	c.IndentedJSON(http.StatusOK, user)
}

func GetAllUsers(db *sql.DB, c *gin.Context) {
	var users []models.User
	rows, err := db.Query("SELECT * FROM users")
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"message": err})
		return
	}
	defer rows.Close()
	for rows.Next() {
		var user models.User
		if err := rows.Scan(&user.ID, &user.Username, &user.Password); err != nil {
			c.IndentedJSON(http.StatusInternalServerError, gin.H{"message": err})
		}
		users = append(users, user)
	}
	if err := rows.Err(); err != nil {
		log.Fatal(err)
	}
	c.IndentedJSON(http.StatusOK, users)
}

func CreateUser(db *sql.DB, c *gin.Context) {
	var newUser models.User

	if err := c.BindJSON(&newUser); err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"message": err.Error()})
	}

	_, err := db.Exec("INSERT INTO users(username,password) VALUES($1,$2)", newUser.Username, newUser.Password)
	if err != nil {
		c.IndentedJSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}
	c.IndentedJSON(http.StatusCreated, newUser)
}

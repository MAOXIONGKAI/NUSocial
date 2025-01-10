package users

import (
	"backend/internal/models"
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
)

var tempUser1 = models.User{Username: "Mao Xiongkai", Password: "114514"}
var tempUser2 = models.User{Username: "Zhu Tianyi", Password: "1234"}
var tempUser3 = models.User{Username: "Eline Ngu", Password: "123456"}
var tempUser4 = models.User{Username: "Huang Jiaxi", Password: "98765"}
var userList = []models.User{tempUser1, tempUser2, tempUser3, tempUser4}

func GetUser(c *gin.Context) {
	username := c.Param("username")
	for _, user := range userList {
		if user.Username == username {
			c.IndentedJSON(http.StatusOK, user)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": fmt.Sprintf("%s not found", username)})
}

func GetAllUsers(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, userList)
}

func CreateUser(c *gin.Context) {
	var newUser models.User

	if err := c.BindJSON(&newUser); err != nil {
		c.IndentedJSON(http.StatusBadRequest, gin.H{"message": err.Error()})
	}

	userList = append(userList, newUser)
	c.IndentedJSON(http.StatusCreated, newUser)
}

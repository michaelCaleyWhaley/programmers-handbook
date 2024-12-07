package controllers

import (
	"advent/initialisers"
	"net/http"

	"github.com/gin-gonic/gin"
)

type GhUserJson struct {
	Login string `json:"login"`
}

func GetGithubUser(c *gin.Context) {
	userBody, exists := c.Get("User")
	if !exists {
		c.JSON(http.StatusForbidden, gin.H{
			"message": "Github user not found.",
		})
		return
	}

	user, ok := userBody.([]byte)
	if !ok {
		c.JSON(http.StatusForbidden, gin.H{
			"message": "Github user not found.",
		})
		return
	}

	c.SetCookie("user", string(user), 28800, "/", initialisers.GetConfig().CookieDomain, false, false)
	c.JSON(http.StatusOK, gin.H{
		"message": "Github user.",
	})

}

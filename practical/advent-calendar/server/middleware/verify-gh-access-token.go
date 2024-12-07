package middleware

import (
	constantVars "advent/constants"
	"advent/services"
	"net/http"

	"github.com/gin-gonic/gin"
)

func VerifyGhAccessToken(c *gin.Context) {
	authCookie, atCookieErr := c.Request.Cookie(constantVars.AUTH_COOKIE)
	if atCookieErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "No access token.",
		})
		return
	}

	ghUserResp, success := services.GetGhUser(authCookie.Value)
	if !success {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Failed to get user.",
		})
		return
	}

	c.Set("User", ghUserResp)
}

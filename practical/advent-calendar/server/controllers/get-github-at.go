package controllers

import (
	constantVars "advent/constants"
	"advent/initialisers"
	"bytes"
	"encoding/json"
	"io"
	"net/http"
	"net/url"
	"os"

	"github.com/gin-gonic/gin"
)

func GetGhAccessToken(c *gin.Context) {
	code := c.Query("code")
	if len(code) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "No access code.",
		})
		return
	}

	payload := map[string]string{
		"client_id":     os.Getenv("GITHUB_CLIENT_ID"),
		"client_secret": os.Getenv("GITHUB_CLIENT_SECRET"),
		"code":          code,
	}
	jsonData, err := json.Marshal(payload)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Failed to unmarshal.",
		})
		return
	}

	res, err := http.Post(constantVars.ACCESS_TOKEN_URL, "application/json", bytes.NewBuffer(jsonData))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"message": "Failed to post.",
		})
		return
	}

	defer res.Body.Close()
	body, err := io.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}

	var unmarshalledJson string
	json.Unmarshal(body, &unmarshalledJson)

	parsedResBody, err := url.ParseQuery(string(body))
	if err != nil {
		panic(err)
	}

	accessToken := parsedResBody.Get("access_token")
	if len(accessToken) == 0 {
		c.JSON(http.StatusForbidden, gin.H{
			"message": "Unauthorised.",
		})
		return
	}

	c.SetCookie("access_token", accessToken, 28800, "/", initialisers.GetConfig().CookieDomain, false, true)
	c.JSON(http.StatusOK, gin.H{
		"message": "Authorised",
	})
}

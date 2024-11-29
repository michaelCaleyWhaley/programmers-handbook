package main

import (
	"advent/controllers"
	"advent/initialisers"

	"github.com/gin-gonic/gin"
)

func main() {
	initialisers.LoadEnvVars()

	r := gin.Default()
	r.GET("/gh-oauth", controllers.GetGhAccessToken)
	r.Run()

	// listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

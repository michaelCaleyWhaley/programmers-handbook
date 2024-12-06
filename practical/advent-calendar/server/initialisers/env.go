package initialisers

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type config struct {
	CookieDomain string
	ReturnUrl    string
}

type appConfig struct {
	local config
	prod  config
}

var setAppConfig = appConfig{
	local: config{
		CookieDomain: "localhost",
	},
	prod: config{
		CookieDomain: "d1ucavcsqsa84j.cloudfront.net",
	},
}

var isLocal = os.Args[len(os.Args)-1] == "--local"

func LoadEnvVars() {
	if isLocal {
		err := godotenv.Load()
		if err != nil {
			log.Fatal("Error loading .env file")
		}
	}
}

func GetConfig() config {
	if isLocal {
		return setAppConfig.local
	}

	return setAppConfig.prod
}

package initialisers

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

var isLocal = os.Args[len(os.Args)-1] == "--local"

func LoadEnvVars() {
	if isLocal {
		err := godotenv.Load()
		if err != nil {
			log.Fatal("Error loading .env file")
		}
	}
}

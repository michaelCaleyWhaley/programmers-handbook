/* Requires the Docker Pipeline plugin */

pipeline {
    agent { dockerContainer { image 'golang:1.24.2-alpine3.21' } }
    stages {
        stage('build') {
            steps {
                sh 'go version'
            }
        }
    }
}

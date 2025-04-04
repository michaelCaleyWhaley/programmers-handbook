# Jenkins

[Jenkins getting started](https://www.jenkins.io/doc/pipeline/tour/getting-started)

## Running Jenkins locally

After starting Jenkins using the instructions on the above link. Ensure the correct plugins are installed. When using Docker, `Docker plugin` and `Docker pipeline` are both necessary.

Also unique to running Docker and Jenkins locally, ensure that you have started your Docker Deamon otherwise the image will not be able to run.

## General Jenkins

Ensure that Jenkinsfile is spelt with an uppercase J. The default configuration will look for Jenkinsfile and is case dependent.

You can specify a different path and file name in the Jenkins settings.

[Running multiple steps](https://www.jenkins.io/doc/pipeline/tour/running-multiple-steps)




[] Trigger jenkins builds on push
[] Name prs after branch
[] show build on github
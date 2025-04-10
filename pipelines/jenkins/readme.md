# Jenkins

[Jenkins getting started](https://www.jenkins.io/doc/pipeline/tour/getting-started)

Adapted steps from above getting started.
1. Run this command to download and start Jenkins `[ -f jenkins.war ] || curl -O https://ftp.belnet.be/mirror/jenkins/war-stable/2.492.3/jenkins.war --output-dir ./; java -jar jenkins.war --httpPort=8080`.
2. Start Docker locally in the case Jenkins pipelines use Docker.
3. Use nGrok to expose local Jenkins to web for webhook testing `ngrok http http://localhost:8080`.
4. Go to Github webhooks and update with ngroks url [Github webhook](https://github.com/michaelCaleyWhaley/programmers-handbook/settings/hooks/539706905).
5. Local login details `user: admin`, `password: admin`.

## Running Jenkins locally

After starting Jenkins using the instructions on the above link. Ensure the correct plugins are installed. When using Docker, `Docker plugin` and `Docker pipeline` are both necessary.

Also unique to running Docker and Jenkins locally, ensure that you have started your Docker Deamon otherwise the image will not be able to run.

## General Jenkins

Ensure that Jenkinsfile is spelt with an uppercase J. The default configuration will look for Jenkinsfile and is case dependent.

You can specify a different path and file name in the Jenkins settings.

[Running multiple steps](https://www.jenkins.io/doc/pipeline/tour/running-multiple-steps)

## Webhooks

To trigger Jenkins using a webhook first we need to identify the pipeline type. For my use case this type is `multi branch pipeline`.

The first step is to install the [plugin Multibranch Scan Webhook Trigger](https://plugins.jenkins.io/multibranch-scan-webhook-trigger). After this go to pipeline config and search for scan by webhook. The next steps should be self explanatory.

## Pipeline sources

The goal in my case is to show only main and open pull requests in Jenkins multi branch. To achieve this I have used two sources both set to Github. One which targets only PRs and one which targets all branches but filters for main.

## Github status updates

Configured using the [Github checks plugin](https://plugins.jenkins.io/github-checks).

In order the plugin to work Github needs to add your Jenkins instance as an authenticated app. To achieve this follow the steps on this [link](https://github.com/jenkinsci/github-branch-source-plugin/blob/master/docs/github-app.adoc).
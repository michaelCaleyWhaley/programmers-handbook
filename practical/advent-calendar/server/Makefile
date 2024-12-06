server/start:
	go run advent.go
	
server/local: 
	go run advent.go --local

server/local/hot: 
	air

server/build:
	GOARCH=amd64 GOOS=linux go build -o bootstrap advent.go

server/zip:
	zip deployment.zip bootstrap

# aws/lambda/update/actions:
# 	@zip_file_path="${GITHUB_WORKSPACE}/server/deployment.zip"; \
# 	aws lambda update-function-code \
# 		--region eu-west-2 \
# 		--function-name rolodex_utilitor_function \
# 		--zip-file "fileb://$${zip_file_path}"

# aws/lambda/update/local:
# 	@zip_file_path="./deployment.zip"; \
# 	aws lambda update-function-code \
# 		--region eu-west-2 \
# 		--function-name rolodex_utilitor_function \
# 		--zip-file "fileb://$${zip_file_path}"
build:
	docker build -t local-postgres .
run:
	docker run --rm --name local-postgres -e POSTGRES_PASSWORD=test1234  local-postgres
connect:
	docker exec -it local-postgres bash
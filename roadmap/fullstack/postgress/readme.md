# PostgresSQL

## Running postgres in docker

- `docker pull postgres`
- print list of docker images `docker image ls`
- print list of docker containers `docker container ls`

### Run the container
`docker run --rm --name pgsql-dev -e POSTGRES_PASSWORD=test1234 -p 5432:5432 postgres`
–name: the name of the PostgreSQL container.
–-rm: this removes the container when it’s stopped.
-e: the only mandatory environment variable is the database password that needs to be provided before creating the container.
-p: the port mapping needs to be provided so that the host port on the machine will map to the PostgreSQL container port inside the container.
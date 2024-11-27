# PostgresSQL

## Commands inside Postgres
- help `\?`
- list databases `\l`
- connect to database `\c test`
- list tables in db `\dt`
- run a file with postgress `\i /file/path`

## Mock data
- generated data https://www.mockaroo.com

## Docker

### Running postgres in docker
- `docker pull postgres`
- print list of docker images `docker image ls`
- print list of docker containers `docker container ls`

#### Docker on windows
- In order for docker to run you must enable virtualisation.

### Run the container
- `docker run --rm --name pgsql-dev -e POSTGRES_PASSWORD=test1234 -p 5432:5432 postgres`
    - –name: the name of the PostgreSQL container.
    - –-rm: this removes the container when it’s stopped.
    - -e: the only mandatory environment variable is the database password that needs to be provided before creating the container.
    - -p: the port mapping needs to be provided so that the host port on the machine will map to the PostgreSQL container port inside the container.

- Connect to the docker terminal in seperate terminal `docker exec -it pgsql-dev bash`
- Connect to postgres within docker `psql -h localhost -U postgres`

### Mount volume
- mount a volume when you run the instance `-v ./path-to-file:/mounted-volume-inside-docker`
- full example of running with mounted volume `docker run --rm -v ./:/mounted-volume --name pgsql-dev -e POSTGRES_PASSWORD=test1234 -p 5432:5432 postgres`

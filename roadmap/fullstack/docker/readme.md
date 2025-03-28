# docker

## Running a docker container
- Basic command `docker run -d -p 80:80 ${IMAGE_NAME}`.
- `-d` runs the container in detached mode, meaning the console is not locked to the instance.
- `-p 80:80` runs the container on port 80 and connects it to port 80 within the container.

### Advanced run note
- you can combine flags such as `-d` and `-p` into `-dp`.

## Building a docker image
- Create `Dockerfile` at root. Describing the steps to create within.
- `docker build -t ${IMAGE-NAME} .` builds the image.
- `-t` is a flag which tags the image with the name.
- `.` on the tells docker build to look for `Dockerfile` in current directory.

## Commands
- `docker ps` lists running containers.
- `docker stop <the-container-id>` stops container with ID.
- `docker rm <the-container-id>` remove container with ID.

docker run -d -p 80:80 docker/getting-started
http://localhost/tutorial/updating-our-app/

## Architecture

Building images sometimes requires different architecture i.e. amd64 (x86__x64) or arm64. For example Azure container apps only allows amd64 at present.

To build an image for a different architecture pass the `platform` flag with arguement `linux/amd64` (or whatever platform you're targetting). i.e. `--platform=linux/amd64`.
#!/usr/bin/env bash

docker build -t react-vite-app:local -f DOCKERFILE .

# run in background, map host port 8080 -> container 80
docker run --rm -p 8080:80 --name react-vite-app react-vite-app:local
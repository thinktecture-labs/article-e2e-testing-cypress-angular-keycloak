#!/usr/bin/env bash

docker build -t e2e-testing-kc .
docker run -p 8080:8080 e2e-testing-kc

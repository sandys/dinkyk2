set dotenv-load := false

alias default := help

help:
	@echo "Available recipes:"
	@just --list

validate\:srs:
	jq . data/srs/*.json

lint\:mobile:
	yarn workspace dinkyk2-mobile lint

start\:mobile:
	yarn workspace dinkyk2-mobile start


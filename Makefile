PWD := $(shell pwd)
WEBPACK := $(PWD)/node_modules/.bin/webpack

prepublish:
	mkdir -p dist
	$(WEBPACK)

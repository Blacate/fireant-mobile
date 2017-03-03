install:
	@bower install
	@if [ ! -f "$$(which webpack)" ]; then npm --registry=http://registry.npm.taobao.org install webpack -g; fi
	@if [ ! -f "$$(which cnpm)" ]; then npm --registry=http://registry.npm.taobao.org install cnpm -g; fi
	@cnpm install
deploy: install
	@npm run deploy
	@cp -r dist

dev: install
	@npm run dev

clean:
	@rm -rf node_modules bower_components

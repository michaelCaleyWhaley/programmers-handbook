npm/install:
	npm ci

lint/application:
	npm run lint

build/application:
	npm run build

rewrite/extension:
	node ./deployment/rewrite-extension.js

s3/clean:
	aws s3 rm s3://advent-calendar-website --recursive

s3/push/html:
	aws s3 sync ./out s3://advent-calendar-website --exclude "*.*" --content-type text/html --content-language html

s3/push/remaining:
	aws s3 sync ./out s3://advent-calendar-website --include "*.*"

cloudfront/cache/refresh:
	aws cloudfront create-invalidation --distribution-id E7B2N8C14KMDP --paths "/*"
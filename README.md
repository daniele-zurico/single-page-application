# single-page-application

npm install -g live-server

- cd microservice-child
- npm install
- npm run build
- live-server --cors

- cd single-spa-master
- npm install
- open main.js and change the url pointing to the url of the child app
- npm run build
- live-server --cors

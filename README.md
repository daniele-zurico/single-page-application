# single-page-application


- npm install -g live-server

- cd microservice-child (angular v4)
- npm install
- npm run build
- live-server --cors

- cd microservice-child-2 (angular v2)
- npm install
- npm run build
- live-server --cors

- cd single-spa-master
- npm install
- open main.js and change the url pointing to the url of the child and child2 app
- npm run build
- live-server --cors

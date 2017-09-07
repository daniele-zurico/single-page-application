# single-page-application
Microservice implementation.
It allow to load whetever framework you need in your main application.
Right now it load 2 different angular app. The first one is an angular2 application and the second is angular4.
They both run on a different url.

## Global dependencies
- npm install -g live-server

## How to use it

### Angular v4 app
- cd microservice-child (angular v4)
- npm install
- npm run build
- live-server --cors

### Angular v2 app
- cd microservice-child-2 (angular v2)
- npm install
- npm run build
- live-server --cors

### Main Container
- cd single-spa-master
- npm install
- open main.js and change the url pointing to the url of the child and child2 app
- npm run build
- live-server --cors

import * as singleSpa from 'single-spa';

singleSpa.declareChildApplication('angular2-external',
	() => SystemJS.import('http://127.0.0.1:8080/dist/child-application.js'),
	hashPrefix('/angular2-external')
);

singleSpa.start();

function hashPrefix(prefix) {
	return function() {
		return window.location.hash.indexOf(`#${prefix}`) === 0;
	}
}


import 'zone.js';
import 'reflect-metadata';
import * as singleSpa from 'single-spa';
singleSpa.declareChildApplication('angular2-external',
	() => SystemJS.import('http://127.0.0.1:54013/dist/child-application.js'),
	hashPrefix('/angular2-external')
);
singleSpa.declareChildApplication('angular2-external2',
() => SystemJS.import('http://127.0.0.1:59866/dist/child-application2.js'),
hashPrefix('/angular3-external')
);


singleSpa.start();

function hashPrefix(prefix) {
	return function() {
		return window.location.hash.indexOf(`#${prefix}`) === 0;
	}
}


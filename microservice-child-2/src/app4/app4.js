import singleSpaAngular from 'single-spa-angular2';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import mainModule from './main-module.ts';

const ngLifecycles = singleSpaAngular({
	domElementGetter,
	mainModule,
	angularPlatform: platformBrowserDynamic(),
	template: `<app4 />`,
});

export function bootstrap() {
	return ngLifecycles.bootstrap();
}

export function mount() {
	return ngLifecycles.mount();
}

export function unmount() {
	return ngLifecycles.unmount();
}

function domElementGetter() {
	// Make sure there is a div for us to render into
	let el = document.getElementById('app-4');
	if (!el) {
		el = document.createElement('div');
		el.id = 'app-4';
		document.body.appendChild(el);
	}

	return el;
}

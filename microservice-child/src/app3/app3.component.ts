import {Component, NgZone, Inject} from '@angular/core';


@Component({
	selector: 'app3',
	template: `
		<div class="daniele" style="margin-top: 100px;">
			This is a child app loaded from external url
		</div>
	`,
})
export class App3 {
	constructor(){}
}

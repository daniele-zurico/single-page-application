import {Component, NgZone, Inject} from '@angular/core';


@Component({
	selector: 'app4',
	template: `
		<div class="daniele" style="margin-top: 100px;">
			This is a child app 2 loaded from external url same angular version
		</div>
	`,
})
export class App4 {
	constructor(){}
}

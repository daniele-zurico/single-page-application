import { App4 } from './app4.component.ts';
import {NgModule, OnDestroy} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import {enableProdMode} from '@angular/core';
import {APP_BASE_HREF} from "@angular/common";

enableProdMode();

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		App4
	],
	bootstrap: [App4]
})
export default class MainModule {
	constructor(){}
}

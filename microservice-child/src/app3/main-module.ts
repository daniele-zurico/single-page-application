import { App3 } from './app3.component.ts';
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
		App3
	],
	bootstrap: [App3]
})
export default class MainModule {
	constructor(){}
}

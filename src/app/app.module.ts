import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryTableComponent } from './entry-table/entry-table.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FormService } from "./services/form.service";
import { TableService } from "./services/table.service";
import { SearchService } from "./services/search.service";

const routes: Routes = [
	{ path: '', redirectTo: 'stock-entry', pathMatch: 'full' },
	{ path: 'stock-entry', component: EntryFormComponent },
	{ path: 'free-entry', component: EntryFormComponent },
	{ path: 'search-entry', component: SearchComponent }

];

@NgModule({
	declarations: [
		AppComponent,
		EntryFormComponent,
		EntryTableComponent,
		SearchComponent,
		SearchResultComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes)
	],
	providers: [ FormService, TableService, SearchService ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }

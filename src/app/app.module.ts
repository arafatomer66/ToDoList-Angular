import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { DcHerosComponent } from './dc-heros/dc-heros.component';
import { RouterModule, Routes } from '@angular/router';

const routeLists: Routes = [
  { path: "", component: DcHerosComponent },
 
]


@NgModule({
  declarations: [
    AppComponent,

    DcHerosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeLists)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

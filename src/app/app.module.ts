import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule, RouterModule, BrowserModule, FormsModule, ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

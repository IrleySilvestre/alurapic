import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, SigninComponent]
})
export class HomeModule { }
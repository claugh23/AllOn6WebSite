import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContactComponent } from './form-contact/form-contact.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [
    FormContactComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContactComponent } from './form-contact/form-contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  declarations: [
    FormContactComponent,
    HomePageComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';

const routes: Routes = [

  {path:'All-On-6-Home',component:HomePageComponent},
  {path:'**',redirectTo:'All-On-6-Home',pathMatch:'full'},
  {path:'**',redirectTo:'All-On-6-Home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

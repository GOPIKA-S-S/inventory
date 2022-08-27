import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { FrontComponent } from './front/front.component';
import { ServicesComponent } from './services/services.component';
import { TableComponent } from './table/table.component';
import { ChartComponent } from './chart/chart.component';
import { SignupComponent } from './signup/signup.component';




const routes: Routes = [
  {path:'front',component:FrontComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'admin',component:AdminComponent},
  {path:'table',component:TableComponent},
  {path:'chart',component:ChartComponent},
  {path:'signup',component:SignupComponent}
  

  
  
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

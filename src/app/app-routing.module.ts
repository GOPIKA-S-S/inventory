import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { FrontComponent } from './front/front.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { AddComponent } from './add/add.component';
import { ProductComponent } from './product/product.component';




const routes: Routes = [
  {path:'front',component:FrontComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'admin',component:AdminComponent},
 {path:'signup',component:SignupComponent},
 {path:'add',component:AddComponent},
 {path:'product',component:ProductComponent}
  

  
  
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

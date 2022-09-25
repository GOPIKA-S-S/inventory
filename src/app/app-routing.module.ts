import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminComponent } from './admin/admin.component';
import { FrontComponent } from './front/front.component';
import { ServicesComponent } from './services/services.component';
import { AddComponent } from './add/add.component';
import { ProductComponent } from './product/product.component';
import { EditComponent } from './edit/edit.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { SignupsComponent } from './signups/signups.component';
import { ContactusComponent } from './contactus/contactus.component';
import { InvoicedesignComponent } from './invoicedesign/invoicedesign.component';




const routes: Routes = [
  {path:'front',component:FrontComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'services',component:ServicesComponent},
  {path:'admin',component:AdminComponent},
 {path:'add',component:AddComponent},
 {path:'product',component:ProductComponent},
 {path:'edit',component:EditComponent},
 {path:'invoice',component:InvoiceComponent},
 {path:'customer',component:CustomerComponent},
 {path:'order',component:OrderComponent},
 {path:'signups',component:SignupsComponent},
 {path:'contactus',component:ContactusComponent},
 {path:'invoicedesign',component:InvoicedesignComponent}
  

  
  
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

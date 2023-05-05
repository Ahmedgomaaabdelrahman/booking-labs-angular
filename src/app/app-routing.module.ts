import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrator/administrator.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  { path: '' , redirectTo:'/labs' , pathMatch:'full'},
  { path : 'admin' , component: AdministratorComponent},
  { path : 'labs', component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

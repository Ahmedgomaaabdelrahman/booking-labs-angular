import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { CustomerComponent } from './customer/customer.component';
import { HeaderComponent } from './header/header.component';
import { LabComponent } from './lab/lab.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdministratorComponent,
    CustomerComponent,
    HeaderComponent,
    LabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

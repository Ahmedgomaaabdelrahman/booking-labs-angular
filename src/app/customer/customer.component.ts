import { Component } from '@angular/core';
import { Lab } from '../lab.model';
import { AdminService } from '../admin.service';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  allLabs : Lab[] = [];
  constructor(private adminService: AdminService , private customerService: CustomerService){}

  ngOnInit(): void {
    this.adminService.getAllLabs();
  }

  
}

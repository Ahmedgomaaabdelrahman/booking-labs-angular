import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Lab } from '../lab.model';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit{

  allLabs : Lab[] = [];
  constructor(private adminService: AdminService){}

  ngOnInit(): void {
    this.adminService.getAllLabs();
  }

}

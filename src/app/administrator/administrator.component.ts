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
  constructor(private adminService: AdminService){

    console.log("Dddddd")
  }

  ngOnInit(): void {
    console.log("all labs ")
    this.adminService.getAllLabs().subscribe((data) => {
      console.log("all labs ", data);
      this.allLabs = data;
    });
  }

}

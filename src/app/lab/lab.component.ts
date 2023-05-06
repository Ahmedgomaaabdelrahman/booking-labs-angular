import { Component, Input, OnInit } from '@angular/core';
import { Lab } from '../lab.model';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit{
  @Input('lab') labData : Lab | undefined ;

  
  ngOnInit(): void {
    console.log(this.labData)
  }

}

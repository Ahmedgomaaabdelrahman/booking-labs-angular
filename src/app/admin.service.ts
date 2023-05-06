import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lab } from './lab.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  addLab(){

  }

  editLab(){

  }

  deleteLab(){

  }
  
  getAllLabs() {
    return this.http.get<Lab[]>("http://localhost:3000/labs");
  }
}

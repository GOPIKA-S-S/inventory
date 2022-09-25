import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }
  Signup(regdata:any){
    return this.http.post<any>('http://localhost:3200/signups',regdata)
  }
  Addprdt(product:any){
    return this.http.post<any>('http://localhost:3200/admin',product)
  }
  viewprdt=()=>{
    return this.http.get('http://localhost:3200/product')
 
 }
}

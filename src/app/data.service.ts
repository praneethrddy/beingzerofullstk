import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {   }
  
  getData(){
    return this.http.get('https://api.github.com/users/praneethrddy');
  }
}

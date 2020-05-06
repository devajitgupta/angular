import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {model_name} from 'path';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ROOT_URL = "http://localhost/api/";
  
  constructor(private http: HttpClient){}
  
    getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.ROOT_URL);

  

}

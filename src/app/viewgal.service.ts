import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewgalService {

  constructor(private http:HttpClient) { }
  vgal=()=>
  {
    return this.http.get("http://jsonplaceholder.typicode.com/photos")
  }
}

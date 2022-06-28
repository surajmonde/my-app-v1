import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Data } from 'src/app/model/data';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  url: string = "http://localhost:3000/data/";

  getData() {
    return this.http.get<Data[]>(this.url)
  }

  addData(data: any) {
    return this.http.post<Data>(this.url, data);
  }
  
  deleteData(ids: any) {
    const deletUrl = `${this.url}${ids}`;
    return this.http.delete(deletUrl)
  }
}

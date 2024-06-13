import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FakeapiserviceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  createPost(postData:any): Observable<any>{
return this.http.post<any>(this.apiUrl,postData)
  }
}

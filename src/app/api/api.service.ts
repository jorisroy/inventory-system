import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "http://127.0.0.1:8000/api";
  httpOptions;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json'
      })
    }
  }

  login(request) {
    return this.http.post(this.url+"/login", request, this.httpOptions )
      .pipe(
        
      );
  }

  handleError(error: HttpErrorResponse) {
    console.log(HttpErrorResponse);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  private readonly APIUrl = "https://localhost:44328/v1/MySocial/Auth";

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }


  postLogin(val: any): Observable<any[]> {
    return this.http.post<any>(this.APIUrl + '/Login', val, this.headers);
  }
  postRegister(val: any): Observable<any[]> {
    return this.http.post<any>(this.APIUrl + '/Register', val, this.headers);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { getSafePropertyAccessString } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DisplayPostService {

  private readonly APIUrl = "https://localhost:44328/v1/MySocial/Post";

  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  private convert(val: any, val2: any): any {
    var data = {
      id: val,
      fid: val2
    };
    return data;
  }

  getPost(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/' + val, this.headers);
  }

  getUsers(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/User/' + val, this.headers);
  }

  getFriends(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Friends/' + val, this.headers);
  }

  getMyPost(val: any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Profile/' + val, this.headers);
  }



  addFriend(id: any, fid: any): Observable<any[]> {
    return this.http.post<any>(this.APIUrl + '/AddFriend', this.convert(id, fid), this.headers)
  }

  acceptFriend(id: any, fid: any): Observable<any[]> {
    return this.http.post<any>(this.APIUrl + '/AcceptFriend', this.convert(id, fid), this.headers);
  }

  rejectFriend(id: any, fid: any): Observable<any[]> {
    return this.http.post<any>(this.APIUrl + '/RejectFriend', this.convert(id, fid), this.headers);
  }


  addPost(val: any): Observable<any[]> {
    return this.http.post<any>(this.APIUrl + '/Post', val, this.headers)
  }

  deletePost(val: any): Observable<any[]> {
    return this.http.post<any>(this.APIUrl + '/DeletePost' , {postid : val}, this.headers)
  }

  editPost(val: any): Observable<any[]> {
    return this.http.put<any>(this.APIUrl + '/EditPost', val, this.headers)
  }
}

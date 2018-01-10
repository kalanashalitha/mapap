import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  public authenticateUser(idToken:string):Observable<any>{
    console.log("aaaaaaaaaaaaaaaaaaaaaaaa"+idToken)
    return this.http.post('api/user/authenticate',idToken)
  }

}

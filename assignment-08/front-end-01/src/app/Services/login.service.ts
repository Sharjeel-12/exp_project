import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
base_url:string="http://172.16.103.84:85/api/Auth/login";

isAdmin:boolean=false;
isReceptionist:boolean=false;


constructor(private http:HttpClient) { }

getLoginResponse(username:string,pass:string):Observable<any>
{
  return this.http.post<any>(this.base_url,{email:username,password:pass});
}



}

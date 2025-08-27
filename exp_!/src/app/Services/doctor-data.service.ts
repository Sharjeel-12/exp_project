import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/doctor';
import { CreateDoctorDto } from '../models/create-doctor-dto';
@Injectable({
  providedIn: 'root'
})
export class DoctorDataService {
token:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBleGFtcGxlLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwidWlkIjoiMyIsImV4cCI6MjA3MTU1MjQ2NiwiaXNzIjoiUGF0aWVudFZpc2l0TWFuYWdlciIsImF1ZCI6IlBhdGllbnRWaXNpdE1hbmFnZXJVc2VycyJ9.dD7CT-3BeuIcXlAM6ggGKXZFYKP4MXkPfMiK0o6k2Tk";
baseUrl:string="https://localhost:49428/api/Doctors";
  constructor(private http:HttpClient) {
   }

  getAllDoctors():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.baseUrl,{headers:{'Authorization':'Bearer '+this.token}})
  }
  getDoctorByID(id:number):Observable<Doctor>{
    return this.http.get<Doctor>(this.baseUrl+`/${id}`,{headers:{'Authorization':'Bearer '+this.token}})
  }
  deleteDoctorByID(id:number|null|undefined):Observable<Doctor>{
    return this.http.delete<Doctor>(this.baseUrl+`/${id}`,{headers:{'Authorization':'Bearer '+this.token}})
  }
  AddNewDoctor(p:CreateDoctorDto):Observable<Doctor|void>{
    return this.http.post<Doctor>(this.baseUrl,p,{headers:{'Authorization':"Bearer "+this.token}})
  }
  UpdateDoctor(id:number,body:Doctor):Observable<Doctor|void>{
        return this.http.put<Doctor>(this.baseUrl+`/${id}`,body,{headers:{'Authorization':"Bearer "+this.token}})

  }
}

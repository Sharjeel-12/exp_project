import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient';
import { CreatePatientDto } from '../models/create-patient-dto';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {
//admin token
  token:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBleGFtcGxlLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwidWlkIjoiMyIsImV4cCI6MjA3MTU0ODgxMSwiaXNzIjoiUGF0aWVudFZpc2l0TWFuYWdlciIsImF1ZCI6IlBhdGllbnRWaXNpdE1hbmFnZXJVc2VycyJ9.ppSrnsaIFitQrm8CEbHw66VrdfOLjFfTwXveM9zrQTA";
baseUrl:string="https://localhost:49428/api/Patients";
  constructor(private http:HttpClient) {
   }

  getAllPatients():Observable<Patient[]>{
    return this.http.get<Patient[]>(this.baseUrl,{headers:{'Authorization':'Bearer '+this.token}})
  }
  getPatientByID(id:number):Observable<Patient>{
    return this.http.get<Patient>(this.baseUrl+`/${id}`,{headers:{'Authorization':'Bearer '+this.token}})
  }
  deletePatientByID(id:number|null|undefined):Observable<Patient>{
    return this.http.delete<Patient>(this.baseUrl+`/${id}`,{headers:{'Authorization':'Bearer '+this.token}})
  }
  AddNewPatient(p:CreatePatientDto):Observable<Patient|void>{
    return this.http.post<Patient>(this.baseUrl,p,{headers:{'Authorization':"Bearer "+this.token}})
  }
  UpdatePatient(id:number,body:Patient):Observable<Patient|void>{
        return this.http.put<Patient>(this.baseUrl+`/${id}`,body,{headers:{'Authorization':"Bearer "+this.token}})

  }

}

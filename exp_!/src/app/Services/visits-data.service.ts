import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visit, CreateVisitDto, UpdateVisitDto } from '../models/visit';

@Injectable({ providedIn: 'root' })
export class VisitDataService {
  // Keep this base URL consistent with your project
  private apiUrl = 'https://localhost:49428/api/Visits';

  constructor(private http: HttpClient) {}

  private headers(): HttpHeaders {
    // Mirror whatever your Patient/Doctor services do for auth
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbkBleGFtcGxlLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwidWlkIjoiMyIsImV4cCI6MjA3MTU2OTA0NCwiaXNzIjoiUGF0aWVudFZpc2l0TWFuYWdlciIsImF1ZCI6IlBhdGllbnRWaXNpdE1hbmFnZXJVc2VycyJ9.JkH2gveIw04UjBQe8QXDlyudYLNgE4hp6dKOHg2bpdU';
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getAllVisits(): Observable<Visit[]> {
    return this.http.get<Visit[]>(this.apiUrl, { headers: this.headers() });
  }

  getVisitById(id: number): Observable<Visit> {
    return this.http.get<Visit>(`${this.apiUrl}/${id}`, { headers: this.headers() });
  }

  addVisit(body: CreateVisitDto): Observable<Visit | void> {
    return this.http.post<Visit | void>(this.apiUrl, body, { headers: this.headers() });
  }

  updateVisit(id: number, body: UpdateVisitDto): Observable<Visit | void> {
    return this.http.put<Visit | void>(`${this.apiUrl}/${id}`, body, { headers: this.headers() });
  }

  deleteVisit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.headers() });
  }
}

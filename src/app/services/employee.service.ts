import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://192.168.1.15:8000/api/employees';

  constructor(private http: HttpClient) {}

  createEmployee(employeeRequest: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, employeeRequest);
  }
}

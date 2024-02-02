import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient:HttpClient) { }
  getAllEmployees():Observable<any>
  {
      return this.httpClient.get<any>
      ("https://localhost:44301/api/Employee");
  }
  saveEmployee(newEmployee:Employee):Observable<Employee>
  {
    return this.httpClient.post<Employee>
    ("https://localhost:44301/api/Employee",newEmployee);
  }
  updateEmployee(editEmployee:Employee):Observable<Employee>
  {
    return this.httpClient.put<Employee>
    ("https://localhost:44301/api/Employee",editEmployee);
  }
  deleteEmployee(id:number):Observable<any>
  {
    return this.httpClient.delete<any>
    ("https://localhost:44301/api/Employee/"+id);
  }
}

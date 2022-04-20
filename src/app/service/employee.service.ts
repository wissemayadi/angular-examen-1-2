import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

   
  fetchEmployee(){
    return this.http.get("http://localhost:4500/employee");
  }


addEmployee(data :any){
  return this.http.post("http://localhost:4500/employee",data);

}

deleteEmployee(id :any){
  return this.http.delete("http://localhost:4500/employee/"+id);
}

updateEmployee(id :any,data:any){
  return this.http.put("http://localhost:4500/employee/"+id,data);
}

getEmployeeById(id:any){
  return this.http.get("http://localhost:4500/employee/"+id);

}
}

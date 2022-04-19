import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
list:any;
id:any;
  constructor(private s:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  this.s.fetchEmployee().subscribe(
     (s)=>{
      this.list=s;
     }
   )
  }

  delete(id:any){
   
   return this.s.deleteEmployee(id).subscribe(
     ()=>{
       alert('user deleted successufuly');
       this.router.navigate(['create'])
     }
   )
  
  }
  
}

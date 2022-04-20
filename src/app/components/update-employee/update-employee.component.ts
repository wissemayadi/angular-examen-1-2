import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
id:any;
firstname:any;
lastname:any;
age:any;
email:any;
salary:any;
password:any;

employee:any;
  constructor(private s:EmployeeService,private ac:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
     this.id=this.ac.snapshot.params['id'];
     this.s.getEmployeeById(this.id).subscribe(
       (r)=>{
       this.employee=r;
       this.firstname=this.employee.firstname;
       this.lastname=this.employee.lastname;
       this.age=this.employee.age;
       this.email=this.employee.email;
       this.salary=this.employee.salary;
       this.password=this.employee.password;


       }
     )
  }
update(data:any){
this.s.updateEmployee(this.id,data).subscribe(
  ()=>{
    alert('update successfully')
    this.router.navigate(['/list']);
  }
)
}
}

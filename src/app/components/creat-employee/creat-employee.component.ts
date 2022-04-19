import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-creat-employee',
  templateUrl: './creat-employee.component.html',
  styleUrls: ['./creat-employee.component.css']
})
export class CreatEmployeeComponent implements OnInit {

  constructor(private s:EmployeeService, private router:Router) { }

  ngOnInit(): void {
  }

  add(f:any){
    this.s.addEmployee(f).subscribe(
      ()=>{
        this.router.navigate(['list']);
      }
    )

  }

}

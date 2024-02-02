import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent {
  employeeList:Employee[]=[];
  newEmployee:Employee = new Employee();
  editEmployee:Employee = new Employee();

  constructor(private employeeService:EmployeeService){}
ngOnInit(){
  this.getAll();
}
  getAll()
  {
    this.employeeService.getAllEmployees().subscribe(
      (response)=>{
        this.employeeList = response;
        console.log(this.employeeList);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  SaveClick()
  {
    if(this.newEmployee.name=="") {
      alert('Name Empty !!!');
      return;
    }
    //alert(this.newEmployee.name)
    this.employeeService.saveEmployee(this.newEmployee).subscribe(
      (response)=>{
        // alert('data saved')
        this.getAll();
        this.newEmployee.name="";
        this.newEmployee.address="";
        this.newEmployee.salary=0;
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  EditClick(emp:Employee){
    //alert(emp.name)
    this.editEmployee=emp;
  }
  UpdateClick(){
    //alert(this.editEmployee.name)
    this.employeeService.updateEmployee(this.editEmployee).subscribe(
      (response)=>{
        this.getAll();
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  DeleteClick(id:number){
    let ans=window.confirm('Want to delete data ??');
    if(!ans) return;
    //alert(id)
    this.employeeService.deleteEmployee(id).subscribe(
      (response)=>{
        this.getAll();
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}

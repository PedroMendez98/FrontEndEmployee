import { Component, OnInit, inject } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employe.model';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [FormsModule, NgFor, MatCardModule, CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',

})

export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  employeeId: number | undefined;
  isActive = false;
  myForm = false;
  alertMessage: string | null = null;

  private employeeService = inject(EmployeeService);

  ngOnInit(): void {

  }

  updateIconActivation(activate: boolean) {
    this.isActive = activate;
  }

  getEmployees(): void {
    this.employeeService.getAllEmployees().subscribe((data) => {

      if (data) {
        this.employees = data;
        console.log(data)
      } else {
        this.showAlert("Intente nuevamente");
      }

    });
  }

  searchEmployees(): void {
    console.log(this.employeeId);
    if (this.employeeId === undefined || this.employeeId === null) {
      this.getEmployees();
    } else {
      const searchId = this.employeeId;
      if (searchId != undefined) {
        const id = searchId;
        this.employeeService.getEmployeeById(id)
          .subscribe(employee => {
            if (employee) {
              this.employees = [employee]; 
            } else {
              this.showAlert("Intente nuevamente");
            }
          });
      }

    }
  }

  showAlert(message: string): void {
    this.alertMessage = message;
    setTimeout(() => {
      this.alertMessage = null;
    }, 5000);
  }

  closeAlert(): void {
    this.alertMessage = null;
  }
}

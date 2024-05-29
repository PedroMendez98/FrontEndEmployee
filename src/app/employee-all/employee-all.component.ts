import { Component, OnInit, inject } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../model/employe.model';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-employee-all',
  standalone: true,
  imports: [FormsModule, NgFor, MatCardModule, CommonModule],
  templateUrl: './employee-all.component.html',
  styleUrl: './employee-all.component.css'
})

export class EmployeeAllComponent {
  employees: Employee[] = [];
  isActive = false;
  myForm = false;
  alertMessage: string | null = null;

  private employeeService = inject(EmployeeService);

  ngOnInit(): void {

    this.employeeService.getAllEmployees().subscribe((data) => {
      if (data) {
        this.employees = data;
      } else {
        this.showAlert("Intente nuevamente");
      }
    });

  }

  updateIconActivation(activate: boolean) {
    this.isActive = activate;
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

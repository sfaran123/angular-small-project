import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EmployeeService } from 'src/app/shared/_services/http/employee.service';

import { ErrorMessages } from 'src/app/shared/_consts/error-messages';
import { israelIdValidator } from 'src/app/shared/_validators/israelValidatorId.validator';
import { EmployeeModel } from 'src/app/shared/_models/employee.model';

@Component({
  selector: 'app-new-employee',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  readonly errorMessages = ErrorMessages;

  employeeForm: FormGroup;
  employee: EmployeeModel;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.employee = this.route.snapshot.data.employee;
    this.employeeForm = this.fb.group({
      name: [null, Validators.required],
      magnetCard: [null],
      IdNumber: [null, [israelIdValidator, Validators.required]],
      externalId: [null],
      gender: [null, Validators.required],
      phone: [null],
      address: [null],
      birthDate: [null],
      workStartDate: [null],
      // employeeStores: [null],
      isCashier: [null],
      isDeliveryPerson: [null],
      isManager: [null],
      isMinusApprove: [null],
      isDiscountApprove: [null],
      canViewReport: [null],
      canRunZ: [null],
      canViewX: [null],
      canMakeRefund: [null],
      canDeleteSales: [null],
      canChangePrice: [null],
      isActive: [null],
      byShiftCalculation: [null],
      contactName: [null],
      contactPhone: [null],
      contactCloseness: [null],
      bank: [null],
      branch: [null],
      bankAccountNumber: [null],
    });
    if (this.employee) {
      this.employeeForm.patchValue(this.employee);
    }
  }

  submit() {
    if (this.employeeForm.valid) {
      if (this.employee) {
        this.employeeService.updateEmployee(this.employeeForm.value, this.employee.id)
          .then(response => this.handleResponse(response));
      } else {
        this.employeeService.newEmployee(this.employeeForm.value).then(response => this.handleResponse(response));
      }
    }
  }

  private handleResponse(response) {
    if (response) {
      this.router.navigate(['/employees', 'table']);
    }
  }
}

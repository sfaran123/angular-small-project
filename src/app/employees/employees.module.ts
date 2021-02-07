import {NgModule} from '@angular/core';
import {EmployeesComponent} from './employees.component';
import { RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  { path: '', component: EmployeesComponent },
];

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class EmployeesModule {}

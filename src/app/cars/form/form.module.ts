import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';

import {FormComponent} from 'src/app/cars/form/form.component';

import {CarsService} from '../../shared/_services/http/cars.service';
import {CarResolve} from '../../shared/_resolves/car.resolve';
import {BranchesResolve} from '../../shared/_resolves/branches.resolve';
import {BranchesService} from '../../shared/_services/http/branches.service';


const routes: Routes = [
  {path: '', component: FormComponent, resolve: { selectBranches: BranchesResolve}},
  {path: ':{id}', component: FormComponent , resolve: {car: CarResolve, selectBranches: BranchesResolve}},
];

@NgModule({
  declarations: [FormComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule
  ],
  providers: [CarsService, CarResolve, BranchesResolve, BranchesService]
})
export class FormModule {
}

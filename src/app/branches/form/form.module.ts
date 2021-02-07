import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import {FormComponent} from 'src/app/branches/form/form.component';
import {BranchesService} from '../../shared/_services/http/branches.service';


const routes: Routes = [
  {path: '', component: FormComponent},
  {path: ':{id}', component: FormComponent},
];

@NgModule({
  declarations: [FormComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule
  ],
  providers: [BranchesService]
})
export class FormModule {
}

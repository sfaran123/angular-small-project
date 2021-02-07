import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {CarsComponent} from './cars.component';
import {DataTableModule} from '../shared/_components/data-table/data-table.module';
import {CarsService} from '../shared/_services/http/cars.service';


const routes: Routes = [
  { path: '', component: CarsComponent },
];

@NgModule({
  declarations: [CarsComponent],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        CommonModule,
        DataTableModule
    ],
  providers: [CarsService]
})
export class CarsModule {}

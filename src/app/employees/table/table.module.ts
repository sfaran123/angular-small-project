import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import { DataTableModule } from 'src/app/shared/_components/data-table/data-table.module';

import { TableComponent } from 'src/app/employees/table/table.component';

import { EmployeeService } from 'src/app/shared/_services/http/employee.service';

const routes: Routes = [
  {path: '' , component: TableComponent},
];

@NgModule({
  declarations: [TableComponent],
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		DataTableModule,
	],
  providers: [EmployeeService]
})
export class TableModule {}

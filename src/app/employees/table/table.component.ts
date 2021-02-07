import { Component, OnInit, ViewChild } from '@angular/core';
import { PencilPaper, Trash } from 'src/app/shared/_consts/img-paths';
import { DataTableComponent } from 'src/app/shared/_components/data-table/data-table.component';
import { EmployeeService } from 'src/app/shared/_services/http/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'

})
export class TableComponent {

  @ViewChild(DataTableComponent, { static: true }) dataTable: DataTableComponent;


  trash = Trash;
  pencil = PencilPaper;

  readonly columns = [
    { name: 'name', label: 'NAME' },
    { name: 'magnetCard', label: 'MAGNETIC_CARD' },
    { name: 'phone', label: 'PHONE' },
    { name: 'isActive', label: 'STATUS' },
  ];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  fetchItems() {
    this.employeeService.getEmployees(this.dataTable.criteria)
      .then((response) => {
        if (response) {
          this.dataTable.setItems(response);
        }
      });
  }

  edit(id: any) {
    this.router.navigate(['/cars', 'new', id]);
  }

  delete(id: any) {
    this.employeeService.deleteEmployee(id)
      .then((response) => {
        if (response) {
          this.fetchItems();
        }
      });
  }

  newEmployee() {
    this.router.navigate(['/cars', 'new']);

  }
}

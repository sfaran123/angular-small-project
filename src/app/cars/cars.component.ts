import {Component, OnInit, ViewChild} from '@angular/core';
import {DataTableComponent} from '../shared/_components/data-table/data-table.component';
import {PencilPaper, Trash} from '../shared/_consts/img-paths';
import {CarsService} from '../shared/_services/http/cars.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.styl']
})
export class CarsComponent implements OnInit {

  @ViewChild(DataTableComponent, { static: true }) dataTable: DataTableComponent;

  trash = Trash;
  pencil = PencilPaper;

  readonly columns = [
    { name: 'type', label: 'type' },
    { name: 'brand', label: 'brand' },
    { name: 'model', label: 'model' },
    { name: 'price', label: 'price' },
    { name: 'branchId', label: 'branch' },
  ];

  constructor(private carService: CarsService, private router: Router) { }

  ngOnInit() {
  }

  fetchItems() {
    this.carService.getCars(this.dataTable.criteria)
      .then((response) => {
        if (response) {
          this.dataTable.setItems(response);
        }
      });
  }

  edit(id: any) {
    this.router.navigate(['/cars', 'new', id]);
  }

  newCar() {
    this.router.navigate(['/cars', 'new']);
  }

  delete(id: any) {
    this.carService.deleteCar(id)
      .then((response) => {
        if (response) {
          this.fetchItems();
        }
      });
  }


}

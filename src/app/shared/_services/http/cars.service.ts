import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';

import { DataTableResponse } from 'src/app/shared/_components/data-table/classes/data-table-response';
import { DataTableCriteria } from 'src/app/shared/_components/data-table/classes/data-table-criteria';

import {CarModel} from '../../_models/car.model';

@Injectable()
export class CarsService extends BaseHttpService {

  private readonly endPoint = this.apiUrl + '/car';

  constructor(private http: HttpClient) {
    super();
  }

  getCars(criteria: DataTableCriteria): Promise<DataTableResponse> {
    return this.http.post(this.apiUrl + '/cars', this.setDataTableParams(criteria))
      .toPromise()
      .then(response => response as DataTableResponse)
      .catch(() => null);
  }

  getCar(carId: number): Promise<CarModel> {
    return this.http.get(this.endPoint + '/' + carId)
      .toPromise()
      .then(response => response as CarModel)
      .catch(() => null);
  }

  newCar(values: object): Promise<any> {
    return this.http.post(this.endPoint, values)
      .toPromise()
      .then(response => response)
      .catch(() => null);
  }

  updateCar(values: object, carId: number): Promise<boolean> {
    return this.http.put(this.endPoint + '/' + carId, values)
      .toPromise()
      .then(() => true)
      .catch(() => false);
  }

  deleteCar(carId: number): Promise<boolean> {
    return this.http.delete(this.endPoint + '/' + carId)
      .toPromise()
      .then(() => true)
      .catch(() => false);
  }
}

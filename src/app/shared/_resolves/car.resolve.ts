import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import {CarsService} from '../_services/http/cars.service';
import {CarModel} from '../_models/car.model';

@Injectable()
export class CarResolve implements Resolve<CarModel> {

  constructor(private carsService: CarsService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.carsService.getCar(route.params['{id}']).then(response => response as CarModel);
  }
}

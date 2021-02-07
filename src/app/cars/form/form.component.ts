import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CarBranches, CarModel} from '../../shared/_models/car.model';
import {ErrorMessages} from '../../shared/_consts/error-messages';
import {CarsService} from '../../shared/_services/http/cars.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SelectItem} from "../../shared/_consts/select-item";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})
export class FormComponent implements OnInit {

  readonly errorMessages = ErrorMessages;

  readonly carBranches = Object.keys(CarBranches).map(branch => {
    return {value: branch, label: CarBranches[branch]};
  });

  form: FormGroup;
  car: CarModel = null;
  selectBranches: SelectItem[];

  constructor(private fb: FormBuilder,
              private carService: CarsService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.selectBranches = this.route.snapshot.data.selectBranches;
    this.car = this.route.snapshot.data.car;
    this.form = this.fb.group({
      type: [null, Validators.required],
      brand: [null, Validators.required],
      model: [null, Validators.required],
      price: [null, Validators.required],
      branchId: [null, Validators.required]
    });
    if (this.car) {
      this.form.patchValue(this.car);
    }
  }

  submit() {
    if (this.form.valid) {
      if (this.car) {
        this.carService.updateCar(this.form.value, this.car.id)
          .then(response => this.handleResponse(response));
      } else {
        this.carService.newCar(this.form.value)
          .then((response) => this.handleResponse(response));
      }
    }
  }

  private handleResponse(response) {
    if (response) {
      this.router.navigate(['/cars', 'table']);
    }
  }
}

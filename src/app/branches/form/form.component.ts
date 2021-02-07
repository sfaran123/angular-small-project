import { Component, OnInit } from '@angular/core';
import {ErrorMessages} from '../../shared/_consts/error-messages';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BranchModel} from '../../shared/_models/branch.model';
import {BranchesService} from '../../shared/_services/http/branches.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.styl']
})
export class FormComponent implements OnInit {

  readonly errorMessages = ErrorMessages;

  form: FormGroup;
  branch: BranchModel;

  constructor(private fb: FormBuilder, private branchesService: BranchesService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.branch = this.route.snapshot.data.branch;
    this.form = this.fb.group({
      name: [null, Validators.required],
      manager: [null, Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      if (this.branch) {
        this.branchesService.updateBranch(this.form.value, this.branch.id)
          .then(res => this.handleResponse(res));
      } else {
        this.branchesService.newBranch(this.form.value)
          .then(res => this.handleResponse(res));
      }
    }
  }

  private handleResponse(response) {
      this.router.navigate(['/branches', 'table']);
  }

}

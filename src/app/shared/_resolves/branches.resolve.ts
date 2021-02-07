import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import {SelectItem} from '../_consts/select-item';
import {BranchesService} from '../_services/http/branches.service';

@Injectable()
export class BranchesResolve implements Resolve<SelectItem[]> {

  constructor(private branchesService: BranchesService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.branchesService.select().then(response => response as SelectItem[]);
  }
}

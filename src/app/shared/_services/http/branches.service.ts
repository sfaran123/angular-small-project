import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';

import { DataTableResponse } from 'src/app/shared/_components/data-table/classes/data-table-response';
import { DataTableCriteria } from 'src/app/shared/_components/data-table/classes/data-table-criteria';


import {BranchModel} from '../../_models/branch.model';
import {SelectItem} from '../../_consts/select-item';

@Injectable()
export class BranchesService extends BaseHttpService {

  private readonly endPoint = this.apiUrl + '/branch';

  constructor(private http: HttpClient) {
    super();
  }

  select(): Promise<SelectItem[]> {
    return this.http.get(this.endPoint + '/select')
      .toPromise()
      .then((response) => response as SelectItem[])
      .catch(() => []);
  }

  getBranches(criteria: DataTableCriteria): Promise<DataTableResponse> {
    return this.http.post(this.apiUrl + '/branches', this.setDataTableParams(criteria))
      .toPromise()
      .then(response => response as DataTableResponse)
      .catch(() => null);
  }

  getBranch(branchId: number): Promise<BranchModel> {
    return this.http.get(this.endPoint + '/' + branchId)
      .toPromise()
      .then(response => response as BranchModel)
      .catch(() => null);
  }

  newBranch(values: object): Promise<any> {
    return this.http.post(this.endPoint, values)
      .toPromise()
      .then(response => response)
      .catch(() => null);
  }

  updateBranch(values: object, branchId: number): Promise<boolean> {
    return this.http.put(this.endPoint + '/' + branchId, values)
      .toPromise()
      .then(() => true)
      .catch(() => false);
  }

  deleteBranch(branchId: number): Promise<boolean> {
    return this.http.delete(this.endPoint + '/' + branchId)
      .toPromise()
      .then(() => true)
      .catch(() => false);
  }
}

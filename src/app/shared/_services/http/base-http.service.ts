import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable()
export class BaseHttpService {

  readonly apiUrl = environment.apiUrl;

  setDataTableParams(criteria): object {
    const formattedParams = {
      ...criteria.filters,
      sortBy: criteria.sort.column,
      sortDir: criteria.sort.direction,
      page: criteria.page,
      keyword: '',
      isCheckAll: false
    };
    if (criteria.keyword) {
      formattedParams.keyword = criteria.keyword;
    }
    return formattedParams;
  }
}

export class DataTableCriteria {
  sort: { column?: string, direction?: 'ASC' | 'DESC' };
  filters: object;

  constructor() {
    this.filters = {};
    this.sort = {};
  }
}

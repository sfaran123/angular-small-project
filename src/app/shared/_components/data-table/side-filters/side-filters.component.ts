import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {DataTableColumn} from '../classes/data-table-column';

// import { MonthSelect } from 'app/shared/_const/select-item/months';
// import { Years } from 'app/shared/_const/select-item/years';
// import { DateInputDirective } from 'app/shared/_directives/date-input.directive';

@Component({
  selector: 'app-side-filters',
  templateUrl: './side-filters.component.html',
  styleUrls: ['./side-filters.component.css'],
  animations: [
    trigger('slideToggle', [
      state('inactive', style({
        display: 'none',
        height: '0',
        opacity: '0'
      })),
      state('active', style({
        display: '*',
        height: '*',
        opacity: '1'
      })),
      transition('active => inactive', animate('200ms')),
      transition('inactive => active', animate('200ms'))
    ])
  ]
})
export class SideFiltersComponent implements OnInit {

  @ViewChild('form', {static: true}) form: NgForm;

  @Input() columns: DataTableColumn[];

  @Output() searchSubmitted = new EventEmitter<object>();

  @Input() showFilters = 'inactive';

  ngOnInit() {
    this.columns = this.columns.filter(column => column.isSearchable !== false);
  }

  search(): void {
    const values = {};
    console.log(this.form.value);
    for (const i in this.form.value) {
      if (this.form.value[i]) {
        values[i] = this.form.value[i];
      }
    }
    this.searchSubmitted.emit(values);
  }

  reset(): void {
    this.form.reset();
    this.search();
  }

  setFilters(): void {
    this.showFilters = (this.showFilters === 'active') ? 'inactive' : 'active';
  }
}

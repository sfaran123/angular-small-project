import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableCriteria } from './classes/data-table-criteria';
import { DataTableResponse } from './classes/data-table-response';
import { DataTableColumn } from './classes/data-table-column';

@Component ({
   selector: 'app-data-table',
   templateUrl: './data-table.component.html',
   styleUrls: ['./data-table.component.css'],
 })
 export class DataTableComponent implements OnInit {

   @Input()  tableName: string;
   @Input() columns: DataTableColumn[] = [];
   @Input() hasActionsHeader = true;
   @Input() showFilters = 'inactive';

   @Output() fetchItems = new EventEmitter<boolean>();

  items: {} [] = [];
  criteria = new DataTableCriteria() ;

  constructor(protected router: Router) {}

   ngOnInit() {
     this.init();
   }

   private init(): void {
     this.loadItems();
   }

   loadItems(): void {
     this.fetchItems.emit(true);
   }

   setItems(response: DataTableResponse): void {
    this.items = response && response.items ? response.items : [];
  }

  search(event?: KeyboardEvent): void {
    if ((event && (event.code === 'Enter' || event.code === 'NumpadEnter')) || !event) {
      this.loadItems();
    }
  }

  extendedSearch(values: object): void {
    this.criteria.filters = values;
    this.search();
  }

  sort(column: DataTableColumn): void {
    this.criteria.sort.column = column.name;
    this.criteria.sort.direction = (this.criteria.sort.direction === 'DESC') ? 'ASC' : 'DESC';
    this.loadItems();
  }

}

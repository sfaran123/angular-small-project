import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule, MatSelectModule,
  MatSlideToggleModule, MatTooltipModule
} from '@angular/material';

import { DataTableComponent } from './data-table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SideFiltersComponent } from './side-filters/side-filters.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatMenuModule, MatCheckboxModule,
    MatTooltipModule, MatButtonModule, MatIconModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatMenuModule, MatCheckboxModule,
    MatTooltipModule, MatButtonModule, MatIconModule,
    RouterModule,
    PaginationComponent,
    SideFiltersComponent,
    DataTableComponent,
  ],
  declarations: [DataTableComponent, PaginationComponent, SideFiltersComponent],
})
export class DataTableModule {}

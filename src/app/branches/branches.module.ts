import {NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {DataTableModule} from '../shared/_components/data-table/data-table.module';

import {BranchesComponent} from './branches.component';
import {BranchesService} from '../shared/_services/http/branches.service';


const routes: Routes = [
  { path: '', component: BranchesComponent },
];

@NgModule({
  declarations: [BranchesComponent],
    imports: [
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        CommonModule,
        DataTableModule
    ],
  providers: [BranchesService]
})
export class BranchesModule {}

import {Component, OnInit, ViewChild} from '@angular/core';
import {PencilPaper, Trash} from '../shared/_consts/img-paths';
import {DataTableComponent} from '../shared/_components/data-table/data-table.component';
import {BranchesService} from "../shared/_services/http/branches.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.styl']
})
export class BranchesComponent implements OnInit {

  @ViewChild(DataTableComponent, { static: true }) dataTable: DataTableComponent;

  trash = Trash;
  pencil = PencilPaper;

  readonly columns = [
    { name: 'name', label: 'name' },
    { name: 'manager', label: 'manager' },

  ];


  constructor(private branchesService: BranchesService, private router: Router) { }

  ngOnInit() {
  }

  fetchItems() {
    this.branchesService.getBranches(this.dataTable.criteria)
      .then((response) => {
        if (response) {
          this.dataTable.setItems(response);
        }
      });
  }

  edit(id: any) {
    this.router.navigate(['/branches', 'new', id]);
  }

  newBranch() {
    this.router.navigate(['/branches', 'new']);
  }

  delete(id: any) {
    this.branchesService.deleteBranch(id)
      .then((response) => {
        if (response) {
          this.fetchItems();
        }
      });
  }

}

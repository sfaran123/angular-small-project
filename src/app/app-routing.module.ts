import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'employees', loadChildren: () => import('./employees/employees-routing.module').then(m => m.EmployeesRoutingModule) },
  { path: 'cars', loadChildren: () => import('./cars/cars-routing.module').then(m => m.CarsRoutingModule) },
  { path: 'branches', loadChildren: () => import('./branches/branches-routing.module').then(m => m.BranchesRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

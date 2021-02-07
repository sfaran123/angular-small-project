import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'new', loadChildren: () => import('src/app/cars/form/form.module').then(m => m.FormModule) },
  { path: 'table', loadChildren: () => import('src/app/cars/cars.module').then(m => m.CarsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class CarsRoutingModule {}

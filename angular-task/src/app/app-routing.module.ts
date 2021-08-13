import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {path:'curd',component:CrudComponent},
  {path:'reactive',component:ReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

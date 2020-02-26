import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormGenerateComponent } from './form-generate.component';


const routes: Routes = [
  { path: '', component: FormGenerateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGenerateRoutingModule { }

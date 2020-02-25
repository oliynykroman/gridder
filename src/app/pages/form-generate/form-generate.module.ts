import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGenerateRoutingModule } from './form-generate-routing.module';
import { FormGenerateComponent } from './form-generate.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { MatLabel, MatFormField } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 


@NgModule({
  declarations: [FormGenerateComponent, FormComponent, ResultComponent],
  imports: [
    CommonModule,
    FormGenerateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule
  ]
})
export class FormGenerateModule { }

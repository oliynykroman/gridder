import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGenerateRoutingModule } from './form-generate-routing.module';
import { FormGenerateComponent } from './form-generate.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [FormGenerateComponent, FormComponent, ResultComponent],
  imports: [
    CommonModule,
    FormGenerateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule
  ]
})
export class FormGenerateModule { }

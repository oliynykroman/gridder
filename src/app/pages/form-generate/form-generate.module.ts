import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormGenerateRoutingModule } from './form-generate-routing.module';
import { FormGenerateComponent } from './form-generate.component';
import { FormComponent } from './form/form.component';
import { ResultComponent } from './result/result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FormGenerateComponent, FormComponent, ResultComponent],
  imports: [
    CommonModule,
    FormGenerateRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbAccordionModule
  ]
})
export class FormGenerateModule { }

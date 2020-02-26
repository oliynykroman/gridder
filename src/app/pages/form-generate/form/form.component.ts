import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  public items: FormArray;
  public units = ['px', 'fr', '%'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formInit();
  }
  formInit() {
    this.form = this.fb.group({
      items: this.fb.array([this.createItem()])
    })
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      units: '',
      width: null
    });
  }

  addItem(): void {
    this.items = this.form.get('items') as FormArray;
    this.items.push(this.createItem());
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formInit();
  }
  formInit() {
    this.form = this.fb.group({
      aliases: this.fb.array([
        this.fb.control('')
      ])
    })
  }
  addAlias() {
    // this.form..aliases.push(this.fb.control(''));
  }
}

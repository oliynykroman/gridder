import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';


export class gridResult {
  columns: string;
  rows: string;
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() emitGrid = new EventEmitter <any> ();
  public form: FormGroup;
  public items: FormArray;
  public units = ['px', 'fr', '%'];
  public result;
  public columns = '';
  public rows = '';

  public gridResult: gridResult = {
    columns: '',
    rows: ''
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formInit();
    this.onChanges();
  }
  formInit() {
    this.form = this.fb.group({
      columns: this.fb.array([this.createItem()]),
      rows: this.fb.array([this.createItem()])
    })
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      units: 'fr',
      width: 1
    });
  }

  addItem(type: string): void {
    this.items = this.form.get(type) as FormArray;
    this.items.push(this.createItem());
  }

  onChanges() {
    this.form.valueChanges.subscribe(val => {
      this.columns = 'grid-template-columns: ';
      this.rows = 'grid-template-rows: ';

      for (let i = 0; i < val.columns.length; i++) {
        this.columns += val.columns[i].width + val.columns[i].units + ' ';
      }
      for (let i = 0; i < val.rows.length; i++) {
        this.rows += val.rows[i].width + val.rows[i].units + ' ';
      }
      console.log(this.columns);
      console.log(this.rows);
      this.gridResult.columns = this.columns;
      this.gridResult.rows = this.rows;
      // this.voted.emit(this.gridResult);
    });
  }

  onSubmit() {
    this.result = this.form.value;
  }
}

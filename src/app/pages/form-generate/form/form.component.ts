import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Grid } from 'src/app/models/grid.model';
import { GridService } from 'src/app/services/grid.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  public items: FormArray;
  public units = ['px', 'fr', '%'];
  public result;
  public columns = '';
  public rows = '';
  public content = '';
  public panelOpenState = false;

  public gridResult: Grid = new Grid();

  constructor(private fb: FormBuilder, private gridService: GridService) { }

  ngOnInit(): void {
    this.formInit();
    this.onChanges();
  }
  formInit() {
    this.form = this.fb.group({
      columns: this.fb.array([this.createItem()]),
      rows: this.fb.array([this.createItem()]),
      content: this.fb.array([this.createContent()])
    })
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      units: 'fr',
      width: 1
    });
  }

  createContent(): FormGroup {
    return this.fb.group({
      containerName: '',
      containerColStart: '',
      containerColEnd: ''
    })
  }

  addItem(type: string): void {
    this.items = this.form.get(type) as FormArray;
    this.items.push(this.createItem());
  }

  addContent(type: string): void {
    this.items = this.form.get(type) as FormArray;
    this.items.push(this.createContent());

  }
  onChanges() {
    this.form.valueChanges.subscribe(val => {
      this.columns = '';
      this.rows = '';
      this.content = '';

      for (let i = 0; i < val.columns.length; i++) {
        this.columns += val.columns[i].width + val.columns[i].units + ' ';
      }
      for (let i = 0; i < val.rows.length; i++) {
        this.rows += val.rows[i].width + val.rows[i].units + ' ';
      }
      for (let i = 0; i < val.content.length; i++) {
        this.content += val.content[i].containerColStart + '/' + val.content[i].containerColEnd;
      }
      this.gridResult.columns = this.columns;
      this.gridResult.rows = this.rows;
      this.gridResult.content = this.content;
      this.gridService.updateGrid(this.gridResult);
      console.log(this.gridResult);
    });
  }

  onSubmit() {
    this.result = this.form.value;
    console.log(this.result);
  }

  deleteItem(index: number, type: string) {
    this.items = this.form.get(type) as FormArray;
    this.items.removeAt(index);
  }
}

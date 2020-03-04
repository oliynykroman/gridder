import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Grid, GridContent } from 'src/app/models/grid.model';
import { GridService } from 'src/app/services/grid.service';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [NgbAccordionConfig]
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  public items: FormArray;
  public units = ['px', 'fr', '%'];
  public unitsGap = ['px', '%'];
  public alignement = ['stretch', 'center', 'start', 'end'];
  public result;
  public columns = '';
  public rows = '';
  public content: GridContent[] = [];
  public panelOpenState = false;

  public gridResult: Grid = new Grid();

  constructor(private fb: FormBuilder, private gridService: GridService, config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit(): void {
    this.formInit();
    this.onChanges();
  }
  formInit() {
    this.form = this.fb.group({
      columnGap: this.fb.group({
        width: [''],
        units: ['px']
      }),
      rowGap: this.fb.group({
        width: [''],
        units: ['px']
      }),
      gridAlignement: this.fb.group({
        vertical: ['stretch'],
        horizontal: ['stretch'],
      }),
      columns: this.fb.array([this.createItem()]),
      rows: this.fb.array([this.createItem()]),
      content: this.fb.array([this.createContent()])
    })
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      units: 'fr',
      width: ''
    });
  }

  createContent(): FormGroup {
    return this.fb.group({
      containerName: '',
      containerColStart: '',
      containerColEnd: '',
      containerRowStart: '',
      containerRowEnd: '',
    });
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
      this.gridService.updateGrid(this.form.value);
    });
  }

  onSubmit() {
    this.result = this.form.value;
  }

  onReset() {
    this.form.reset();
  }

  deleteItem(index: number, type: string) {
    this.items = this.form.get(type) as FormArray;
    this.items.removeAt(index);
  }

}

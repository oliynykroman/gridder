import { Component, OnInit } from '@angular/core';
import { GridService } from 'src/app/services/grid.service';
import { Grid, cellRow } from 'src/app/models/grid.model';
import { GridHelper } from 'src/app/helpers/grid.helper';
import { GridProperties } from 'src/app/enums/grid-property.enum';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public grid;
  public gridColumns: string = '';
  public gridRows: string = '';
  public ieGridColumns: string = '';
  public ieGridRows: string = '';
  public gridColumnGap: string = '';
  public gridRowGap: string = '';
  public gridCell = [];
  public exampleCelCounter: number = 1;
  public exampleGrid = {};
  public exampleGridIe = {};
  public resultGrid = {};
  public resultGridIe = {};


  constructor(private gridService: GridService,
    private gridHelper: GridHelper) { }

  ngOnInit(): void {
    this.gridService.changeGrid$.subscribe(data => {
      this.grid = data;
      console.log(data);
      this.prepareGrid(data);
      this.prepareCell(data);
      this.exampleCelCounter = data.columns.length * data.rows.length;
    });
  }

  prepareGrid(data: Grid) {
    this.gridColumns = this.gridHelper.generateGreedProperty(data, GridProperties.columns);
    this.gridRows = this.gridHelper.generateGreedProperty(data, GridProperties.rows);
    this.gridColumnGap = data.columnGap.width + data.columnGap.units;
    this.gridRowGap = data.rowGap.width + data.rowGap.units;

    if (data.ieMode) {
      this.ieGridColumns = this.gridHelper.generateGreedPropertyLegacy(data, GridProperties.columns, this.gridColumnGap);
      this.ieGridRows = this.gridHelper.generateGreedPropertyLegacy(data, GridProperties.rows, this.gridRowGap);
    }
    this.exampleGrid = {
      'grid-template-columns': this.gridColumns,
      'grid-template-rows': this.gridRows,
      'grid-column-gap': this.gridColumnGap,
      'grid-row-gap': this.gridRowGap
    }
    this.exampleGridIe = {
      'display': '-ms-grid',
      '-ms-grid-columns': this.ieGridColumns,
      'grid-template-columns': this.gridColumns,
      '-ms-grid-rows': this.ieGridRows,
      'grid-template-rows': this.gridRows,
      'grid-column-gap': this.gridColumnGap,
      'grid-row-gap': this.gridRowGap
    }
    this.resultGrid = {
      'grid-template-columns': this.gridColumns,
      'grid-template-rows': this.gridRows,
      'grid-column-gap': this.gridColumnGap,
      'grid-row-gap': this.gridRowGap,
      'justify-items': this.grid.gridAlignement.horizontal,
      'align-items': this.grid.gridAlignement.vertical
    }
    this.resultGridIe = {};
  };

  prepareCell(data: Grid) {
    this.gridCell = [];

    for (let i = 0; i < data.content.length; i++) {
      let temp = new cellRow('', '', '');
      temp.col = data.content[i].containerColStart + '/' + data.content[i].containerColEnd;
      temp.row = data.content[i].containerRowStart + '/' + data.content[i].containerRowEnd;
      temp.name = data.content[i].containerName;
      this.gridCell.push(temp);
    }
  }
}
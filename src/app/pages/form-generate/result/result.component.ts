import { Component, OnInit } from '@angular/core';
import { GridService } from 'src/app/services/grid.service';
import { Grid, GridContent } from 'src/app/models/grid.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  public grid: Grid = new Grid();
  public gridColumns: string = '';
  public gridRows: string = '';
  public gridCell = [];
  constructor(private gridService: GridService) { }

  ngOnInit(): void {
    this.gridService.changeGrid$.subscribe(data => {
      this.grid = data;
      this.prepareGrid(data);
      this.prepareCell(data);
      console.log(data)
    });
  }

  prepareGrid(data: Grid) {
    this.gridColumns = '';
    this.gridRows = '';
    for (let i = 0; i < data.columns.length; i++) {
      this.gridColumns += data.columns[i].width + data.columns[i].units + ' ';
    }
    for (let i = 0; i < data.rows.length; i++) {
      this.gridRows += data.rows[i].width + data.rows[i].units + ' ';
    }
  }

  prepareCell(data: Grid) {
    this.gridCell = [];
    let cellRow = {
      col: '',
      row: ''
    }
    for (let i = 0; i < data.content.length; i++) {
      cellRow.col = data.content[i].containerColStart + '/' + data.content[i].containerColEnd;
      cellRow.row = data.content[i].containerRowStart + '/' + data.content[i].containerRowEnd;
      this.gridCell.push(cellRow);
    }
    console.log(this.gridCell);
  }


}

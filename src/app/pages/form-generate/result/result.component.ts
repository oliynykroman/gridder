import { Component, OnInit } from '@angular/core';
import { GridService } from 'src/app/services/grid.service';
import { Grid, GridContent, cellRow } from 'src/app/models/grid.model';
import { GridHelper } from 'src/app/helpers/grid.helper';
import { GridProperties } from 'src/app/enums/grid-property.enum';

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
  constructor(private gridService: GridService,
    private gridHelper: GridHelper) { }

  ngOnInit(): void {
    this.gridService.changeGrid$.subscribe(data => {
      this.grid = data;
      this.prepareGrid(data);
      this.prepareCell(data);
    });
  }

  prepareGrid(data: Grid) {
    this.gridColumns = this.gridHelper.generateGreedProperty(data, GridProperties.columns);
    this.gridRows = this.gridHelper.generateGreedProperty(data, GridProperties.rows);
  }

  prepareCell(data: Grid) {
    this.gridCell = [];

    for (let i = 0; i < data.content.length; i++) {
      let temp = new cellRow('', '');
      temp.col = data.content[i].containerColStart + '/' + data.content[i].containerColEnd;
      temp.row = data.content[i].containerRowStart + '/' + data.content[i].containerRowEnd;

      this.gridCell.push(temp);
    }
  }


}
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Grid } from '../models/grid.model';

@Injectable({
  providedIn: 'root'
})
export class GridService {

  private changeGrid = new Subject<Grid>();
  changeGrid$ = this.changeGrid.asObservable();

  constructor() { }

  public updateGrid(grid: Grid) {
    this.changeGrid.next(grid);
  }

}

import { Component, OnInit } from '@angular/core';
import { gridResult } from '../form/form.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  resultGrid(grid: gridResult) {
    console.log(grid);
  }

}

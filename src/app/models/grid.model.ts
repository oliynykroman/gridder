
export class Grid {
    columns: GridStructure[];
    rows: GridStructure[];
    content: GridContent[];
}


export class GridContent {
    containerName: string;
    containerColStart: string;
    containerColEnd: string;
    containerRowStart: string;
    containerRowEnd: string;
}
export class GridStructure {
    name: string;
    units: string;
    width: number
}


export class cellRow {
    col: string;
    row: string;
    constructor(col: string, row: string) {
      this.col = col;
      this.row = row;
    }
  }
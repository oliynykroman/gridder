
export class Grid {
    columns: GridStructure[];
    rows: GridStructure[];
    content: GridContent[];
    columnGap: GridStructure;
    rowGap: GridStructure;
}


export class GridContent {
    containerName: string;
    containerColStart: string;
    containerColEnd: string;
    containerRowStart: string;
    containerRowEnd: string;
}
export class GridStructure {
    units: string;
    width: number;
}

export class cellRow {
    col: string;
    row: string;
    name: string;
    constructor(col: string, row: string, name: string) {
        this.col = col;
        this.row = row;
        this.name = name;
    }
}
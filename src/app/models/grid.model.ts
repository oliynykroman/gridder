
export class Grid {
    columns: GridStructure[];
    rows: GridStructure[];
    content: GridContent[];
    columnGap: GridStructure;
    rowGap: GridStructure;
    ieMode: boolean;
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
    colIeStart: string;
    rowIeStart: string;
    colIeEnd: number;
    rowIeEnd: number;
    constructor(col: string, row: string, name: string, colIeStart: string, rowIeStart: string, colIeEnd: number, rowIeEnd: number) {
        this.col = col;
        this.row = row;
        this.name = name;
        this.colIeStart = colIeStart;
        this.colIeEnd = colIeEnd;
        this.rowIeStart = rowIeStart;
        this.rowIeEnd = rowIeEnd;
    }
}
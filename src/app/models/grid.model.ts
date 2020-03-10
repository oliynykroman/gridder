
export class Grid {
    columns: GridStructure[];
    rows: GridStructure[];
    content: GridContent[];
    columnGap: GridGap;
    rowGap: GridGap;
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

export class GridGap {
    width: string;
    units: string;
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
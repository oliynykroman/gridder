import { Injectable } from "@angular/core";
import { Grid } from 'src/app/models/grid.model';

@Injectable({ providedIn: 'root' })
export class GridHelper {
    public generateGreedProperty(data: Grid, propertyName: string): string {
        let result = '';
        for (let i = 0; i < data[propertyName].length; i++) {
            result += data[propertyName][i].width + data[propertyName][i].units + ' ';
        }
        return result;
    }

    public generateGreedPropertyLegacy(data: Grid, propertyName: string, gapValue: string): string {
        let result = '';
        for (let i = 0; i < data[propertyName].length; i++) {
            if ((i + 1) !== data[propertyName].length) {
                result += data[propertyName][i].width + data[propertyName][i].units + ' ' + gapValue + ' ';
            } else {
                result += data[propertyName][i].width + data[propertyName][i].units + ' ';
            }
        }
        return result;
    }
}
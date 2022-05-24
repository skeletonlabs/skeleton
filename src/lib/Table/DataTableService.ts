// Data Table Service

// Maps object by provided keys
export function mapTableSource(keys: any[], object: any[]): any[] {
    return object.map(origRow => {
        const mappedRow: any = {};
        for (let i = 0; i <keys.length; i++) {
            mappedRow[keys[i]] = origRow[keys[i]];
        }
        return mappedRow;
    });
}

// Sorts multi-dimensional array in ascending order by provided key
export function sortTableAscending(arr: any[], key: string): void {
    if (typeof arr[0][key] === 'number') {
        arr.sort((x, y) => x[key] - y[key]);
        return;
    } else {
        arr.sort((x, y) => {
            let a = String(x[key]).toUpperCase(),
                b = String(y[key]).toUpperCase();
            return a == b ? 0 : a > b ? 1 : -1;
        });
    }
}
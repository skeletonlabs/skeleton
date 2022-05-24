// Data Table Service

// Object Mapper
export function mapper(keys: any[], source: any[]): any[] {
    return source.map(origRow => {
        const mappedRow: any = {};
        for (let i = 0; i <keys.length; i++) {
            mappedRow[keys[i]] = origRow[keys[i]];
        }
        return mappedRow;
    });
}
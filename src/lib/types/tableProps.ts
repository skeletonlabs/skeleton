type TablePropKeys = 
| 'Name'
| 'Prop' 
| 'Style Prop'
| 'Type' 
| 'Default' 
| 'Values' 
| 'Required'
| 'Description'
| 'Slot'
| 'Event'

export type TableProps<T = void> = T extends Record<string,unknown> ? TableKeyedSource<T> : TableArray
type TableArray = {
    headings: TablePropKeys[]
    source: string[][]
}

type TableKeyedSource<T extends Record<string, unknown>> = {
    headings: TablePropKeys[]
    source: T[]
}
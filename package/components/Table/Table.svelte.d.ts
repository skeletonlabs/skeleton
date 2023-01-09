import { SvelteComponentTyped } from "svelte";
import type { TableSource } from './types';
declare const __propDef: {
    props: {
        [x: string]: any;
        source: TableSource;
        interactive?: boolean | undefined;
        element?: string | undefined;
        text?: string | undefined;
        color?: string | undefined;
        regionHead?: string | undefined;
        regionBody?: string | undefined;
        regionFoot?: string | undefined;
    };
    events: {
        selected: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TableProps = typeof __propDef.props;
export type TableEvents = typeof __propDef.events;
export type TableSlots = typeof __propDef.slots;
export default class Table extends SvelteComponentTyped<TableProps, TableEvents, TableSlots> {
}
export {};

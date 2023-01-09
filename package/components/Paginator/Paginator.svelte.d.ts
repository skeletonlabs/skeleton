import { SvelteComponentTyped } from "svelte";
import type { PaginationSettings } from './types';
declare const __propDef: {
    props: {
        [x: string]: any;
        settings?: PaginationSettings | undefined;
        justify?: string | undefined;
        text?: string | undefined;
        select?: string | undefined;
        disabled?: boolean | undefined;
        amountText?: string | undefined;
        buttonClasses?: string | undefined;
        buttonTextPrevious?: string | undefined;
        buttonTextNext?: string | undefined;
    };
    events: {
        amount: CustomEvent<any>;
        page: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PaginatorProps = typeof __propDef.props;
export type PaginatorEvents = typeof __propDef.events;
export type PaginatorSlots = typeof __propDef.slots;
export default class Paginator extends SvelteComponentTyped<PaginatorProps, PaginatorEvents, PaginatorSlots> {
}
export {};

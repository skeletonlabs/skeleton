import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        target?: string | undefined;
        allowedHeadings?: string | undefined;
        label?: string | undefined;
        width?: string | undefined;
        spacing?: string | undefined;
        text?: string | undefined;
        hover?: string | undefined;
        rounded?: string | undefined;
        regionLabel?: string | undefined;
        regionList?: string | undefined;
    };
    events: {
        click: MouseEvent;
        keypress: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TableOfContentsProps = typeof __propDef.props;
export type TableOfContentsEvents = typeof __propDef.events;
export type TableOfContentsSlots = typeof __propDef.slots;
/** Allows you to quickly navigate the hierarchy of headings for the current page. */
export default class TableOfContents extends SvelteComponentTyped<TableOfContentsProps, TableOfContentsEvents, TableOfContentsSlots> {
}
export {};

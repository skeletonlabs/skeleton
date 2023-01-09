import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        separator?: string | undefined;
        text?: string | undefined;
        label?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type BreadcrumbProps = typeof __propDef.props;
export type BreadcrumbEvents = typeof __propDef.events;
export type BreadcrumbSlots = typeof __propDef.slots;
export default class Breadcrumb extends SvelteComponentTyped<BreadcrumbProps, BreadcrumbEvents, BreadcrumbSlots> {
}
export {};

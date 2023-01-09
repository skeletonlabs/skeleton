import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        /** Exposes parent props to this component. */ parent: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ModalExampleListProps = typeof __propDef.props;
export type ModalExampleListEvents = typeof __propDef.events;
export type ModalExampleListSlots = typeof __propDef.slots;
/** This example creates a simple form modal. */
export default class ModalExampleList extends SvelteComponentTyped<ModalExampleListProps, ModalExampleListEvents, ModalExampleListSlots> {
}
export {};

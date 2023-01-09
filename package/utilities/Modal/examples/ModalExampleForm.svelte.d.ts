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
export type ModalExampleFormProps = typeof __propDef.props;
export type ModalExampleFormEvents = typeof __propDef.events;
export type ModalExampleFormSlots = typeof __propDef.slots;
/** This example creates a simple form modal. */
export default class ModalExampleForm extends SvelteComponentTyped<ModalExampleFormProps, ModalExampleFormEvents, ModalExampleFormSlots> {
}
export {};

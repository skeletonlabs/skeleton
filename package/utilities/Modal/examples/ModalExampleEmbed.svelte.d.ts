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
export type ModalExampleEmbedProps = typeof __propDef.props;
export type ModalExampleEmbedEvents = typeof __propDef.events;
export type ModalExampleEmbedSlots = typeof __propDef.slots;
/** This example creates an embedded video modal. */
export default class ModalExampleEmbed extends SvelteComponentTyped<ModalExampleEmbedProps, ModalExampleEmbedEvents, ModalExampleEmbedSlots> {
}
export {};

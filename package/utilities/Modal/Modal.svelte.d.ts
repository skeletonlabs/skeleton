import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        duration?: number | undefined;
        background?: string | undefined;
        width?: string | undefined;
        height?: string | undefined;
        padding?: string | undefined;
        spacing?: string | undefined;
        rounded?: string | undefined;
        shadow?: string | undefined;
        buttonNeutral?: string | undefined;
        buttonPositive?: string | undefined;
        buttonTextCancel?: string | undefined;
        buttonTextConfirm?: string | undefined;
        buttonTextSubmit?: string | undefined;
        regionBackdrop?: string | undefined;
        regionHeader?: string | undefined;
        regionBody?: string | undefined;
        regionFooter?: string | undefined;
    };
    events: {
        backdrop: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ModalProps = typeof __propDef.props;
export type ModalEvents = typeof __propDef.events;
export type ModalSlots = typeof __propDef.slots;
export default class Modal extends SvelteComponentTyped<ModalProps, ModalEvents, ModalSlots> {
}
export {};

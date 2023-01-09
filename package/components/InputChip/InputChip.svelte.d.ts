import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        label?: string | undefined;
        value?: string[] | undefined;
        whitelist?: string[] | undefined;
        allowUpperCase?: boolean | undefined;
        allowDuplicates?: boolean | undefined;
        validation?: ((...args: any[]) => boolean) | undefined;
        chip?: string | undefined;
        hover?: string | undefined;
        padding?: string | undefined;
        rounded?: string | undefined;
        ring?: string | undefined;
    };
    events: {
        keypress: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InputChipProps = typeof __propDef.props;
export type InputChipEvents = typeof __propDef.events;
export type InputChipSlots = typeof __propDef.slots;
export default class InputChip extends SvelteComponentTyped<InputChipProps, InputChipEvents, InputChipSlots> {
}
export {};

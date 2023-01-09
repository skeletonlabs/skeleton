import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        keyup: KeyboardEvent;
        keypress: KeyboardEvent;
        click: CustomEvent<any>;
        keydown: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LightSwitchProps = typeof __propDef.props;
export type LightSwitchEvents = typeof __propDef.events;
export type LightSwitchSlots = typeof __propDef.slots;
export default class LightSwitch extends SvelteComponentTyped<LightSwitchProps, LightSwitchEvents, LightSwitchSlots> {
}
export {};

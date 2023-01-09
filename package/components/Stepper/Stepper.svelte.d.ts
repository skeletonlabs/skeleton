import { SvelteComponentTyped } from "svelte";
import { type Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        [x: string]: any;
        active?: Writable<number> | undefined;
        length?: number | undefined;
        duration?: number | undefined;
        rounded?: string | undefined;
        clickNavigation?: boolean | undefined;
        color?: string | undefined;
        background?: string | undefined;
        buttonClassesBack?: string | undefined;
        buttonClassesNext?: string | undefined;
        buttonClassesComplete?: string | undefined;
        buttonTextBack?: string | undefined;
        buttonTextNext?: string | undefined;
        buttonTextComplete?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type StepperProps = typeof __propDef.props;
export type StepperEvents = typeof __propDef.events;
export type StepperSlots = typeof __propDef.slots;
export default class Stepper extends SvelteComponentTyped<StepperProps, StepperEvents, StepperSlots> {
}
export {};

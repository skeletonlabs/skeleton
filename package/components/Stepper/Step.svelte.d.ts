import { SvelteComponentTyped } from "svelte";
import type { Writable } from 'svelte/store';
declare const __propDef: {
    props: {
        [x: string]: any;
        index?: number | undefined;
        locked?: boolean | undefined;
        dispatch?: any;
        active?: Writable<number> | undefined;
        length?: number | undefined;
        rounded?: string | undefined;
        duration?: number | undefined;
        clickNavigation?: boolean | undefined;
        highestStepReached?: Writable<number> | undefined;
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
        keypress: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        header: {};
        default: {};
    };
};
export type StepProps = typeof __propDef.props;
export type StepEvents = typeof __propDef.events;
export type StepSlots = typeof __propDef.slots;
export default class Step extends SvelteComponentTyped<StepProps, StepEvents, StepSlots> {
}
export {};

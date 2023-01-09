import { SvelteComponentTyped } from "svelte";
import type { ConicStop } from './types';
declare const __propDef: {
    props: {
        [x: string]: any;
        stops?: ConicStop[] | undefined;
        legend?: boolean | undefined;
        spin?: boolean | undefined;
        width?: string | undefined;
        hover?: string | undefined;
    };
    events: {
        click: MouseEvent;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        keypress: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ConicGradientProps = typeof __propDef.props;
export type ConicGradientEvents = typeof __propDef.events;
export type ConicGradientSlots = typeof __propDef.slots;
export default class ConicGradient extends SvelteComponentTyped<ConicGradientProps, ConicGradientEvents, ConicGradientSlots> {
}
export {};

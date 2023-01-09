import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        tag?: string | undefined;
        direction?: string | undefined;
        from?: string | undefined;
        to?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type GradientHeadingProps = typeof __propDef.props;
export type GradientHeadingEvents = typeof __propDef.events;
export type GradientHeadingSlots = typeof __propDef.slots;
export default class GradientHeading extends SvelteComponentTyped<GradientHeadingProps, GradientHeadingEvents, GradientHeadingSlots> {
}
export {};

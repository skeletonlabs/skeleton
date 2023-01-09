import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        name?: string | undefined;
        x?: string | undefined;
        y?: string | undefined;
        viewBox?: string | undefined;
        fill?: string | undefined;
        width?: string | undefined;
        height?: string | undefined;
        title?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SvgIconProps = typeof __propDef.props;
export type SvgIconEvents = typeof __propDef.events;
export type SvgIconSlots = typeof __propDef.slots;
export default class SvgIcon extends SvelteComponentTyped<SvgIconProps, SvgIconEvents, SvgIconSlots> {
}
export {};

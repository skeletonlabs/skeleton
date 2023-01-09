import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        language?: string | undefined;
        code?: string | undefined;
        background?: string | undefined;
        text?: string | undefined;
        color?: string | undefined;
        rounded?: string | undefined;
        buttonCopy?: string | undefined;
    };
    events: {
        copy: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CodeBlockProps = typeof __propDef.props;
export type CodeBlockEvents = typeof __propDef.events;
export type CodeBlockSlots = typeof __propDef.slots;
export default class CodeBlock extends SvelteComponentTyped<CodeBlockProps, CodeBlockEvents, CodeBlockSlots> {
}
export {};

interface ArgsMenu {
    /** The value of 'x' from data-menu-[x] */
    menu: string;
    /** Origin - TRUE: fixed | FALSE: auto */
    fixed?: boolean;
    /** Clicks inside body will not close window */
    interactive?: boolean;
    /** Provide an optional callback function to handle open/close state changes. */
    state?: (e: {
        menu: string;
        state: boolean;
    }) => void;
}
export declare function menu(node: HTMLElement, args: ArgsMenu): {
    update: (newArgs: ArgsMenu) => void;
    destroy: () => void;
} | undefined;
export {};

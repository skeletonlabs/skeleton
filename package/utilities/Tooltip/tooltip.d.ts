export interface ArgsTooltip {
    /** The HTML content of the tooltip. */
    content: string;
    /** Provide a value of: top | bottom | left | right */
    position?: string;
    /** Sets the wrapping element to be either inline or block */
    inline?: boolean;
    /** Provide an optional callback function to handle open/close state changes. */
    state?: (e: {
        trigger: HTMLElement;
        state: boolean;
    }) => void;
    /** Provide a class to set the background color. */
    background?: string;
    /** Provide a class to set the text color. */
    color?: string;
    /** Provide a class to set the width. */
    width?: string;
    /** Provide a class to set the padding. */
    padding?: string;
    /** Provide a class to set the box shadow. */
    shadow?: string;
    /** Provide a class to set the border radius. */
    rounded?: string;
    /** Provide arbitrary classes to the container element. */
    regionContainer?: string;
    /** Provide arbitrary classes to the tooltip element. */
    regionTooltip?: string;
    /** Provide arbitrary classes to the tooltip arrow element. */
    regionArrow?: string;
}
export declare function tooltip(node: HTMLElement, args: ArgsTooltip): {
    update(newArgs: ArgsTooltip): void;
    destroy(): void;
};

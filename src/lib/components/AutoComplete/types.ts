/** Provides intellisense to compontent for available autocomplete functionality. */
export type Mode = "exclude" | "fuzzy" 

/** Provide intellisense for allowed settings for autocomplete action */
export type AutocompleteSettings = {
    /** Provided event types */
    event: 'click';
    /** Match the [data-autocomplete="targetNameHere"] */
    target: string
}
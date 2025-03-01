import type * as accordion from "@zag-js/accordion";
import { createContext } from "react";
import type { AccordionContextState } from "./types.js";

export const AccordionContext = createContext<AccordionContextState>({
	iconOpen: "-",
	iconClosed: "+",
	api: {} as ReturnType<typeof accordion.connect>,
});
export const AccordionItemContext = createContext<accordion.ItemProps>({
	value: "",
	disabled: false,
});

import type * as radioGroup from "@zag-js/radio-group";
import { createContext } from "react";
import type { SegmentContextState } from "./types.js";

export const SegmentContext = createContext<SegmentContextState>({
	api: {} as ReturnType<typeof radioGroup.connect>,
	indicatorText: "",
});

import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async () => {
        console.log("action reached");
        return { success: true }
    }
};
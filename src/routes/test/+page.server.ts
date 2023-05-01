import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({request}) => {
        console.log(await request.formData());
        return { success: true }
    }
};
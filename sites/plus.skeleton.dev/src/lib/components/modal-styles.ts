// Common Modal Styles

// Dialog Drawer ---

const dialogDrawerCommon = {
	backdrop:
		'fixed inset-0 z-50 bg-surface-50-950/50 transition transition-discrete opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100',
	positioner: 'fixed inset-0 z-50 flex',
	content:
		'h-screen card bg-surface-50-950/75 backdrop-blur-lg border-surface-200-800 w-sm shadow-xl transition transition-discrete opacity-0 starting:data-[state=open]:opacity-0 data-[state=open]:opacity-100 data-[state=open]:translate-x-0',
};

/** Drawer: Left Aligned */
export const dialogDrawerLeft = {
	backdrop: dialogDrawerCommon.backdrop,
	positioner: `${dialogDrawerCommon.positioner} justify-start`,
	content: `${dialogDrawerCommon.content} border-r p-4 space-y-4 -translate-x-full starting:data-[state=open]:-translate-x-full`,
};

/** Drawer: Right Aligned */
export const dialogDrawerRight = {
	backdrop: dialogDrawerCommon.backdrop,
	positioner: `${dialogDrawerCommon.positioner} justify-end`,
	content: `${dialogDrawerCommon.content} border-l translate-x-full starting:data-[state=open]:translate-x-full`,
};

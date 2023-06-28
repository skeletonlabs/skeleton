type ImageLinkArgs = {
	/** Image ID */
	id: ImageKey;
	/** Image Height */
	h: number;
	/** Image Width */
	w: number;
	/** Adds the fit=max query param */
	max?: boolean;
};

export function getImageLink({ id, h, w, max }: ImageLinkArgs): string {
	const path = images[id].raw;
	return `${path}&w=${w}&h=${h}&auto=format&fit=${max ? 'max' : 'crop'}`;
}

type ImageKey = keyof typeof images;

export const images = {
	YOErFW8AfkI: {
		raw: 'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3'
	},
	z_X0PxmBuIQ: {
		raw: 'https://images.unsplash.com/photo-1510111652602-195fc654aa83?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY0Nzl8&ixlib=rb-4.0.3'
	},
	'8vKVlNIbAc4': {
		raw: 'https://images.unsplash.com/photo-1617296537916-291a105cd2f4?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY1MTl8&ixlib=rb-4.0.3'
	},
	vjUokUWbFOs: {
		raw: 'https://images.unsplash.com/photo-1620562303747-ba21ca6f1530?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MjR8&ixlib=rb-4.0.3'
	},
	s0fXOuyTH1M: {
		raw: 'https://images.unsplash.com/photo-1597077962467-be16edcc6a43?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MzZ8&ixlib=rb-4.0.3'
	},
	CKZQ6g_FB2Q: {
		raw: 'https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3'
	},
	VYuJLsF4XQQ: {
		raw: 'https://images.unsplash.com/photo-1509130446053-899ae7358ce6?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NjF8&ixlib=rb-4.0.3'
	},
	'01D-_OtB8wQ': {
		raw: 'https://images.unsplash.com/photo-1620005839871-7ac4aed5ddbc?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NzN8&ixlib=rb-4.0.3'
	},
	eP2zYflRoNY: {
		raw: 'https://images.unsplash.com/photo-1597531072931-8fceba101e4e?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2OTB8&ixlib=rb-4.0.3'
	},
	'1SEH8qv-Obo': {
		raw: 'https://images.unsplash.com/photo-1612145342709-eadb6e22acca?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MDh8&ixlib=rb-4.0.3'
	},
	'c64AB11j-po': {
		raw: 'https://images.unsplash.com/photo-1597077917598-97ca3922a317?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MjF8&ixlib=rb-4.0.3'
	},
	tQ4fEcKfB1g: {
		raw: 'https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3'
	},
	SMvOSlgThHA: {
		raw: 'https://images.unsplash.com/photo-1617296539691-67feaadf389e?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NjF8&ixlib=rb-4.0.3'
	},
	azE50UpJDP0: {
		raw: 'https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NzN8&ixlib=rb-4.0.3'
	},
	'UhE2lwGn-DQ': {
		raw: 'https://images.unsplash.com/photo-1603855873822-0931a843ee3a?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3ODJ8&ixlib=rb-4.0.3'
	},
	'twVS-YjQn9Y': {
		raw: 'https://images.unsplash.com/photo-1508931133503-b1944a4ecdd5?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3OTV8&ixlib=rb-4.0.3'
	},
	EkW1r_eDjRs: {
		raw: 'https://images.unsplash.com/photo-1633053663400-655b31fb88ac?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MDV8&ixlib=rb-4.0.3'
	},
	'QDc-OQU9hFk': {
		raw: 'https://images.unsplash.com/photo-1578170222009-c7893aa20afd?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MTZ8&ixlib=rb-4.0.3'
	},
	QK_VtGYQV_U: {
		raw: 'https://images.unsplash.com/photo-1610220941077-1ec123e7c043?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4NjV8&ixlib=rb-4.0.3'
	},
	'3vj6GJ_lTa8': {
		raw: 'https://images.unsplash.com/photo-1605055618128-b2db3f874a0c?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4Nzh8&ixlib=rb-4.0.3'
	},
	C5NOq1BKlAk: {
		raw: 'https://images.unsplash.com/photo-1502768040783-423da5fd5fa0?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4ODd8&ixlib=rb-4.0.3'
	},
	'wzj86-5JVcM': {
		raw: 'https://images.unsplash.com/photo-1423110041833-0d5dfcc552e1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4OTl8&ixlib=rb-4.0.3'
	},
	hTv8aaPziOQ: {
		raw: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY5MzR8&ixlib=rb-4.0.3'
	}
} as const;

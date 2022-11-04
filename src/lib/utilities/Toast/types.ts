// Toast interface types

export interface ToastMessage {
	message: string;
	autohide?: boolean;
	timeout?: number;
	button?: {
		label: string;
		action: any;
	};
}

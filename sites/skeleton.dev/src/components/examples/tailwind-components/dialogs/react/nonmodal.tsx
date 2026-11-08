import { useRef } from "react";

export default function NonModal() {
	const dialogRef = useRef<HTMLDialogElement>(null);

	function toggle() {
		const dialog = dialogRef.current;
		if (!dialog) return;
		if (dialog.open) {
			dialog.close();
		} else {
			dialog.show();
		}
	}

	return (
		<div className="relative">
			{/* Dialog */}
			<dialog
				ref={dialogRef}
				closedby="any"
				className="dialog preset-filled animate-dialog bottom-full mb-2 [--dialog-left:50%] [--dialog-top:auto] [--dialog-translate:-50%_0]"
			>
				<p>This acts as a tooltip.</p>
			</dialog>

			{/* Trigger */}
			<button className="btn preset-filled" onClick={toggle}>
				Toggle Dialog
			</button>
		</div>
	);
}

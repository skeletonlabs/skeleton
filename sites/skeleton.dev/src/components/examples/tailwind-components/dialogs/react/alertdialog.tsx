import { useRef } from 'react';

export default function AlertDialog() {
	const dialogRef = useRef<HTMLDialogElement>(null);

	function showModal() {
		dialogRef.current?.showModal();
	}

	function closeModal() {
		dialogRef.current?.close();
	}

	return (
		<>
			{/* Dialog */}
			<dialog
				ref={dialogRef}
				role="alertdialog"
				aria-labelledby="alertdialog-title"
				aria-describedby="alertdialog-description"
				className="dialog animate-dialog preset-filled-error-500 [--dialog-backdrop:color-mix(in_oklab,var(--color-error-50-950)_75%,transparent)]"
			>
				<header>
					<h2 id="alertdialog-title" className="h3">
						Discard changes?
					</h2>
				</header>
				<article>
					<p id="alertdialog-description">You have unsaved changes that will be lost. This action cannot be undone.</p>
				</article>
				<footer className="flex justify-end gap-2">
					<button type="button" className="btn preset-tonal" onClick={closeModal}>
						Cancel
					</button>
					<button type="button" className="btn preset-filled" onClick={closeModal}>
						Discard
					</button>
				</footer>
			</dialog>

			{/* Trigger */}
			<button className="btn preset-filled" onClick={showModal}>
				Open Dialog
			</button>
		</>
	);
}

import { useRef } from 'react';

export default function Animation() {
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
			<dialog ref={dialogRef} className="dialog animate-dialog preset-filled-surface-100-900">
				<header>
					<h2 className="h3">Hello world!</h2>
				</header>
				<article>
					<p>Opening and closing this dialog fades the surface and backdrop.</p>
				</article>
				<footer className="flex justify-end">
					<form method="dialog">
						<button type="button" className="btn preset-tonal" onClick={closeModal}>
							Close
						</button>
					</form>
				</footer>
			</dialog>

			{/* Trigger */}
			<button className="btn preset-filled" onClick={showModal}>
				Open Dialog
			</button>
		</>
	);
}

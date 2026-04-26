import { useEffect, useRef } from 'react';

export default function Fullscreen() {
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;
		function onClose() {
			document.body.style.overflow = '';
		}
		dialog.addEventListener('close', onClose);
		return () => dialog.removeEventListener('close', onClose);
	}, []);

	function showModal() {
		document.body.style.overflow = 'hidden';
		dialogRef.current?.showModal();
	}

	function closeModal() {
		dialogRef.current?.close();
	}

	return (
		<>
			{/* Dialog */}
			<dialog ref={dialogRef} className="dialog dialog-fullscreen preset-filled-surface-100-900 animate-dialog">
				<header>
					<h2 className="h3">Hello world!</h2>
				</header>
				<article>
					<p>This dialog expands to fill the entire viewport and locks page scrolling while open.</p>
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

import { useEffect, useRef, useState } from 'react';

export default function Result() {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const [result, setResult] = useState<string>('—');

	useEffect(() => {
		const dialog = dialogRef.current;
		if (!dialog) return;
		function onClose() {
			setResult(dialog!.returnValue || '(dismissed)');
		}
		dialog.addEventListener('close', onClose);
		return () => dialog.removeEventListener('close', onClose);
	}, []);

	function showModal() {
		dialogRef.current?.showModal();
	}

	return (
		<>
			{/* Dialog */}
			<dialog ref={dialogRef} className="dialog preset-filled-surface-100-900 animate-dialog">
				<header>
					<h2 className="h3">Confirm action</h2>
				</header>
				<article>
					<p>Submitting either button closes the dialog and exposes its value via the dialog's returnValue.</p>
				</article>
				<footer className="flex justify-end gap-2">
					<form method="dialog" className="flex gap-2">
						<button type="submit" value="cancel" className="btn preset-tonal">
							Cancel
						</button>
						<button type="submit" value="confirm" className="btn preset-filled">
							Confirm
						</button>
					</form>
				</footer>
			</dialog>

			{/* Trigger */}
			<div className="flex flex-col items-center gap-3">
				<button className="btn preset-filled" onClick={showModal}>
					Open Dialog
				</button>
				<p className="text-sm opacity-75">
					Last result: <code>{result}</code>
				</p>
			</div>
		</>
	);
}

import { useRef } from 'react';

export default function Default() {
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
				className="rounded-container bg-surface-100-900 text-inherit max-w-[640px] top-1/2 left-1/2 -translate-1/2 p-4 space-y-4 z-10 backdrop:bg-surface-50/75 dark:backdrop:bg-surface-950/75"
			>
				<h2 className="h3">Hello world!</h2>
				<p>This is an example popover created using the native Dialog element.</p>
				<form method="dialog" className="flex justify-end">
					<button type="button" className="btn preset-tonal" onClick={closeModal}>
						Close
					</button>
				</form>
			</dialog>
			{/* Interface */}
			<div className="flex justify-center items-center">
				{/* Trigger */}
				<button className="btn preset-filled" onClick={showModal}>
					Open Modal
				</button>
			</div>
			<style>{`
				/* NOTE: add the following styles to your global stylesheet. */
				dialog,
				dialog::backdrop {
					--anim-duration: 250ms;
					transition:
						display var(--anim-duration) allow-discrete,
						overlay var(--anim-duration) allow-discrete,
						opacity var(--anim-duration);
					opacity: 0;
				}
				/* Animate In */
				dialog[open],
				dialog[open]::backdrop {
					opacity: 1;
				}
				/* Animate Out */
				@starting-style {
					dialog[open],
					dialog[open]::backdrop {
						opacity: 0;
					}
				}
			`}</style>
		</>
	);
}

import React from 'react';
import toast, { Toaster, type Toast } from 'react-hot-toast';

// Components ---

export const ToastInfo: React.FC = () => {
	return (
		<div className="card preset-filled py-2 px-3 shadow-xl">
			<p className="type-scale-1">Hello World! 👋</p>
		</div>
	);
};

export const ToastError: React.FC = () => {
	return (
		<div className="card preset-filled-error-500 py-2 px-3 shadow-xl">
			<p className="type-scale-1">Uh oh, something went wrong.</p>
		</div>
	);
};

export const ToastSuccess: React.FC<{ settings?: Toast }> = ({ settings }) => {
	return (
		<div className="card preset-filled-success-500 py-2 px-3 shadow-xl grid grid-cols-[auto_1fr] items-center gap-4">
			<p className="type-scale-1">The task was was completed successfully!</p>
			<button type="button" className="btn-icon btn-icon-sm type-scale-3 hover:preset-tonal" onClick={() => toast.dismiss(settings?.id)}>
				<span>&times;</span>
			</button>
		</div>
	);
};

// Example Page ---

export const Page: React.FC = () => {
	// Use `toast.custom()` to trigger a toast with a custom template.
	// Then supply the template as either JSX or a component.
	function triggerInfo() {
		toast.custom(() => <ToastInfo />, { duration: 5000 });
	}
	function triggerError() {
		toast.custom(() => <ToastError />, { duration: 5000 });
	}
	function triggerSuccess() {
		toast.custom((t) => <ToastSuccess settings={t} />, { duration: 2000 });
	}

	return (
		<>
			{/* Triggers */}
			<div className="flex gap-4">
				<button className="btn preset-tonal" onClick={triggerInfo}>
					Toast: Info
				</button>
				<button className="btn preset-tonal" onClick={triggerError}>
					Toast: Info
				</button>
				<button className="btn preset-tonal" onClick={triggerSuccess}>
					Toast: Info
				</button>
			</div>

			{/* Place the provider in global scope of your app. */}
			<Toaster position="bottom-right" />
		</>
	);
};

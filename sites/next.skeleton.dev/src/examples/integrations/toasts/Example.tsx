import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const Page: React.FC = () => {
	function notify() {
		toast.custom(() => <div className={`card preset-filled-primary-500 p-4 shadow-md`}>Hello World! 👋</div>);
	}

	return (
		<div>
			<button className="btn preset-tonal" onClick={notify}>
				Show Toast
			</button>
			<Toaster position="bottom-right" />
		</div>
	);
};

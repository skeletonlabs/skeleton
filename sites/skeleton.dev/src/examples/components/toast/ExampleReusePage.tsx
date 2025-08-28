import { toaster } from './toaster-react';

export default function () {
	return (
		<>
			<button
				className="btn preset-filled"
				onClick={() => {
					toaster.info({
						title: 'This is a toast!'
					});
				}}
			>
				Toast
			</button>
		</>
	);
}

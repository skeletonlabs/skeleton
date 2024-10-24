import { useToast } from '$lib/components/Toast/Toast.js';

export function Component() {
	const toast = useToast();

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Toast</h1>
			</header>
			<section className="space-y-4">
				<div className="flex items-center gap-4">
					<button
						className="btn preset-filled"
						onClick={() => {
							toast?.create({ title: 'Hello', placement: 'top-end' });
						}}
					>
						Trigger: top-right
					</button>
					<button
						className="btn preset-filled"
						onClick={() => {
							toast?.create({
								title: 'Data submitted!',
								description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
								type: 'success',
								placement: 'bottom-end'
							});
						}}
					>
						Trigger: bottom-right
					</button>
				</div>
			</section>
		</div>
	);
}

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Page,
});

function Page() {
	return (
		<div className="flex h-full w-full items-center justify-center">
			<div className="max-w-[600px] text-balance text-center">
				<p>
					This is a sandbox for <code className="code">@skeletonlabs/skeleton-react</code>. Select a feature from the list to preview.
				</p>
			</div>
		</div>
	);
}

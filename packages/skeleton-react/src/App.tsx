import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.js";

function App() {
	return (
		<div
			className="h-screen grid grid-cols-[320px_minmax(0,_1fr)]"
			data-testid="app"
		>
			{/* Nav */}
			<div className="bg-surface-100-900 p-8 overflow-y-auto space-y-8">
				<a
					className="bg-blue-500 text-white p-2 type-scale-3 font-bold font-mono"
					href="/"
				>
					skeleton-react
				</a>
				<hr className="hr" />
				{/* Components */}
				<div className="space-y-8">
					<span className="font-bold">Components</span>
					<nav className="flex flex-col gap-2 type-scale-2">
						{/* <a className="anchor" href="/components/test">
              Test
            </a> */}
						<a className="anchor" href="/components/accordions">
							Accordions
						</a>
						<a className="anchor" href="/components/avatars">
							Avatars
						</a>
						<a className="anchor" href="/components/app-bars">
							App Bars
						</a>
						<a className="anchor" href="/components/progress">
							Progress
						</a>
						<a className="anchor" href="/components/tabs">
							Tabs
						</a>
					</nav>
				</div>
			</div>
			{/* Page */}
			<main className="p-8 overflow-y-auto">
				{/* --- Route Slot --- */}
				<Suspense fallback={<div>Loading...</div>}>
					<RouterProvider router={router} />
				</Suspense>
				{/* --- / --- */}
			</main>
		</div>
	);
}

export default App;

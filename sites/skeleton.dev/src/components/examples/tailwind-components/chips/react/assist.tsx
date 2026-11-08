import { SunIcon, AlarmClockIcon, AppWindowIcon } from "lucide-react";

export default function Assist() {
	return (
		<div className="card preset-filled-surface-100-900 w-full max-w-md space-y-4 overflow-hidden p-4">
			<header>
				<h2 className="h6">Home Automation</h2>
			</header>
			<article className="space-y-4">
				<p className="opacity-60">
					Control your smart home with a single tap. Choose one of the quick actions below
					to get started.
				</p>
			</article>
			<hr className="hr" />
			<footer className="flex [scrollbar-width:none] items-center justify-start gap-2 overflow-x-auto">
				<button type="button" className="chip preset-outlined-surface-400-600">
					<SunIcon size={14} />
					<span>Turn on lights</span>
				</button>
				<button type="button" className="chip preset-outlined-surface-400-600">
					<AlarmClockIcon size={14} />
					<span>Set alarm</span>
				</button>
				<button type="button" className="chip preset-outlined-surface-400-600">
					<AppWindowIcon size={14} />
					<span>Close blinds</span>
				</button>
			</footer>
		</div>
	);
}

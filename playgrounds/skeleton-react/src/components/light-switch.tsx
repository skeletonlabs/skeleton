"use client";

import { Switch } from "@skeletonlabs/skeleton-react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
	window.addEventListener("storage", callback);
	return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): "dark" | "light" {
	return localStorage.getItem("mode") === "dark" ? "dark" : "light";
}

function getServerSnapshot(): "dark" | "light" {
	return "light";
}

export default function LightSwitch() {
	const mode = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

	const onCheckedChange = (event: { checked: boolean }) => {
		const mode = event.checked ? "dark" : "light";
		document.documentElement.setAttribute("data-mode", mode);
		localStorage.setItem("mode", mode);
		window.dispatchEvent(new StorageEvent("storage"));
	};

	return (
		<>
			<script
				dangerouslySetInnerHTML={{
					__html: `
						const mode = localStorage.getItem('mode') || 'light';
						document.documentElement.setAttribute('data-mode', mode);
          			`,
				}}
			/>
			<Switch checked={mode === "dark"} onCheckedChange={onCheckedChange}>
				<Switch.Control>
					<Switch.Thumb>
						<Switch.Context>
							{(switch_) =>
								switch_.checked ? (
									<SunIcon className="stroke-surface-50-950 size-4" />
								) : (
									<MoonIcon className="stroke-surface-950-50 size-4" />
								)
							}
						</Switch.Context>
					</Switch.Thumb>
				</Switch.Control>
				<Switch.HiddenInput />
			</Switch>
		</>
	);
}

import { Navigation } from "@skeletonlabs/skeleton-react";
import { BookIcon } from "lucide-react";
import { HouseIcon } from "lucide-react";
import { PopcornIcon } from "lucide-react";
import { TvIcon } from "lucide-react";

export default function Default() {
	const links = [
		{ label: "Home", href: "/#", icon: HouseIcon },
		{ label: "Books", href: "/#", icon: BookIcon },
		{ label: "Movies", href: "/#", icon: PopcornIcon },
		{ label: "Television", href: "/#", icon: TvIcon },
	];

	return (
		<div className="border-surface-200-800 grid h-[200px] w-[375px] grid-rows-[1fr_auto] border">
			<div className="flex items-center justify-center">
				<p className="opacity-60">...</p>
			</div>
			<Navigation layout="bar">
				<Navigation.Menu className="grid grid-cols-4 gap-2">
					{links.map((link) => {
						const Icon = link.icon;
						return (
							<Navigation.TriggerAnchor key={link.label} href={link.href}>
								<Icon className="size-5" />
								<Navigation.TriggerText>{link.label}</Navigation.TriggerText>
							</Navigation.TriggerAnchor>
						);
					})}
				</Navigation.Menu>
			</Navigation>
		</div>
	);
}

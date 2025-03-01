import { Navigation } from "@skeletonlabs/skeleton-react";
import {
	Folder as IconFolder,
	Image as IconImage,
	Music as IconMusic,
	Video as IconVideo,
} from "lucide-react";
import React from "react";

export const Page: React.FC = () => {
	// You may optionally bind a selected state value
	// Pass the ID item you wish to be selected by default.
	const [value, setValue] = React.useState("0");

	return (
		<div className="card border-surface-100-900 grid h-[512px] w-[320px] grid-rows-[1fr_auto] border-[1px]">
			{/* Content */}
			<div className="flex items-center justify-center">
				<p className="opacity-20">(Content)</p>
			</div>
			{/* Component */}
			<Navigation.Bar value={value} onValueChange={setValue}>
				<Navigation.Tile id="0" label="Files">
					<IconFolder />
				</Navigation.Tile>
				<Navigation.Tile id="1" label="Images">
					<IconImage />
				</Navigation.Tile>
				<Navigation.Tile id="2" label="Music">
					<IconMusic />
				</Navigation.Tile>
				<Navigation.Tile id="3" label="Videos">
					<IconVideo />
				</Navigation.Tile>
			</Navigation.Bar>
		</div>
	);
};

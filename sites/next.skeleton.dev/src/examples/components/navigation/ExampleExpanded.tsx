import { Navigation } from "@skeletonlabs/skeleton-react";
import {
	Folder as IconFolder,
	Gamepad as IconGames,
	Image as IconImage,
	Menu as IconMenu,
	Music as IconMusic,
	Settings as IconSettings,
	Video as IconVideo,
} from "lucide-react";

export const Page: React.FC = () => {
	return (
		<div className="card border-surface-100-900 grid h-[640px] w-full grid-cols-[auto_1fr] border-[1px]">
			{/* Component */}
			<Navigation.Rail
				expanded
				header={
					<Navigation.Tile href="/" labelExpanded="Menu">
						<IconMenu />
					</Navigation.Tile>
				}
				footer={
					<Navigation.Tile href="/settings" labelExpanded="Settings">
						<IconSettings />
					</Navigation.Tile>
				}
			>
				<Navigation.Tile id="0" labelExpanded="Browse Files" href="#">
					<IconFolder />
				</Navigation.Tile>
				<Navigation.Tile id="1" labelExpanded="Browse Images" href="#">
					<IconImage />
				</Navigation.Tile>
				<Navigation.Tile id="2" labelExpanded="Browse Music" href="#">
					<IconMusic />
				</Navigation.Tile>
				<Navigation.Tile id="3" labelExpanded="Browse Videos" href="#">
					<IconVideo />
				</Navigation.Tile>
				<Navigation.Tile id="4" labelExpanded="Browse Games" href="#">
					<IconGames />
				</Navigation.Tile>
			</Navigation.Rail>
			{/* Content */}
			<div className="flex items-center justify-center">
				<p className="opacity-20">(Content)</p>
			</div>
		</div>
	);
};

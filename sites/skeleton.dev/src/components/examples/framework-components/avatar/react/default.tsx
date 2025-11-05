import { Avatar } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<div className="flex items-center gap-8">
			{/* Small */}
			<Avatar className="size-10">
				<Avatar.Image src="https://i.pravatar.cc/40?img=48" />
				<Avatar.Fallback>SK</Avatar.Fallback>
			</Avatar>
			{/* Base */}
			<Avatar>
				<Avatar.Image src="https://i.pravatar.cc/60?img=48" />
				<Avatar.Fallback>SK</Avatar.Fallback>
			</Avatar>
			{/* Large */}
			<Avatar className="size-20">
				<Avatar.Image src="https://i.pravatar.cc/80?img=48" />
				<Avatar.Fallback>SK</Avatar.Fallback>
			</Avatar>
		</div>
	);
}

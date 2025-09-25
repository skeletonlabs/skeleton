import { Avatar } from '@skeletonlabs/skeleton-react';

export default function Default() {
	return (
		<Avatar>
			<Avatar.Image src="https://i.pravatar.cc/150?img=48" />
			<Avatar.Fallback>SK</Avatar.Fallback>
		</Avatar>
	);
}

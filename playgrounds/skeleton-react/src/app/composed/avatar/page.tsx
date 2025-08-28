import { Avatar } from '@skeletonlabs/skeleton-react/composed';

export default function Page() {
	return (
		<Avatar>
			<Avatar.Image src="https://picsum.photos/100/100" />
			<Avatar.Fallback>SK</Avatar.Fallback>
		</Avatar>
	);
}

import { Avatar } from '@/index';

export default function AvatarTest() {
	return (
		<Avatar data-testid="root">
			<Avatar.Image data-testid="image" src="https://picsum.photos/100/100" />
			<Avatar.Fallback data-testid="fallback">SK</Avatar.Fallback>
		</Avatar>
	);
}

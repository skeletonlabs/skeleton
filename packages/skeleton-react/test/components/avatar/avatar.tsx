import { Avatar } from '../../../src/composed/index.js';

export default function () {
	return (
		<Avatar data-testid="root">
			<Avatar.Image data-testid="image" src="https://picsum.photos/100/100" />
			<Avatar.Fallback data-testid="fallback">SK</Avatar.Fallback>
		</Avatar>
	);
}

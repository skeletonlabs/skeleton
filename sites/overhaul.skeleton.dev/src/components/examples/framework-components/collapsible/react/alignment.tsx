import { Collapsible } from '@skeletonlabs/skeleton-react';

export default function Alignment() {
	return (
		<Collapsible className="flex flex-col items-center">
			<Collapsible.Trigger className="btn preset-filled">Toggle</Collapsible.Trigger>
			<Collapsible.Content>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit pariatur error soluta voluptate, accusantium modi repudiandae omnis
				eligendi, suscipit repellat impedit architecto neque sequi mollitia autem dicta quae ipsum et?
			</Collapsible.Content>
		</Collapsible>
	);
}

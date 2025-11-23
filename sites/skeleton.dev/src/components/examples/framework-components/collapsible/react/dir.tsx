import { Collapsible } from '@skeletonlabs/skeleton-react';

export default function Dir() {
	return (
		<Collapsible dir="rtl">
			<Collapsible.Content>
				The world dies over and over again, but the skeleton always gets up and walks. Every heart has its own skeletons. The bones of the
				skeleton which support the body can become the bars of the cage which imprison the spirit.
			</Collapsible.Content>
			<Collapsible.Trigger className="btn preset-filled">Toggle</Collapsible.Trigger>
		</Collapsible>
	);
}

import { Collapsible } from '@skeletonlabs/skeleton-react';
import { MinusIcon, PlusIcon } from 'lucide-react';

export default function Default() {
	return (
		<Collapsible>
			<Collapsible.Trigger className="btn preset-filled">
				<span>Toggle</span>
				<Collapsible.Indicator className="group">
					<MinusIcon className="size-4 group-data-[state=open]:block hidden" />
					<PlusIcon className="size-4 group-data-[state=open]:hidden block" />
				</Collapsible.Indicator>
			</Collapsible.Trigger>
			<Collapsible.Content>
				The world dies over and over again, but the skeleton always gets up and walks. Every heart has its own skeletons. The bones of the
				skeleton which support the body can become the bars of the cage which imprison the spirit.
			</Collapsible.Content>
		</Collapsible>
	);
}

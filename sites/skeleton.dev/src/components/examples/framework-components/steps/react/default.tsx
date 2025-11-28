import { Steps } from '@skeletonlabs/skeleton-react';

const steps = [
	{ title: 'First', content: 'First do this.' },
	{ title: 'Then', content: 'Then do that.' },
	{ title: 'Finally', content: 'Almost done...' },
];

export default function Default() {
	return (
		<Steps count={steps.length} className="w-full">
			<Steps.List>
				{steps.map((item, index) => (
					<Steps.Item key={index} index={index}>
						<Steps.Trigger>
							<Steps.Indicator>{index + 1}</Steps.Indicator> {item.title}
						</Steps.Trigger>
						{index < steps.length - 1 && <Steps.Separator />}
					</Steps.Item>
				))}
			</Steps.List>
			{steps.map((item, index) => (
				<Steps.Content key={index} index={index}>
					{item.content}
				</Steps.Content>
			))}
			<Steps.Content index={steps.length}>All done!</Steps.Content>
			<div className="flex justify-between items-center gap-2">
				<Steps.PrevTrigger className="btn preset-filled">Back</Steps.PrevTrigger>
				<Steps.NextTrigger className="btn preset-filled">Next</Steps.NextTrigger>
			</div>
		</Steps>
	);
}

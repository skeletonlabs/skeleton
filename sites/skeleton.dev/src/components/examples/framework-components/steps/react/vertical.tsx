import { Steps } from '@skeletonlabs/skeleton-react';

const steps = [
	{ title: 'First', content: 'First do this.' },
	{ title: 'Then', content: 'Then do that.' },
	{ title: 'Finally', content: 'Almost done...' },
];

export default function Default() {
	return (
		<Steps orientation="vertical" count={steps.length} className="w-full h-48">
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
			<div className="flex flex-col grow gap-4">
				{steps.map((item, index) => (
					<Steps.Content key={index} index={index} className="card preset-filled-surface-100-900 p-4 flex justify-center items-center grow">
						{item.content}
					</Steps.Content>
				))}
				<Steps.Content index={steps.length} className="card preset-filled-surface-100-900 p-4 flex justify-center items-center grow">
					All done!
				</Steps.Content>
				<div className="flex justify-between items-center gap-2">
					<Steps.PrevTrigger className="btn preset-filled">Back</Steps.PrevTrigger>
					<Steps.NextTrigger className="btn preset-filled">Next</Steps.NextTrigger>
				</div>
			</div>
		</Steps>
	);
}

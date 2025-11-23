import { Steps } from '@skeletonlabs/skeleton-react';

const data = [
	{ title: 'First', content: 'First do this.' },
	{ title: 'Then', content: 'Then do that.' },
	{ title: 'Finally', content: 'Almost done...' },
];

export default function Default() {
	return (
		<Steps orientation="vertical" count={data.length} className="w-full h-48">
			<Steps.List>
				{data.map((item, index) => (
					<Steps.Item key={index} index={index}>
						<Steps.Trigger>
							<Steps.Indicator>{index + 1}</Steps.Indicator> {item.title}
						</Steps.Trigger>
						{index < data.length - 1 && <Steps.Separator />}
					</Steps.Item>
				))}
			</Steps.List>
			<div className="flex flex-col grow">
				{data.map((item, index) => (
					<Steps.Content key={index} index={index} className="grow">
						{item.content}
					</Steps.Content>
				))}
				<Steps.Content index={data.length} className="grow">
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

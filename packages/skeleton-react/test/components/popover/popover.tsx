import { Popover } from '@/index';

export default function PopoverTest() {
	return (
		<Popover>
			<Popover.Trigger data-testid="trigger" />
			<Popover.Positioner data-testid="positioner">
				<Popover.Content data-testid="content">
					<Popover.Arrow data-testid="arrow">
						<Popover.ArrowTip data-testid="arrow-tip" />
					</Popover.Arrow>
					<Popover.Title data-testid="title" />
					<Popover.Description data-testid="description" />
					<Popover.CloseTrigger data-testid="close-trigger" />
				</Popover.Content>
			</Popover.Positioner>
		</Popover>
	);
}

import { FloatingPanel } from '../../src/index.js';

export default function Test() {
	return (
		<FloatingPanel>
			<FloatingPanel.Trigger data-testid="trigger" />
			<FloatingPanel.Positioner data-testid="positioner">
				<FloatingPanel.Content data-testid="content">
					<FloatingPanel.Header data-testid="header">
						<FloatingPanel.DragTrigger data-testid="drag-trigger" />
						<FloatingPanel.Title data-testid="title" />
						<FloatingPanel.Control data-testid="control">
							<FloatingPanel.StageTrigger data-testid="stage-trigger-minimized" stage="minimized" />
							<FloatingPanel.StageTrigger data-testid="stage-trigger-maximized" stage="maximized" />
							<FloatingPanel.CloseTrigger data-testid="close-trigger" />
						</FloatingPanel.Control>
					</FloatingPanel.Header>
					<FloatingPanel.Body data-testid="body" />
					<FloatingPanel.ResizeTrigger data-testid="resize-trigger" axis="se" />
				</FloatingPanel.Content>
			</FloatingPanel.Positioner>
		</FloatingPanel>
	);
}

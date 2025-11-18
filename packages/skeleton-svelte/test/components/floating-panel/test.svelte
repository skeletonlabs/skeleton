<script lang="ts">
	import { FloatingPanel } from '@/index.js';
</script>

<FloatingPanel defaultOpen>
	<FloatingPanel.Trigger data-testid="trigger">Open Panel</FloatingPanel.Trigger>
	<FloatingPanel.Positioner data-testid="positioner">
		<FloatingPanel.Content data-testid="content">
			<FloatingPanel.Header data-testid="header">
				<FloatingPanel.DragTrigger data-testid="drag-trigger" />
				<FloatingPanel.Title data-testid="title">Panel Title</FloatingPanel.Title>
				<FloatingPanel.Control data-testid="control">
					<FloatingPanel.StageTrigger data-testid="stage-trigger-minimized" stage="minimized">-</FloatingPanel.StageTrigger>
					<FloatingPanel.StageTrigger data-testid="stage-trigger-maximized" stage="maximized">+</FloatingPanel.StageTrigger>
					<FloatingPanel.CloseTrigger data-testid="close-trigger">X</FloatingPanel.CloseTrigger>
				</FloatingPanel.Control>
			</FloatingPanel.Header>
			<FloatingPanel.Body data-testid="body">
				Panel body content
			</FloatingPanel.Body>
			<FloatingPanel.ResizeTrigger data-testid="resize-trigger" axis="se" />
		</FloatingPanel.Content>
	</FloatingPanel.Positioner>
</FloatingPanel>

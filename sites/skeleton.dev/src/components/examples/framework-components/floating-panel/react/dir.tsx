import { FloatingPanel, Portal } from '@skeletonlabs/skeleton-react';
import { GripVerticalIcon, XIcon, MinusIcon, MaximizeIcon, MinimizeIcon } from 'lucide-react';

export default function Dir() {
	return (
		<FloatingPanel dir="rtl">
			<FloatingPanel.Trigger className="btn preset-filled">فتح اللوحة</FloatingPanel.Trigger>
			<Portal>
				<FloatingPanel.Positioner className="z-50">
					<FloatingPanel.Content>
						<FloatingPanel.DragTrigger>
							<FloatingPanel.Header>
								<FloatingPanel.Title>
									<GripVerticalIcon className="size-4" />
									لوحة عائمة
								</FloatingPanel.Title>
								<FloatingPanel.Control>
									<FloatingPanel.StageTrigger stage="minimized">
										<MinusIcon className="size-4" />
									</FloatingPanel.StageTrigger>
									<FloatingPanel.StageTrigger stage="maximized">
										<MaximizeIcon className="size-4" />
									</FloatingPanel.StageTrigger>
									<FloatingPanel.StageTrigger stage="default">
										<MinimizeIcon className="size-4" />
									</FloatingPanel.StageTrigger>
									<FloatingPanel.CloseTrigger>
										<XIcon className="size-4" />
									</FloatingPanel.CloseTrigger>
								</FloatingPanel.Control>
							</FloatingPanel.Header>
						</FloatingPanel.DragTrigger>
						<FloatingPanel.Body>
							<p>هذه لوحة عائمة بدعم النص من اليمين إلى اليسار (RTL).</p>
							<p>يمكنك سحبها من العنوان أو تغيير حجمها من الزاوية السفلية اليمنى.</p>
							<FloatingPanel.ResizeTrigger axis="se" />
						</FloatingPanel.Body>
					</FloatingPanel.Content>
				</FloatingPanel.Positioner>
			</Portal>
		</FloatingPanel>
	);
}

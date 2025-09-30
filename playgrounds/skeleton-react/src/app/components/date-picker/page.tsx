'use client';

import { DatePicker } from '@skeletonlabs/skeleton-react';

export default function Page() {
	return (
		<DatePicker>
			<DatePicker.Label>Label</DatePicker.Label>
			<DatePicker.Control>
				<DatePicker.Input placeholder="Select date..." />
				<DatePicker.Trigger />
			</DatePicker.Control>
			<DatePicker.Positioner>
				<DatePicker.Content>Pick a date here</DatePicker.Content>
			</DatePicker.Positioner>
		</DatePicker>
	);
}

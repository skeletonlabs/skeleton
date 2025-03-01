import { Segment } from "@skeletonlabs/skeleton-react";
import type React from "react";
import { useState } from "react";

export const Page: React.FC = () => {
	const [size, setSize] = useState("sm");

	return (
		<Segment name="size" value={size} onValueChange={(e) => setSize(e.value!)}>
			<Segment.Item value="sm">sm</Segment.Item>
			<Segment.Item value="md" disabled>
				md
			</Segment.Item>
			<Segment.Item value="lg">lg</Segment.Item>
		</Segment>
	);
};

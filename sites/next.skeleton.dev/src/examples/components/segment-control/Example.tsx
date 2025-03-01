import { Segment } from "@skeletonlabs/skeleton-react";
import {
	AlignCenter as IconCenter,
	AlignJustify as IconJustify,
	AlignLeft as IconLeft,
	AlignRight as IconRight,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

export const Page: React.FC = () => {
	const [align, setAlign] = useState("left");

	return (
		<Segment
			value={align}
			name="align"
			onValueChange={(e) => setAlign(e.value!)}
		>
			<Segment.Item value="left">
				<IconLeft />
			</Segment.Item>
			<Segment.Item value="center">
				<IconCenter />
			</Segment.Item>
			<Segment.Item value="right">
				<IconRight />
			</Segment.Item>
			<Segment.Item value="justify">
				<IconJustify />
			</Segment.Item>
		</Segment>
	);
};

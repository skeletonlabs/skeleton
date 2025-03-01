import { Switch } from "@skeletonlabs/skeleton-react";
import React from "react";

export const Page: React.FC = () => {
	const [example, setExample] = React.useState(false);

	return (
		<Switch
			name="example"
			checked={example}
			onCheckedChange={(e) => setExample(e.checked)}
		/>
	);
};

import { Slider } from "@skeletonlabs/skeleton-react";
import { useState } from "react";

export const Page: React.FC = () => {
	const [value, setValue] = useState([40]);
	const [valueMulti, setValueMulti] = useState([40, 60]);

	return (
		<div className="w-full space-y-8">
			<Slider
				value={value}
				onValueChange={(e) => setValue(e.value)}
				dir="rtl"
			/>
			<Slider
				value={valueMulti}
				onValueChange={(e) => setValueMulti(e.value)}
				dir="rtl"
			/>
		</div>
	);
};

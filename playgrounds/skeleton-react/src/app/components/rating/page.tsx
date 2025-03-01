"use client";

import { Rating } from "@skeletonlabs/skeleton-react";
import { Bone, Skull } from "lucide-react";
import { useState } from "react";

export default function Page() {
	const [value, setValue] = useState(3);

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Rating</h1>
			</header>
			<pre className="pre">value: {value}</pre>
			<section className="space-y-4">
				<Rating
					value={value}
					onValueChange={(e) => setValue(e.value)}
					ids={{ root: "root" }}
				/>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Icons</h2>
				<Rating
					value={value}
					onValueChange={(e) => setValue(e.value)}
					iconEmpty={<Bone size={24} />}
					iconFull={<Skull size={24} />}
				/>
			</section>
			<section className="space-y-4">
				<h2 className="h2">With Halves</h2>
				<Rating
					value={value}
					onValueChange={(e) => setValue(e.value)}
					allowHalf
				/>
			</section>
			<section className="space-y-4">
				<h2 className="h2">10 stars</h2>
				<Rating
					value={value}
					onValueChange={(e) => setValue(e.value)}
					count={10}
				/>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Read-Only</h2>
				<Rating
					value={value}
					onValueChange={(e) => setValue(e.value)}
					readOnly
				/>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Disabled</h2>
				<Rating
					value={value}
					onValueChange={(e) => setValue(e.value)}
					disabled
				/>
			</section>
			<section className="space-y-4">
				<h2 className="h2">RTL</h2>
				<Rating
					value={value}
					onValueChange={(e) => setValue(e.value)}
					dir="rtl"
				/>
			</section>
		</div>
	);
}

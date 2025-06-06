'use client';

import { Bone, Skull } from 'lucide-react';
import { useState } from 'react';
import { Rating } from '@skeletonlabs/skeleton-react';

export default function Page() {
	const [value, setValue] = useState(3);

	return (
		<div className="space-y-10">
			<header>
				<h1 className="h1">Rating</h1>
			</header>
			<pre className="pre">value: {value}</pre>
			<section className="space-y-4">
				<Rating value={value} onValueChange={(e) => setValue(e.value)} ids={{ root: 'root' }}></Rating>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Icons</h2>
				<Rating
					value={value}
					onValueChange={(e) => setValue(e.value)}
					iconEmpty={<Bone size={24} />}
					iconFull={<Skull size={24} />}
				></Rating>
			</section>
			<section className="space-y-4">
				<h2 className="h2">With Halves</h2>
				<Rating value={value} onValueChange={(e) => setValue(e.value)} allowHalf></Rating>
			</section>
			<section className="space-y-4">
				<h2 className="h2">10 stars</h2>
				<Rating value={value} onValueChange={(e) => setValue(e.value)} count={10}></Rating>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Read-Only</h2>
				<Rating value={value} onValueChange={(e) => setValue(e.value)} readOnly></Rating>
			</section>
			<section className="space-y-4">
				<h2 className="h2">Disabled</h2>
				<Rating value={value} onValueChange={(e) => setValue(e.value)} disabled></Rating>
			</section>
			<section className="space-y-4">
				<h2 className="h2">RTL</h2>
				<Rating value={value} onValueChange={(e) => setValue(e.value)} dir="rtl"></Rating>
			</section>
		</div>
	);
}

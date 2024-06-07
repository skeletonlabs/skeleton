import { useState } from "react";
import { Tabs } from "../../lib/components/Tabs/Tabs.js";
import { Plane, Hotel, Box } from 'lucide-react';

function Preview(
	group: string,
	setGroup: React.Dispatch<React.SetStateAction<string>>
) {
	return (
		<>
			<section className="space-y-4">
				<h2 className="h2">Preview</h2>
				<Tabs>
					<Tabs.List>
						<Tabs.Control
							name="flight"
							group={group}
							onChange={setGroup}
							onClick={() => console.log("onClick")}
							onKeydown={() => console.log("onKeyDown")}
						>
							<Tabs.Item>Flight</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control name="hotel" group={group} onChange={setGroup}>
							<Tabs.Item>Hotel</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control name="explore" group={group} onChange={setGroup}>
							<Tabs.Item>Explore</Tabs.Item>
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panel group={group} value="flight">
						Flight Panel
					</Tabs.Panel>
					<Tabs.Panel group={group} value="hotel">
						Hotel Panel
					</Tabs.Panel>
					<Tabs.Panel group={group} value="explore">
						Explore Panel
					</Tabs.Panel>
				</Tabs>
			</section>
		</>
	);
}

function WithIcon(
	group: string,
	setGroup: React.Dispatch<React.SetStateAction<string>>
) {
	return (
		<>
			<section className="space-y-4">
				<h2 className="h2">With Icon</h2>
				<Tabs>
					<Tabs.List>
						<Tabs.Control
							name="flight"
							group={group}
							title="flight"
							onChange={setGroup}
						>
							<Tabs.Item>
								<Plane size={20}/>
								<span>Flight</span>
							</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control
							name="hotel"
							title="hotel"
							group={group}
							onChange={setGroup}
						>
							<Tabs.Item>
								<Hotel size={20}/>
								<span>Hotel</span>
							</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control
							name="explore"
							title="explore"
							group={group}
							onChange={setGroup}
						>
							<Tabs.Item>
								<Box size={20}/>
								<span>Explore</span>
							</Tabs.Item>
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panel group={group} value="flight">
						Flight Panel
					</Tabs.Panel>
					<Tabs.Panel group={group} value="hotel">
						Hotel Panel
					</Tabs.Panel>
					<Tabs.Panel group={group} value="explore">
						Explore Panel
					</Tabs.Panel>
				</Tabs>
			</section>
		</>
	);
}

function IconOnly(
	group: string,
	setGroup: React.Dispatch<React.SetStateAction<string>>
) {
	return (
		<>
			<section className="space-y-4">
				<h2 className="h2">Icon Only</h2>
				<Tabs>
					<Tabs.List>
						<Tabs.Control
							name="flight"
							group={group}
							title="flight"
							onChange={setGroup}
						>
							<Tabs.Item>
								<Plane size={20}/>
							</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control
							name="hotel"
							title="hotel"
							group={group}
							onChange={setGroup}
						>
							<Tabs.Item>
								<Hotel size={20}/>
							</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control
							name="explore"
							title="explore"
							group={group}
							onChange={setGroup}
						>
							<Tabs.Item>
								<Box size={20}/>
							</Tabs.Item>
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panel group={group} value="flight">
						Flight Panel
					</Tabs.Panel>
					<Tabs.Panel group={group} value="hotel">
						Hotel Panel
					</Tabs.Panel>
					<Tabs.Panel group={group} value="explore">
						Explore Panel
					</Tabs.Panel>
				</Tabs>
			</section>
		</>
	);
}

function Stretched(
	group: string,
	setGroup: React.Dispatch<React.SetStateAction<string>>
) {
	return (
		<>
			<section className="space-y-4">
				<h2 className="h2">Stretched</h2>
				<Tabs>
					<Tabs.List>
						<Tabs.Control
							name="flight"
							group={group}
							onChange={setGroup}
							width="w-full"
						>
							<Tabs.Item>Flight</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control
							name="hotel"
							group={group}
							onChange={setGroup}
							width="w-full"
						>
							<Tabs.Item>Hotel</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control
							name="explore"
							group={group}
							onChange={setGroup}
							width="w-full"
						>
							<Tabs.Item>Explore</Tabs.Item>
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panel group={group} value="flight">
						Flight Panel
					</Tabs.Panel>
					<Tabs.Panel group={group} value="hotel">
						Hotel Panel
					</Tabs.Panel>
					<Tabs.Panel group={group} value="explore">
						Explore Panel
					</Tabs.Panel>
				</Tabs>
			</section>
		</>
	);
}

function JustifyCenter(
	group: string,
	setGroup: React.Dispatch<React.SetStateAction<string>>
) {
	return (
		<>
			<section className="space-y-4">
				<h2 className="h2">Justify Center</h2>
				<Tabs>
					<Tabs.List justify="justify-center">
						<Tabs.Control name="flight" group={group} onChange={setGroup}>
							<Tabs.Item>Flight</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control name="hotel" group={group} onChange={setGroup}>
							<Tabs.Item>Hotel</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control name="explore" group={group} onChange={setGroup}>
							<Tabs.Item>Explore</Tabs.Item>
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panel group={group} value="flight">
						Flight Panel
					</Tabs.Panel>
					<Tabs.Panel group={group} value="hotel">
						Hotel Panel
					</Tabs.Panel>
					<Tabs.Panel group={group} value="explore">
						Explore Panel
					</Tabs.Panel>
				</Tabs>
			</section>
		</>
	);
}

function JustifyEnd(
	group: string,
	setGroup: React.Dispatch<React.SetStateAction<string>>
) {
	return (
		<>
			<section className="space-y-4">
				<h2 className="h2">Justify End</h2>
				<Tabs>
					<Tabs.List justify="justify-end">
						<Tabs.Control name="flight" group={group} onChange={setGroup}>
							<Tabs.Item>Flight</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control name="hotel" group={group} onChange={setGroup}>
							<Tabs.Item>Hotel</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control name="explore" group={group} onChange={setGroup}>
							<Tabs.Item>Explore</Tabs.Item>
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panel group={group} value="flight">
						Flight Panel
					</Tabs.Panel>
					<Tabs.Panel group={group} value="hotel">
						Hotel Panel
					</Tabs.Panel>
					<Tabs.Panel group={group} value="explore">
						Explore Panel
					</Tabs.Panel>
				</Tabs>
			</section>
		</>
	);
}

function FocusableContent(
	group: string,
	setGroup: React.Dispatch<React.SetStateAction<string>>
) {
	return (
		<>
			<section className="space-y-4">
				<h2 className="h2">Focusable Content</h2>
				<Tabs>
					<Tabs.List>
						<Tabs.Control name="flight" group={group} onChange={setGroup}>
							<Tabs.Item>Flight</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control name="hotel" group={group} onChange={setGroup}>
							<Tabs.Item>Hotel</Tabs.Item>
						</Tabs.Control>
						<Tabs.Control name="explore" group={group} onChange={setGroup}>
							<Tabs.Item>Explore</Tabs.Item>
						</Tabs.Control>
					</Tabs.List>
					<Tabs.Panel group={group} value="flight">
						<button type="button" className="btn preset-filled">
							Book a Flight
						</button>
					</Tabs.Panel>
					<Tabs.Panel group={group} value="hotel">
						<button type="button" className="btn preset-filled">
							See Hotels near you
						</button>
					</Tabs.Panel>
					<Tabs.Panel group={group} value="explore">
						<button type="button" className="btn preset-filled">
							Explore
						</button>
					</Tabs.Panel>
				</Tabs>
			</section>
		</>
	);
}

function RTL(
	group: string,
	setGroup: React.Dispatch<React.SetStateAction<string>>
) {
	return (
		<>
			<section className="space-y-4">
				<h2 className="h2">RTL</h2>
				<div dir="rtl">
					<Tabs>
						<Tabs.List>
							<Tabs.Control name="flight" group={group} onChange={setGroup}>
								<Tabs.Item>Flight</Tabs.Item>
							</Tabs.Control>
							<Tabs.Control name="hotel" group={group} onChange={setGroup}>
								<Tabs.Item>Hotel</Tabs.Item>
							</Tabs.Control>
							<Tabs.Control name="explore" group={group} onChange={setGroup}>
								<Tabs.Item>Explore</Tabs.Item>
							</Tabs.Control>
						</Tabs.List>
						<Tabs.Panel group={group} value="flight">
							Flight Panel{" "}
						</Tabs.Panel>
						<Tabs.Panel group={group} value="hotel">
							Hotel Panel{" "}
						</Tabs.Panel>
						<Tabs.Panel group={group} value="explore">
							Explore Panel
						</Tabs.Panel>
					</Tabs>
				</div>
			</section>
		</>
	);
}

export function Component() {
	const [group, setGroup] = useState("flight");
	return (
		<>
			<div className="space-y-10">
				<header>
					<h1 className="h1">Tabs</h1>
				</header>
				{Preview(group, setGroup)}
				{WithIcon(group, setGroup)}
				{IconOnly(group, setGroup)}
				{Stretched(group, setGroup)}
				{JustifyCenter(group, setGroup)}
				{JustifyEnd(group, setGroup)}
				{FocusableContent(group, setGroup)}
				{RTL(group, setGroup)}
			</div>
		</>
	);
}

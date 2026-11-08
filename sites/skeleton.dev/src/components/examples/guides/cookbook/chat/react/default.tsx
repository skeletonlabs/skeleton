import { SendIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Types
interface Person {
	id: number;
	avatar: number;
	name: string;
}
interface MessageFeed {
	id: number;
	host: boolean;
	avatar: number;
	name: string;
	timestamp: string;
	message: string;
	color: string;
}

export default function Default() {
	const elemChatRef = useRef<HTMLElement>(null);
	const lorem =
		"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident blanditiis quidem dolorum ab similique. Voluptatibus quibusdam unde mollitia corrupti assumenda libero. Quibusdam culpa illum unde asperiores accusantium! Unde, cupiditate tenetur.";

	// Navigation List
	const people: Person[] = [
		{ id: 0, avatar: 14, name: "Michael" },
		{ id: 1, avatar: 40, name: "Janet" },
		{ id: 2, avatar: 31, name: "Susan" },
		{ id: 3, avatar: 56, name: "Joey" },
		{ id: 4, avatar: 24, name: "Lara" },
		{ id: 5, avatar: 9, name: "Melissa" },
	];
	const [currentPersonId, setCurrentPersonId] = useState<number>(people[0].id);

	// Messages
	const [messageFeed, setMessageFeed] = useState<MessageFeed[]>([
		{
			id: 0,
			host: true,
			avatar: 48,
			name: "Jane",
			timestamp: "Yesterday @ 2:30pm",
			message: lorem,
			color: "preset-tonal-primary",
		},
		{
			id: 1,
			host: false,
			avatar: 14,
			name: "Michael",
			timestamp: "Yesterday @ 2:45pm",
			message: lorem,
			color: "preset-tonal-primary",
		},
		{
			id: 2,
			host: true,
			avatar: 48,
			name: "Jane",
			timestamp: "Yesterday @ 2:50pm",
			message: lorem,
			color: "preset-tonal-primary",
		},
		{
			id: 3,
			host: false,
			avatar: 14,
			name: "Michael",
			timestamp: "Yesterday @ 2:52pm",
			message: lorem,
			color: "preset-tonal-primary",
		},
	]);
	const [currentMessage, setCurrentMessage] = useState("");

	function scrollChatBottom(behavior?: "auto" | "instant" | "smooth") {
		if (elemChatRef.current) {
			elemChatRef.current.scrollTo({ top: elemChatRef.current.scrollHeight, behavior });
		}
	}

	function getCurrentTimestamp(): string {
		return new Date().toLocaleString("en-US", {
			hour: "numeric",
			minute: "numeric",
			hour12: true,
		});
	}

	function addMessage() {
		const newMessage = {
			id: messageFeed.length,
			host: true,
			avatar: 48,
			name: "Jane",
			timestamp: `Today @ ${getCurrentTimestamp()}`,
			message: currentMessage,
			color: "preset-tonal-primary",
		};
		// Update the message feed
		setMessageFeed([...messageFeed, newMessage]);
		// Clear prompt
		setCurrentMessage("");
		// Smooth scroll to bottom
		// Timeout prevents race condition
		setTimeout(() => scrollChatBottom("smooth"), 0);
	}

	function onPromptKeydown(event: React.KeyboardEvent) {
		if (["Enter"].includes(event.code)) {
			event.preventDefault();
			addMessage();
		}
	}

	// When DOM is mounted, scroll to bottom
	useEffect(() => {
		scrollChatBottom();
	}, []);

	return (
		<section className="card bg-surface-100-900 rounded-container overflow-hidden">
			<div className="chat grid h-full w-full grid-cols-1 lg:grid-cols-[30%_1fr]">
				{/* Navigation */}
				<div className="border-surface-200-800 hidden grid-rows-[auto_1fr_auto] border-r-[1px] lg:grid">
					{/* Header */}
					<header className="border-surface-200-800 border-b-[1px] p-4">
						<input className="input" type="search" placeholder="Search..." />
					</header>
					{/* List */}
					<div className="space-y-4 overflow-y-auto p-4">
						<small className="opacity-50">Contacts</small>
						<div className="flex flex-col space-y-1">
							{people.map((person) => (
								<button
									key={person.id}
									type="button"
									className={`card flex w-full items-center space-x-4 p-2 ${person.id === currentPersonId ? "preset-filled-primary-500" : "bg-surface-hover-token"}`}
									onClick={() => setCurrentPersonId(person.id)}
								>
									{/* <Avatar src="https://i.pravatar.cc/?img={person.avatar}" name={person.name} size="size-8" /> */}
									<span className="flex-1 text-start">{person.name}</span>
								</button>
							))}
						</div>
					</div>
					{/* Footer */}
					{/* <footer className="border-t-[1px] border-surface-200-800 p-4">(footer)</footer> */}
				</div>
				{/* Chat */}
				<div className="grid grid-rows-[1fr_auto]">
					{/* Conversation */}
					<section
						ref={elemChatRef}
						className="max-h-[500px] space-y-4 overflow-y-auto p-4"
					>
						{messageFeed.map((bubble) =>
							bubble.host === true ? (
								<div key={bubble.id} className="grid grid-cols-[auto_1fr] gap-2">
									{/* <Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" name={bubble.name} size="size-12" /> */}
									<div className="card preset-tonal space-y-2 rounded-tl-none p-4">
										<header className="flex items-center justify-between">
											<p className="font-bold">{bubble.name}</p>
											<small className="opacity-50">{bubble.timestamp}</small>
										</header>
										<p>{bubble.message}</p>
									</div>
								</div>
							) : (
								<div key={bubble.id} className="grid grid-cols-[1fr_auto] gap-2">
									<div
										className={`card space-y-2 rounded-tr-none p-4 ${bubble.color}`}
									>
										<header className="flex items-center justify-between">
											<p className="font-bold">{bubble.name}</p>
											<small className="opacity-50">{bubble.timestamp}</small>
										</header>
										<p>{bubble.message}</p>
									</div>
									{/* <Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" name={bubble.name} size="size-12" /> */}
								</div>
							),
						)}
					</section>
					{/* Prompt */}
					<section className="border-surface-200-800 border-t-[1px] p-4">
						<div className="input-group divide-surface-200-800 rounded-container-token grid-cols-[auto_1fr_auto] divide-x">
							<button className="input-group-cell preset-tonal">+</button>
							<textarea
								value={currentMessage}
								onInput={(e) => setCurrentMessage(e.currentTarget.value)}
								className="border-0 bg-transparent ring-0"
								name="prompt"
								id="prompt"
								placeholder="Write a message..."
								rows={1}
								onKeyDown={onPromptKeydown}
							></textarea>
							<button
								className={`input-group-cell ${currentMessage ? "preset-filled-primary-500" : "preset-tonal"}`}
								onClick={addMessage}
							>
								<SendIcon />
							</button>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
}

import { SendIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident blanditiis quidem dolorum ab similique. Voluptatibus quibusdam unde mollitia corrupti assumenda libero. Quibusdam culpa illum unde asperiores accusantium! Unde, cupiditate tenetur.';

	// Navigation List
	const people: Person[] = [
		{ id: 0, avatar: 14, name: 'Michael' },
		{ id: 1, avatar: 40, name: 'Janet' },
		{ id: 2, avatar: 31, name: 'Susan' },
		{ id: 3, avatar: 56, name: 'Joey' },
		{ id: 4, avatar: 24, name: 'Lara' },
		{ id: 5, avatar: 9, name: 'Melissa' },
	];
	const [currentPersonId, setCurrentPersonId] = useState<number>(people[0].id);

	// Messages
	const [messageFeed, setMessageFeed] = useState<MessageFeed[]>([
		{
			id: 0,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:30pm',
			message: lorem,
			color: 'preset-tonal-primary',
		},
		{
			id: 1,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:45pm',
			message: lorem,
			color: 'preset-tonal-primary',
		},
		{
			id: 2,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: 'Yesterday @ 2:50pm',
			message: lorem,
			color: 'preset-tonal-primary',
		},
		{
			id: 3,
			host: false,
			avatar: 14,
			name: 'Michael',
			timestamp: 'Yesterday @ 2:52pm',
			message: lorem,
			color: 'preset-tonal-primary',
		},
	]);
	const [currentMessage, setCurrentMessage] = useState('');

	function scrollChatBottom(behavior?: 'auto' | 'instant' | 'smooth') {
		if (elemChatRef.current) {
			elemChatRef.current.scrollTo({ top: elemChatRef.current.scrollHeight, behavior });
		}
	}

	function getCurrentTimestamp(): string {
		return new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
	}

	function addMessage() {
		const newMessage = {
			id: messageFeed.length,
			host: true,
			avatar: 48,
			name: 'Jane',
			timestamp: `Today @ ${getCurrentTimestamp()}`,
			message: currentMessage,
			color: 'preset-tonal-primary',
		};
		// Update the message feed
		setMessageFeed([...messageFeed, newMessage]);
		// Clear prompt
		setCurrentMessage('');
		// Smooth scroll to bottom
		// Timeout prevents race condition
		setTimeout(() => scrollChatBottom('smooth'), 0);
	}

	function onPromptKeydown(event: React.KeyboardEvent) {
		if (['Enter'].includes(event.code)) {
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
			<div className="chat w-full h-full grid grid-cols-1 lg:grid-cols-[30%_1fr]">
				{/* Navigation */}
				<div className="hidden lg:grid grid-rows-[auto_1fr_auto] border-r-[1px] border-surface-200-800">
					{/* Header */}
					<header className="border-b-[1px] border-surface-200-800 p-4">
						<input className="input" type="search" placeholder="Search..." />
					</header>
					{/* List */}
					<div className="p-4 space-y-4 overflow-y-auto">
						<small className="opacity-50">Contacts</small>
						<div className="flex flex-col space-y-1">
							{people.map((person) => (
								<button
									key={person.id}
									type="button"
									className={`card p-2 w-full flex items-center space-x-4 ${person.id === currentPersonId ? 'preset-filled-primary-500' : 'bg-surface-hover-token'}`}
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
					<section ref={elemChatRef} className="max-h-[500px] p-4 overflow-y-auto space-y-4">
						{messageFeed.map((bubble) =>
							bubble.host === true ? (
								<div key={bubble.id} className="grid grid-cols-[auto_1fr] gap-2">
									{/* <Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" name={bubble.name} size="size-12" /> */}
									<div className="card p-4 preset-tonal rounded-tl-none space-y-2">
										<header className="flex justify-between items-center">
											<p className="font-bold">{bubble.name}</p>
											<small className="opacity-50">{bubble.timestamp}</small>
										</header>
										<p>{bubble.message}</p>
									</div>
								</div>
							) : (
								<div key={bubble.id} className="grid grid-cols-[1fr_auto] gap-2">
									<div className={`card p-4 rounded-tr-none space-y-2 ${bubble.color}`}>
										<header className="flex justify-between items-center">
											<p className="font-bold">{bubble.name}</p>
											<small className="opacity-50">{bubble.timestamp}</small>
										</header>
										<p>{bubble.message}</p>
									</div>
									{/* <Avatar src="https://i.pravatar.cc/?img={bubble.avatar}" name={bubble.name} size="size-12" /> */}
								</div>
							)
						)}
					</section>
					{/* Prompt */}
					<section className="border-t-[1px] border-surface-200-800 p-4">
						<div className="input-group grid-cols-[auto_1fr_auto] divide-x divide-surface-200-800 rounded-container-token">
							<button className="input-group-cell preset-tonal">+</button>
							<textarea
								value={currentMessage}
								onInput={(e) => setCurrentMessage(e.currentTarget.value)}
								className="bg-transparent border-0 ring-0"
								name="prompt"
								id="prompt"
								placeholder="Write a message..."
								rows={1}
								onKeyDown={onPromptKeydown}
							></textarea>
							<button className={`input-group-cell ${currentMessage ? 'preset-filled-primary-500' : 'preset-tonal'}`} onClick={addMessage}>
								<SendIcon />
							</button>
						</div>
					</section>
				</div>
			</div>
		</section>
	);
}

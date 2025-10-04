import { blueSkyAgent } from '@/lib/bluesky';
import type { PostView } from '@atproto/api/dist/client/types/app/bsky/feed/defs';
import { useEffect, useState } from 'react';

export default function BlueskyFeed() {
	const [posts, setPosts] = useState<PostView[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);

		blueSkyAgent
			.getAuthorFeed({
				actor: 'skeleton.dev',
				limit: 15,
				filter: 'posts_no_replies',
			})
			.then((result) =>
				setPosts(
					result.data.feed
						.filter((item) => {
							return item.post.author.handle === 'skeleton.dev';
						})
						.map((item) => item.post),
				),
			)
			.catch((err) => {
				setError(err);
			})
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return Array.from({ length: 15 }).map((_, i) => <div key={i} className="card bg-surface-100-900 opacity-50 animate-pulse h-96"></div>);
	}

	if (error) {
		return <p className="text-center font-semibold">{(error as Error).message}</p>;
	}

	return posts.map((post) => (
		<a
			key={post.uri}
			href={`https://bsky.app/profile/${post.author.handle}/post/${post.uri.split('/').at(-1)}`}
			target="_blank"
			rel="noopener noreferrer"
			className="block"
		>
			<article className="card preset-outlined-surface-200-800 hover:preset-tonal p-4 xl:p-10 space-y-4">
				<header className="flex justify-between items-center">
					<img
						className="w-10 rounded-full overflow-hidden"
						src="https://avatars.githubusercontent.com/u/118298875?s=400&u=66ff2a8ff80de0400757270d5a4eb90d61c867f1&v=4"
						alt="avatar"
					/>
					<small className="opacity-60">{new Date(post.record.createdAt).toLocaleString()}</small>
				</header>
				<p className="xl:text-lg">{post.record.text}</p>
				<footer className="space-y-4">
					{post.embed &&
						(post.embed.$type.includes('external') ? (
							<div className="block">
								{post.embed.external.thumb ? (
									<img
										className="w-full bg-surface-500/10 hover:bg-surface-500 p-0.5 rounded-container overflow-hidden shadow"
										src={post.embed.external.thumb}
										alt={post.embed.external.title}
									/>
								) : (
									<div className="card preset-outlined-surface-200-800 p-4 text-surface-800-200">{post.embed.external.title}</div>
								)}
							</div>
						) : post.embed.$type.includes('images') ? (
							post.embed.images.map((image: any, idx: number) => (
								<img
									key={image.thumb || idx}
									className="w-full bg-surface-500/10 p-1 rounded-container overflow-hidden shadow"
									src={image.thumb}
									alt={image.alt}
								/>
							))
						) : null)}
				</footer>
			</article>
		</a>
	));
}

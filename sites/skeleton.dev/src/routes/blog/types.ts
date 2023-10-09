export type BlogList = {
	meta: Meta;
	posts: Post[];
	vercelEnv: string;
};

type Meta = {
	pagination: {
		page: number;
		pages: number;
		limit: number;
		total: number;
		next: number;
		prev: number | null;
	};
};

type Post = {
	id: string;
	uuid: string;
	title: string;
	slug: string;
	html: string;
	comment_id: string;
	feature_image: string;
	featured: boolean;
	visibility: string;
	created_at: string;
	updated_at: string;
	published_at: string;
	custom_excerpt: string;
	codeinjection_head: string | null;
	codeinjection_foot: string | null;
	custom_template: string | null;
	canonical_url: string | null;
	tags: Tag[];
	primary_tag: Tag;
	url: string;
	excerpt: string;
	reading_time: number;
	access: boolean;
	comments: boolean;
	og_image: string | null;
	og_title: string | null;
	og_description: string | null;
	twitter_image: string | null;
	twitter_title: string | null;
	twitter_description: string | null;
	meta_title: string | null;
	meta_description: string | null;
	email_subject: string | null;
	frontmatter: string | null;
	feature_image_alt: string | null;
	feature_image_caption: string | null;
	primary_author: Author;
};

type Tag = {
	id: string;
	name: string;
	slug: string;
	description: string;
	feature_image: string | null;
	visibility: string;
	og_image: string | null;
	og_title: string | null;
	og_description: string | null;
	twitter_image: string | null;
	twitter_title: string | null;
	twitter_description: string | null;
	meta_title: string | null;
	meta_description: string | null;
	codeinjection_head: string | null;
	codeinjection_foot: string | null;
	canonical_url: string | null;
	accent_color: string;
	url: string;
};

type Author = {
	id: string;
	name: string;
	slug: string;
	profile_image: string;
	cover_image: string;
	bio: string;
	website: string;
	location: string;
	facebook: string | null;
	twitter: string | null;
	meta_title: string | null;
	meta_description: string | null;
	url: string;
};

import { DocumentRenderer } from '@keystatic/core/renderer';
import { type Metadata } from 'next';
import { notFound } from 'next/navigation';

import { documentRenderers } from '../_components/renderers';
import { reader } from '../reader';

type Props = {
	params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
	const post = await getPost(params.slug);

	return {
		title: post.title,
	} satisfies Metadata;
}

export async function generateStaticParams() {
	const slugs = await reader.collections.posts.list();

	return slugs.map((slug) => ({
		slug,
	}));
}

export default async function Post({ params }: Props) {
	const post = await getPost(params.slug);

	return (
		<>
			<div className="mx-auto w-full max-w-3xl rounded-md bg-white text-gray-800 shadow-md">
				<h1 className="rounded-t-md border-b bg-gray-100 py-2 text-center font-display text-3xl font-medium uppercase text-blue-800">
					{post.title}
				</h1>
				<div className="prose max-w-none px-4 py-6 sm:px-6 sm:py-8">
					<DocumentRenderer
						document={await post.content()}
						renderers={documentRenderers}
					/>
				</div>
			</div>
		</>
	);
}

async function getPost(slug: string) {
	const post = await reader.collections.posts.read(slug);
	if (!post) notFound();
	return post;
}

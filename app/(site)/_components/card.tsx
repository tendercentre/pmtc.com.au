import NextLink from 'next/link';
import { useId } from 'react';

export type CardProps = {
	copy: React.ReactNode;
	heading: string;
	href: string;
};

export function Card({ copy, heading, href }: CardProps) {
	const headingId = useId();

	return (
		<div className="flex flex-col rounded border bg-white shadow">
			<h2
				className="rounded-t-md bg-gray-100 py-2 text-center font-display text-2xl font-medium uppercase text-blue-800"
				id={headingId}
			>
				{heading}
			</h2>
			<div className="flex flex-1 flex-col border-t px-4 py-6">
				{copy}
				<div className="mt-auto pt-12">
					<NextLink
						aria-labelledby={headingId}
						className="inline-block w-full rounded border-b-8 border-blue-900 bg-blue-800 px-4 py-2 text-center font-medium text-white"
						href={href}
					>
						Read more
					</NextLink>
				</div>
			</div>
		</div>
	);
}

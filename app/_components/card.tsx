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
		<div className="flex flex-col bg-white border rounded shadow">
			<h2
				className="py-2 text-2xl font-medium text-center text-blue-800 uppercase bg-gray-100 font-display rounded-t-md"
				id={headingId}
			>
				{heading}
			</h2>
			<div className="flex flex-col flex-1 px-4 py-6 border-t">
				{copy}
				<div className="pt-12 mt-auto">
					<NextLink
						aria-labelledby={headingId}
						className="inline-block w-full px-4 py-2 font-medium text-center text-white bg-blue-800 border-b-8 border-blue-900 rounded"
						href={href}
					>
						Read more
					</NextLink>
				</div>
			</div>
		</div>
	);
}

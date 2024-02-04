import { NextSeo } from 'next-seo';
import Link from 'next/link';

export default function NotFoundPage() {
	return (
		<>
			<NextSeo title="404: Page Not Found" />
			<div className="w-full max-w-3xl mx-auto text-gray-800 bg-white rounded-md shadow-md">
				<h1 className="py-2 text-3xl font-medium text-center text-blue-800 uppercase bg-gray-100 border-b font-display rounded-t-md">
					404: Page Not Found
				</h1>
				<div className="px-4 py-6 prose sm:py-8 sm:px-6">
					<p>Well that's weird...</p>
					<p>It looks like this page doesn’t exist (yet?)</p>
					<p>
						Please use the ‘back’ button in your browser or click the link below
						to go back to the home page, and if you continue to have issues, get
						in touch.
					</p>
					<p>
						<Link href="/">Take me home</Link>
					</p>
				</div>
			</div>
		</>
	);
}

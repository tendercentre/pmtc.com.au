'use client';

import { useInView } from 'react-intersection-observer';

import { config } from '../config';

export function Map() {
	const { ref, inView } = useInView();

	return (
		<article className="px-4 py-6 bg-white border rounded-md shadow">
			<div ref={ref} className="overflow-hidden rounded aspect-w-16 aspect-h-9">
				{inView && (
					<iframe
						allowFullScreen
						aria-hidden={false}
						className="absolute inset-0 border-none"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6806.934245756351!2d152.882405!3d-31.456334!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9f3b717d29c9fdd6!2sPort%20Macquarie%20Tender%20Centre!5e0!3m2!1sen!2sus!4v1605390939667!5m2!1sen!2sus"
						tabIndex={0}
						title={`${config.title} Location`}
					/>
				)}
			</div>
		</article>
	);
}

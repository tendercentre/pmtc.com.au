import { collection, config, fields } from '@keystatic/core';

const isProd = process.env.NODE_ENV === 'production';

export default config({
	storage: isProd
		? {
				kind: 'github',
				repo: {
					owner: 'tendercentre',
					name: 'pmtc.com.au',
				},
			}
		: {
				kind: 'local',
			},
	singletons: {
		catalogue: {
			label: 'Catalogue',
			path: 'public/catalogue',
			schema: {
				file: fields.file({
					label: 'File',
				}),
			},
		},
		termsAndConditions: {
			label: 'Terms and Conditions',
			entryLayout: 'content',
			format: { contentField: 'content' },
			path: 'app/content/terms-and-conditions',
			schema: {
				content: fields.document({
					label: 'Content',
					dividers: true,
					formatting: true,
					images: true,
					links: true,
					tables: true,
				}),
			},
		},
	},
	collections: {
		posts: collection({
			label: 'Pages',
			entryLayout: 'content',
			path: 'app/content/pages/*',
			slugField: 'title',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				content: fields.document({
					label: 'Content',
					dividers: true,
					formatting: true,
					images: true,
					links: true,
					tables: true,
				}),
			},
		}),
	},
});

import { collection, config, fields } from '@keystatic/core';

export default config({
	storage: {
		kind: 'local',
	},
	singletons: {
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

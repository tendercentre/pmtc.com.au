import { defineCollection, z } from 'astro:content';

const pageCollection = defineCollection({
	schema: z.object({
		title: z.string(),
	}),
});

const termsCollection = defineCollection({
	schema: z.object({}),
});

export const collections = {
	page: pageCollection,
	terms: termsCollection,
};

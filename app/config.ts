import { FacebookIcon, InstagramIcon } from './(site)/_components/vectors';

const facebookUrl = 'https://www.facebook.com/ThetendercentrePMQ';
const instagramUrl = 'https://www.instagram.com/portmacquarie_tendercentre';

export const config = {
	title: 'Port Macquarie Tender Centre',
	description:
		'We are the largest second-hand and consignment store on the Mid North Coast. What will you find at the Tender Centre?',
	baseUrl: 'https://www.pmtc.com.au',
	tagline: 'You deliver the goods, we deliver the customer!',
	phone: '(02) 6581 3122',
	email: 'hello@pmtc.com.au',
	address: {
		line1: '14–17/35 Merrigal Road',
		line2: 'Port Macquarie, NSW, 2444',
		googleMaps: 'https://g.page/tendercentre',
	},
	facebookUrl,
	instagramUrl,
	buyersPremium: '11%',
	processingFee: '$3.30',
	siteNavigation: [
		{
			label: 'Buyers',
			slug: '/buyers',
		},
		{
			label: 'Sellers',
			slug: '/sellers',
		},
		{
			label: 'FAQ',
			slug: '/faq',
		},
		{
			label: 'Catalogue',
			slug: '/catalogue.pdf',
		},
		{
			label: 'Bid',
			slug: '/bid',
		},
	],
	socialLinks: [
		{
			label: 'Facebook',
			url: facebookUrl,
			icon: FacebookIcon,
		},
		{
			label: 'Instagram',
			url: instagramUrl,
			icon: InstagramIcon,
		},
	],
};

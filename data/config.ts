import { FacebookIcon, InstagramIcon } from '../components/vectors';

export const config = {
  title: 'Port Macquarie Tender Centre',
  description:
    'We are the largest second-hand and consignment store on the Mid North Coast. What will you find at the Tender Centre?',
  tagline: 'You deliver the goods, we deliver the customer!',
  phone: '(02) 6581 3122',
  email: 'hello@pmtc.com.au',
  address: {
    line1: '14–17/35 Merrigal Road',
    line2: 'Port Macquarie, NSW, 2444',
    googleMaps: 'https://g.page/tendercentre',
  },
  facebook: 'https://www.facebook.com/ThetendercentrePMQ',
  instagram: 'https://www.instagram.com/tendercentre',
  buyersPremium: '11%',
  processingFee: '$3.30',
  siteNavigation: [
    {
      label: 'Buyers',
      slug: '/buyers/',
    },
    {
      label: 'Sellers',
      slug: '/sellers/',
    },
    {
      label: 'FAQ',
      slug: '/faq/',
    },
    {
      label: 'Catalogue',
      slug: '/catalogue.pdf',
    },
    {
      label: 'Bid',
      slug: '/bid/',
    },
  ],
  socialLinks: [
    {
      label: 'Facebook',
      url: 'https://www.facebook.com',
      icon: FacebookIcon,
    },
    {
      label: 'Instagram',
      url: 'https://www.instagram.com',
      icon: InstagramIcon,
    },
  ],
} as const;

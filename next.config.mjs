/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
	},
	// eslint-disable-next-line @typescript-eslint/require-await
	rewrites: async () => [
		{ source: '/catalogue', destination: '/catalogue/file.pdf' },
		{ source: '/catalogue.pdf', destination: '/catalogue/file.pdf' },
	],
	reactStrictMode: true,
};

export default nextConfig;

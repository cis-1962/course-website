import nextMdx from '@next/mdx';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeHighlight from 'rehype-highlight';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  output: 'export',
  images: {
    unoptimized: true,
  },
};

const withMDX = nextMdx({
  options: {
    rehypePlugins: [rehypeHighlight, rehypeExternalLinks],
  },
});
export default withMDX(nextConfig);

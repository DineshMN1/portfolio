import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  async redirects() {
    return []; 
  },
  experimental: {
    mdxRs: true, 
    viewTransition: true, 
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);

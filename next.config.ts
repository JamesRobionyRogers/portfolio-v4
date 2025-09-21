import type { NextConfig } from "next";
import createMDX from '@next/mdx'
 
const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['github.com'],
  },
}
 
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md|mdx)$/, 
})

export default withMDX(nextConfig);

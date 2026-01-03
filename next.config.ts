import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true
  },
  basePath: '', // 如果部署到子目录，例如 username.github.io/repo-name，请设置为 '/repo-name'
  assetPrefix: './'
};

export default nextConfig;
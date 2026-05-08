/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  /** Génère out/route/index.html (meilleure compatibilité OVH / hébergement statique que route.html). */
  trailingSlash: true,
  reactStrictMode: true,
  compress: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**"
      }
    ]
  }
};

export default nextConfig;

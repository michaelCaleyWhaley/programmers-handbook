import type { NextConfig } from "next";

const isDev = process.env.NEXT_PUBLIC_ENV === "dev";

const nextConfig: NextConfig = {
  ...(isDev && {
    // eslint-disable-next-line @typescript-eslint/require-await
    async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:4000/api/:path*", // Proxy to Backend
        },
      ];
    },
  }),
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;

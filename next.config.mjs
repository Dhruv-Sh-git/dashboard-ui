// import type { NextConfig } from "next";

import { hostname } from "os";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
const nextConfig = {
  // Make sure there are no incorrect configurations blocking your routes
  reactStrictMode: true,
  images: {
    remotePatterns: [{hostname: "images.pexels.com"}], // Replace with your image domain
  },
  // Add other configurations as needed
};

export default nextConfig;
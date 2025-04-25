import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["res.cloudinary.com", "html.tailus.io", "assets.aceternity.com"], // Ajoutez le domaine ici
  },
};

export default nextConfig;

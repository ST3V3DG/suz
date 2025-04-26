import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  images: {
    domains: ["res.cloudinary.com", "html.tailus.io", "assets.aceternity.com", "fr.freepik.com"], // Ajoutez le domaine ici
  },
};

export default nextConfig;

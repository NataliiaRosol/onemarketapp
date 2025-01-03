import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['www.themealdb.com'], // Додано домен для завантаження зображень
  },
};

export default nextConfig;

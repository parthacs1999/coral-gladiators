import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    backend_url: process.env.backend_url ?? "http://localhost:8000",
  },
};

export default nextConfig;

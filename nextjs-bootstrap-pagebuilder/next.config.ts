// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure SASS
  sassOptions: {
    logger: {
      warn: function(message: string) {
        // Suppress Bootstrap SASS deprecation warnings
        if (!message.includes('Deprecation')) {
          console.warn(message);
        }
      }
    }
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "bpiw.sadasa.id"
            }
        ]
    }
};

export default nextConfig;

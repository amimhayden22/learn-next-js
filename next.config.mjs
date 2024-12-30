/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/login',
            destination: 'https://bpiw.sadasa.id/dasbor',
            permanent: true, // Jika true, redirect akan menggunakan status 308 (permanent).
          },
        ];
    },
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

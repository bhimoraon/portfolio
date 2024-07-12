/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https', // its the protocol type of the website
            hostname: 'ochi.design',// here should be the site
            //name from where we want to import the image
            port: '',
          },
        ],
      },
};

export default nextConfig;

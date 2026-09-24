/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
// https://img.magnific.com/free-photo
 images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "img.magnific.com",
      pathname: "/free-photo/**",
    },
  ],
},
};

export default nextConfig;
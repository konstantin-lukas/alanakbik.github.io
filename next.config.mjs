/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === "development" ? undefined : process.env.BASEPATH,
    images: {
        unoptimized: true,
    },
};
export default nextConfig;

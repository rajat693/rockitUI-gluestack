// /** @type {import('next').NextConfig} */
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// const { withGluestackUI } = require('@gluestack/ui-next-adapter');

// const nextConfig = {
//   // reactStrictMode: true,
//   reactStrictMode: false,
//   experimental: {
//     externalDir: true,
//   },
  
//   webpack5: true, 
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// module.exports = withGluestackUI(nextConfig);
// // module.export = nextConfig;



/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withGluestackUI } = require('@gluestack/ui-next-adapter');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withGluestackUI(nextConfig);
if (!URL.canParse) {
  URL.canParse = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
}

const nextConfig = {
  reactStrictMode: false,
  // Your other Next.js config options here...
};

module.exports = nextConfig;

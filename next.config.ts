const nextConfig = {
  async redirects() {
    return [
      {
        source: '/kontakt',
        destination: '/',
        permanent: true, // 301 redirect
      },
      {
        source: '/datenschutz',
        destination: '/',
        permanent: true,
      },
      {
        source: '/impressum',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
module.exports = {
  webpack: (config, { isServer }) => {
      if (!isServer) {
          // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
          config.resolve.fallback = {
              fs: false,
              crypto: false,
              os: false,
              zlib: false,
              stream: false,
              http: false,
              https: false,
              path: false,
              module: false

          }
      }

      return config;
  }
}
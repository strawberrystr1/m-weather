const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@App': path.resolve(__dirname, 'src/App/'),
      '@theme': path.resolve(__dirname, 'src/theme/'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
      '@api': path.resolve(__dirname, 'src/api/'),
    }
  },
};
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'PetsLovers - Tu app de fotos de mascotas',
      shortname: 'PetsLovers',
      description: 'Con PetsLovers puedes encontrar fotos de animales domésticos.',
      background_color: '#ffffff',
      theme_color: '#2196f3',
      crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
        },
        // {
        //   src: path.resolve('src/assets/img/icon.png'),
        //   size: '1024x1024' // you can also use the specifications pattern
        // },
        // {
        //   src: path.resolve('src/assets/img/icon.png'),
        //   size: '1024x1024',
        //   purpose: 'maskable'
        // }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://(res.cloudinary.com|images.unsplash.com)'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp(
            'curso-platzi-react-avanzado.corinavaras.vercel.app'
          ),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ] 
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}

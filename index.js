module.exports = {
  presets: ['react', 'es2015', 'stage-2', 'stage-3'],
  plugins: [
    'transform-runtime',
    'add-module-exports',
    'transform-react-display-name'
  ],
  env: {
    development: {
      plugins: [
        'react-hot-loader/babel',
        'typecheck',
        ['react-transform', {
          transforms: [{
            transform: 'react-transform-catch-errors',
            imports: ['react', 'redbox-react']
          }],
        }],
      ],
    },
  },
}

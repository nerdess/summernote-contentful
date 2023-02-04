//const jquery = require('jquery');
const webpack = require('webpack');
//const path = require('path');



module.exports = {
	webpack: {
	  plugins: [
		new webpack.ProvidePlugin({
		  $: 'jquery',
		  jQuery: 'jquery',
		  'window.jQuery': 'jquery',
		}),
	  ],
	},
  };

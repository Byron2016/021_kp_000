import path from 'path';
import autoprefixer from 'autoprefixer';

export default {
	root: path.resolve(__dirname, 'src'),
	build: {
		outDir: path.resolve(__dirname, 'dist'),
		minify: false,
		rollupOptions: {
			input: {
				index: path.resolve(__dirname, 'src/index.html'),
			},
		},
	},
	css: {
		postcss: {
			plugins: [
				autoprefixer({}), // add options if needed
			],
		},
	},
};

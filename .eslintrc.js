module.exports = {
	root: true,
	env: {
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'plugin:vue-pug-sfc/recommended',
	],
	plugins: [
		'vue',
	],
}

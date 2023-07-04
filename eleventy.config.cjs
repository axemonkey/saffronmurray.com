module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('saffronmurray.com/public');
	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.setServerOptions({
		// liveReload: false,
		watch: [
			'saffronmurray.com/public/**/*',
		],
		showVersion: true,
	});

	return {
		dir: {
			includes: "_includes",
			layouts: "_layouts",
		}
	}
};

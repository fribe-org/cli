module.exports = {
  globals(title = null) {
    return {
      title: title || process.env.APP_NAME || "Fribe.org",
      app_lang: process.env.APP_LANG || "tr",
    };
  },
};

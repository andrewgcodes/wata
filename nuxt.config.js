const languages = require("./data/languages");

const languagesRoutes = languages.map(({ slug }) => `/languages/${slug}`);

module.exports = {
  head: {
    title: "Wata",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "wata" },
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
      },
    ],
  },
  plugins: [
    "~/plugins/vuetify.js",
    "~/plugins/vue-clipboard.js",
    "~/plugins/vue-scrollto.js",
  ],
  css: ["~/assets/style/app.styl"],
  loading: { color: "#3B8070" },
  build: {
    vendor: [
      "~/plugins/vuetify.js",
      "~/plugins/vue-clipboard.js",
      "~/plugins/vue-scrollto.js",
    ],
    extractCSS: true,
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
  generate: {
    routes: ["/", "/languages", ...languagesRoutes],
  },
};

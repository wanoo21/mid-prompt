const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");
const { join } = require("path");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    join(__dirname, "./**/!(*.stories|*.spec).{ts,html}"),
    ...createGlobPatternsForDependencies(__dirname)
  ],
  darkMode: "media", // or 'media' or 'class
  theme: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/forms"),
  ]
};

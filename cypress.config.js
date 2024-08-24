import { defineConfig } from "cypress";
import vitePreprocessor from "cypress-vite";
import cucumber from 'cypress-cucumber-preprocessor'


export default defineConfig({
  viewportHeight: 982,
  viewportWidth: 1512,
  e2e: {
    specPattern: "cypress/e2e/features/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", vitePreprocessor());
      on("file:preprocessor", cucumber());
      // implement node event listeners here
    },
  },
});

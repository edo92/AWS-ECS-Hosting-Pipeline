/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const cp = require("child_process");

module.exports = (on, config) => {
  on("after:run", () => {
    cp.exec("docker-compose kill");
  });
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
};

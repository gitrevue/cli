const { jsWithBabel } = require("ts-jest/presets");

module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  transform: {
    ...jsWithBabel.transform
  },
};

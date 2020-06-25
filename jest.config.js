module.exports = {
  moduleNameMapper: { "\\.(css|less)$": "<rootDir>/client/src/styleMock.js"},
  setupFiles: [
      '<rootDir>/test/setupTests.js',
  ]
};
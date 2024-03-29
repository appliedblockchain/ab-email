module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [ 'src/**/*.js' ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -10
    }
  },
  testPathIgnorePatterns: [ '/node_modules/', '/config/' ]
}

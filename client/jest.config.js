module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest',
      '^.+\\.css$': 'jest-transform-stub',
    },
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    testMatch: ['<rootDir>/src/__tests__/**/*.test.jsx'],
    collectCoverageFrom: [
      'src/**/*.{js,jsx}',
      '!src/test/**',
      '!src/index.js',
      '!src/reportWebVitals.js',
      '!src/serviceWorker.js',
    ],
    coverageReporters: ['text', 'lcov'],
  };
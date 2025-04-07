module.exports = {
  testEnvironment: 'jsdom',
  // moduleNameMapper: {
  //   '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  //   '\\.(gif|jpeg|jpg|png|svg|webp)$': '<rootDir>/__mocks__/fileMock.js',
  // },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-stub',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testMatch: ['<rootDir>/src/__tests__/**/*.test.jsx'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/test/**', // Exclude your test folder from coverage
    '!src/__mocks__/**', // Exclude your mocks folder from coverage
    '!src/index.js',
    '!src/reportWebVitals.js',
    '!src/serviceWorker.js',
  ],
  coverageReporters: ['text', 'lcov'],
};
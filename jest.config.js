export default  {
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },
      moduleFileExtensions: ['js', 'jsx'],
      testMatch: ['<rootDir>/src/**/*.test.js'],
}
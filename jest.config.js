export default  {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },
      moduleFileExtensions: ['js', 'jsx'],
      testMatch: ['<rootDir>/src/**/*.test.js'],
}
module.exports = {
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  modulePaths: ['<rootDir>']
};

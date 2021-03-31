module.exports = {
  rootDir: `./source`,
  transform: {
    '^.+\\.js?$': `babel-jest`,
  },
  testRegex: `.test.(js?)$`,
  moduleFileExtensions: [`js`, `json`, `node`],
};

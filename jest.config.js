module.exports = {
    testMatch: ['**/spec/**/*.spec.js'],
    roots: [
        '<rootDir>/src/',
        '<rootDir>/app/',
    ],
    modulePaths: [
        '<rootDir>',
        '<rootDir>/src',
        '<rootDir>/app',
    ],
    setupFiles: [
        '<rootDir>/configs/jest/runtime',
    ],
    setupFilesAfterEnv: [
        '<rootDir>/configs/jest/jestDom',
    ],
    coverageDirectory: '<rootDir>/coverage',
    coveragePathIgnorePatterns: [
        '<rootDir>/entities',
        '<rootDir>/static',
        '<rootDir>/configs',
    ],
    moduleNameMapper: {
        '^.+\\.css$': 'identity-obj-proxy',
    },
};

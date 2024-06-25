import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testMatch: [
    '<rootDir>/src/**/*.test.ts'
  ],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ]
}

export default config;
import { test as testBase } from 'vitest';

export * from 'vitest';

export const test = testBase.extend({
  myPage: async ({}, use) => {
    await use('myPage');
  },
});

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env jest */
const detox = require('detox');
const config = require('../.detoxrc.json');

beforeAll(async () => {
  await detox.init(config.configurations['ios.release']);
}, 120000);

afterAll(async () => {
  await detox.cleanup();
});

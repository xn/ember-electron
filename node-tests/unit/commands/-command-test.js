'use strict';

const MockProject = require('../../helpers/mocks/project');
const BaseCommand = require('../../../lib/commands/-command');

const expect = require('../../helpers/expect');

describe('base ember-electron command', () => {
  it('sets `process.env.EMBER_CLI_ELECTRON` to true', () => {
    expect(process.env.EMBER_CLI_ELECTRON).to.equal(undefined);

    new BaseCommand({
      project: new MockProject('project-with-test-config')
    });

    expect(process.env.EMBER_CLI_ELECTRON).to.equal('true');
  });
});

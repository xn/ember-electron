'use strict';

const BuildCommand = require('../../../lib/commands/build');
const MockProject = require('../../helpers/mocks/project');

const expect = require('../../helpers/expect');

describe('base ember-electron build command', () => {
  let buildCommand;

  context('when `builder` does not exist', () => {
    before(() => {
      buildCommand = new BuildCommand({
        project: new MockProject('project-with-test-config'),
      });
    });

    it('throws', () => {
      expect(() => buildCommand.run()).to.throw(Error);
    });
  });

  context('when `builder` exists', () => {
    beforeEach(() => {
      // td.replace command.builder
    });

    context('and `skipPackage` is true', () => {
      it('does not set process.env.EMBER_CLI_ELECTRON_BUILD_PLATFORM');
      it('does not run an e-cli build task');
      it('does not install deps');
      it('does not try to clean up tmp files');
      it('calls the builder fn with passed opts');
    });

    context('and `skipPackage` is false', () => {
      it('sets process.env.EMBER_CLI_ELECTRON_BUILD_PLATFORM');

      context('and the e-cli build succeeds', () => {
        it('calls the builder fn with parsed opts');

        context('and the builder fn succeeds', () => {
          it('cleans up tmp files');
        });

        context('and the builder fn throws', () => {
          it('cleans up tmp files');
        });
      });

      context('and the e-cli build fails', () => {
        it('does not call the builder');
        it('cleans up tmp files');
      });
    });
  });

  describe('#parseForgeOptions', () => {
    it('includes tmpPath & outputPath by default');

    context('when not passed skipPackage, platform, and/or arch', () => {
      it('does not include empty params');
    });

    context('when passed skipPackage, platform, and/or arch', () => {
      it('includes the additional params');
    });
  });
});


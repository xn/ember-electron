'use strict';

const expect = require('../../helpers/expect');

describe('`ember electron` command', () => {
  context('when ember build succeeds', () => {
    beforeEach(() => {
      // td.replace WatchedBuild
    });

    it('calls electron-forge `start` API with appPath param');
    it('cleans up its built dir on exit');
  });

  context('when ember build fails', () => {
    beforeEach(() => {
      // td.replace WatchedBuild THROW
    });

    it('does not call electron-forge `start` API');
  });
});

'use strict';

const expect = require('../../helpers/expect');

describe('`ember electron:make` command', () => {
  describe('#builder', () => {
    it('calls forge `make` api with passed options');
  });

  describe('#parseForgeOptions', () => {
    context('when passed targets', () => {
      it('sets the overrideTargets param');
    });

    context('when not passed targets', () => {
      it('does not set an overrideTargets param');
    });
  });
});

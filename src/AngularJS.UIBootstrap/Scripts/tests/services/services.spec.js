/// <reference path="~/Scripts/_references.js" />
/// <reference path="~/Scripts/app/services/services.js" />

'use strict';

describe('service', function () {
    beforeEach(module('app.services'));

    describe('version', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.1');
        }));
    });
});
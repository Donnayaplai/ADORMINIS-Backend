const assert = require('chai').assert;
const dormsettingQueries = require('../model/queries/dormsetting');

describe('EDIT_SETTING', () => {
    it('should return string same as expected queries', () => {
        const expectedqueries = `UPDATE SETTING SET MULTPREPAID = "2" WHERE DORMID = "123";`
        var waterPrice = false
        var electricityPrice = false
        var minWaterUnit = false
        var multprepaid = 2
        var dormID = 123
        assert.equal(dormsettingQueries.EDIT_SETTING(waterPrice, electricityPrice, minWaterUnit, multprepaid, dormID), expectedqueries);
    })
});

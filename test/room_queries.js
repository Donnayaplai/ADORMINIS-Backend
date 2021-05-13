const assert = require('chai').assert;
const roomQueries = require('../model/queries/room');

describe('test', () => {
    it('2 = 2', () => {
        const expect = '2'
        assert.equal(2, expect);
    })
})

describe('/queries/room', () => {
    describe('GET_ROOMTYPE', () => {
        it('should return string same as expected queries', () => {
            const expectedqueries = `
            SELECT ROOMNAME, PRICE FROM ROOM_TYPE rt;
            `
            assert.equal(roomQueries.GET_ROOMTYPE, expectedqueries);
        })
    });
})
const GET_ELECTRICITYPRICE = (dormID) => {
    return `
    SELECT ELECTRICITYPRICE FROM SETTING s
    WHERE DORMID = "${dormID}";
    `
}

const GET_WATERPRICE = (dormID) => {
    return `
    SELECT WATERPRICE FROM SETTING s
    WHERE DORMID = "${dormID}";
    `
}

const GET_MINWATERUNIT = (dormID) => {
    return `
    SELECT MINWATERUNIT FROM SETTING s
    WHERE DORMID = "${dormID}";
    `
}

const ADD_SETTING = (waterPrice, electricityPrice, minWaterUnit, multprepaid, dormID) => {
    return `
    INSERT INTO	SETTING	(WATERPRICE, ELECTRICITYPRICE, MINWATERUNIT, MULTPREPAID, DORMID)	
    VALUES ("${waterPrice}", "${electricityPrice}", "${minWaterUnit}", "${multprepaid}", "${dormID}");
    `
}

const EDIT_SETTING = (waterPrice, electricityPrice, minWaterUnit, multprepaid, dormID) => {
    const editWaterPrice = `
    UPDATE	SETTING	SET WATERPRICE = "${waterPrice}" WHERE DORMID = "${dormID}";
    `
    const editElectricityPrice = `
    UPDATE	SETTING	SET ELECTRICITYPRICE = "${electricityPrice}" WHERE DORMID = "${dormID}";
    `
    const editMinWaterUnit = `
    UPDATE	SETTING	SET MINWATERUNIT = "${minWaterUnit}" WHERE DORMID = "${dormID}";
    `
    const editMultprepaid = `
    UPDATE SETTING SET MULTPREPAID = "${multprepaid}" WHERE DORMID = "${dormID}";
    `
    if (electricityPrice === false && minWaterUnit === false && multprepaid === false) {
        return editWaterPrice
    } else if (waterPrice === false && minWaterUnit === false && multprepaid === false) {
        return editElectricityPrice
    } else if (waterPrice === false && electricityPrice === false && multprepaid === false) {
        return editMinWaterUnit
    } else if (waterPrice === false && electricityPrice === false && minWaterUnit === false) {
        return editMultprepaid
    }
}

const dormsettingQueries = (module.exports = {
    GET_ELECTRICITYPRICE,
    GET_WATERPRICE,
    GET_MINWATERUNIT,
    ADD_SETTING,
    EDIT_SETTING
});
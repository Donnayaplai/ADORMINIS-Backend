const GET_WATER_METERNO = (roomID) => {
    return`
    SELECT w.WATERNO FROM WATERMETER w 
    WHERE ROOMID = "${roomID}"
    ORDER BY w.METERDATE DESC, w.WMETERID DESC
    LIMIT 1;
    `
}

const GET_ELECTRICITY_METERNO = (roomID) => {
    return`
    SELECT e.ELECTRICITYNO FROM ELECTRICITYMETER e
    WHERE ROOMID = "${roomID}"
    ORDER BY e.ELECTRICITYNO DESC, e.EMETERID DESC
    LIMIT 1;
    `
}

const ADD_WATER_METERNO = (waterNo, meterDate, roomID) => {
    return`
    INSERT INTO	WATERMETER	(WATERNO, METERDATE, ROOMID)	
    VALUES ("${waterNo}", "${meterDate}", "${roomID}");
    `
}

const ADD_ELECTRICITY_METERNO = (electricityNo, meterDate, roomID) => {
    return`
    INSERT INTO	ELECTRICITYMETER (ELECTRICITYNO, METERDATE, ROOMID)	
    VALUES ("${electricityNo}", "${meterDate}", "${roomID}");
    `
}

const utilityQueries = (module.exports = {
    GET_WATER_METERNO, 
    GET_ELECTRICITY_METERNO, 
    ADD_WATER_METERNO, 
    ADD_ELECTRICITY_METERNO
});
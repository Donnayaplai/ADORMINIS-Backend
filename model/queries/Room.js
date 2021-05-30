// const GET_ALL_ROOM = (dormID) => {
//     return `
//     ((SELECT DISTINCT r.ROOMID, r.ROOMNO, "Available" AS STATUS
//     FROM ROOM r
//     LEFT JOIN RENT r2 ON r.ROOMID = r2.ROOMID 
//     JOIN BUILDING b ON r.BUILDINGID = b.BUILDINGID 
//     JOIN DORMITORY d ON b.DORMID = d.DORMID
//     WHERE d.DORMID = "${dormID}")
//     EXCEPT
//     (SELECT DISTINCT r.ROOMID, r.ROOMNO, "Available" AS STATUS
//     FROM ROOM r
//     LEFT JOIN RENT r2 ON r.ROOMID = r2.ROOMID 
//     JOIN BUILDING b ON r.BUILDINGID = b.BUILDINGID 
//     JOIN DORMITORY d ON b.DORMID = d.DORMID
//     WHERE d.DORMID = "${dormID}"
//     AND r2.CHECKINDATE  IS NOT NULL
//     AND r2.CHECKOUTDATE IS NULL))
//     UNION 
//     (SELECT DISTINCT r.ROOMID, r.ROOMNO, "Not Available" AS STATUS
//     FROM ROOM r
//     LEFT JOIN RENT r2 ON r.ROOMID = r2.ROOMID 
//     JOIN BUILDING b ON r.BUILDINGID = b.BUILDINGID 
//     JOIN DORMITORY d ON b.DORMID = d.DORMID
//     WHERE d.DORMID = "${dormID}"
//     AND r2.CHECKINDATE  IS NOT NULL
//     AND r2.CHECKOUTDATE IS NULL)
//     ORDER BY ROOMID;
//     `
// }

const GET_ALL_ROOM = (dormID) => {
    return `
    SELECT * FROM ALLROOMSTATUS
    WHERE DORMID = "${dormID}";
    `
}

const CHECK_ROOM_STATUS = (roomID) => {
    return `
    SELECT IF(r2.CHECKOUTDATE IS NULL, "Not Available", "Available") AS STATUS FROM ROOM r
    JOIN RENT r2 ON r.ROOMID = r2.ROOMID 
    WHERE r.ROOMID = "${roomID}"
    AND r2.CHECKINDATE IS NOT NULL 
    ORDER BY r2.CHECKINDATE DESC
    LIMIT 1;
    `
}

const COUNT_TOTAL_ROOM = (dormID) => {
    return `
    SELECT COUNT(r.ROOMID) FROM ROOM r 
    JOIN BUILDING b ON b.BUILDINGID = r.BUILDINGID
    JOIN DORMITORY d ON b.DORMID = d.DORMID 
    WHERE d.DORMID = "${dormID}";
    `
}

const COUNT_NOTAVAILABLE_ROOM = (dormID) => {
    return `
    SELECT COUNT(r.ROOMNO) FROM ROOM r
    LEFT JOIN RENT r2 ON r.ROOMID = r2.ROOMID
    JOIN BUILDING b ON r.BUILDINGID = b.BUILDINGID 
    JOIN DORMITORY d ON d.DORMID = b.DORMID
    WHERE r2.CHECKINDATE  IS NOT NULL
    AND r2.CHECKOUTDATE IS NULL
    AND d.DORMID = "${dormID}";
    `
}

const GET_RESIDENT_INFO = (roomID) => {
    return `
    SELECT r.FNAME, r.LNAME, r.TELNO, r.GENDER, cor.STARTDATE, cor.ENDDATE, r2.CHECKINDATE FROM RESIDENT r
    JOIN RENT r2 ON r.RESIDENTID = r2.RESIDENTID
    JOIN CONTRACT_OF_RENT cor ON r2.CONTRACTOFRENTID = cor.CONTRACTOFRENTID 
    WHERE r2.ROOMID = "${roomID}"
    AND r2.CHECKOUTDATE IS NULL;
    `
}

const ADD_RESIDENT = (checkInDate, roomID, residentCode) => {
    return `
    INSERT INTO RENT (CHECKINDATE, RESIDENTID, ROOMID)	
    SELECT "${checkInDate}" AS CHECKINDATE, r.RESIDENTID, "${roomID}" AS ROOMID FROM RESIDENT r
    WHERE r.PERSONALCODE = "${residentCode}";
    `
}

const CREATE_CONTRACTOFRENT = (startDate, endDate, guaranteeFee, roomID) => {
    return `
    INSERT INTO CONTRACT_OF_RENT (STARTDATE, ENDDATE, GUARANTEEFEE, PREPAID)
    SELECT "${startDate}" AS STARTDATE, "${endDate}" AS ENDDATE, "${guaranteeFee}" AS GUARANTEEFEE, (rt.PRICE * s.MULTPREPAID) AS PREPAID FROM ROOM r 
    JOIN ROOM_TYPE rt ON r.ROOMTYPEID = rt.ROOMTYPEID 
    JOIN BUILDING b ON r.BUILDINGID = b.BUILDINGID 
    JOIN DORMITORY d ON b.DORMID = d.DORMID
    JOIN SETTING s ON d.DORMID = s.DORMID 
    WHERE r.ROOMID = "${roomID}";
    `
}

const ADD_CONTRACTOFRENT_TO_RENT = (contractOfRentID, rentID) => {
    return `UPDATE RENT SET CONTRACTOFRENTID = "${contractOfRentID}" WHERE RENTID = "${rentID}";`
}

const GET_ROOMTYPE = () => {
    return `SELECT ROOMNAME, PRICE FROM ROOM_TYPE rt;`
}

const roomQueries = (module.exports = {
    GET_ALL_ROOM,
    CHECK_ROOM_STATUS, 
    COUNT_TOTAL_ROOM, 
    COUNT_NOTAVAILABLE_ROOM, 
    GET_RESIDENT_INFO, 
    ADD_RESIDENT, 
    CREATE_CONTRACTOFRENT, 
    ADD_CONTRACTOFRENT_TO_RENT,
    GET_ROOMTYPE
});
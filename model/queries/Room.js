const pool = require("../db");
const roomQueries = require("../queries/room");

const checkRoomStatus = async (roomID) => {
  const roomStatus = await pool.query(roomQueries.CHECK_ROOM_STATUS(roomID));
  return roomStatus;
};

const countTotalRoom = async (dormID) => {
  const totalRoom = await pool.query(roomQueries.COUNT_TOTAL_ROOM(dormID));
  return totalRoom;
};

const countNotAvailableRoom = async (dormID) => {
  const notAvailableRoom = await pool.query(
    roomQueries.COUNT_NOTAVAILABLE_ROOM(dormID)
  );
  return notAvailableRoom;
};

const getResidentInfo = async (roomID) => {
  const residentInfo = await pool.query(roomQueries.GET_RESIDENT_INFO(roomID));
  return residentInfo;
};

const addResident = async (checkInDate, roomID, residentCode) => {
  const addResident = await pool.query(
    roomQueries.ADD_RESIDENT(checkInDate, roomID, residentCode)
  );
  return addResident;
};

const createCoR = async (startDate, endDate, guaranteeFee, roomID) => {
  const newCoR = await pool.query(
    roomQueries.CREATE_CONTRACTOFRENT(startDate, endDate, guaranteeFee, roomID)
  );
  return newCoR;
};

const addCoRtoRent = async (contractOfRentID, rentID) => {
  const CoRtoRent = await pool.query(
    roomQueries.ADD_CONTRACTOFRENT_TO_RENT(contractOfRentID, rentID)
  );
  return CoRtoRent;
};

const roomModel = (module.exports = {
  checkRoomStatus,
  countTotalRoom,
  countNotAvailableRoom,
  getResidentInfo,
  addResident,
  createCoR,
  addCoRtoRent,
});

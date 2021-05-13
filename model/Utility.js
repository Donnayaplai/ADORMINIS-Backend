const pool = require("../db");
const utilityQueries = require("../queries/utility");

const getWaterMeterNo = async (roomID) => {
  const getWaterMeterNo = await pool.query(
    utilityQueries.GET_WATER_METERNO(roomID)
  );
  return getWaterMeterNo;
};

const getElectricityMeterNo = async (roomID) => {
  const getElectricityMeterNo = await pool.query(
    utilityQueries.GET_ELECTRICITY_METERNO(roomID)
  );
  return getElectricityMeterNo;
};

const addWaterMeterNo = async (waterNo, meterDate, roomID) => {
  const addWaterMeterNo = await pool.query(
    utilityQueries.ADD_WATER_METERNO(waterNo, meterDate, roomID)
  );
  return addWaterMeterNo;
};

const addElectricityMeterNo = async (waterNo, meterDate, roomID) => {
  const addElectricityMeterNo = await pool.query(
    utilityQueries.ADD_ELECTRICITY_METERNO(waterNo, meterDate, roomID)
  );
  return addElectricityMeterNo;
};

const utilityModel = (module.exports = {
  getWaterMeterNo,
  getElectricityMeterNo,
  addWaterMeterNo,
  addElectricityMeterNo,
});

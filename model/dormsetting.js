const pool = require("../db");
const dormsettingQueries = require("./queries/dormsetting");

const getElectricityPrice = async (dormID) => {
  const electricityPrice = await pool.query(dormsettingQueries.GET_ELECTRICITYPRICE(dormID));
  return electricityPrice;
};

const getwaterPrice = async (dormID) => {
    const waterPrice = await pool.query(dormsettingQueries.GET_WATERPRICE(dormID));
    return waterPrice;
  };

  const getMinWaterUnit = async (dormID) => {
    const minWaterUnit = await pool.query(dormsettingQueries.GET_MINWATERUNIT(dormID));
    return minWaterUnit;
  };

  const addSetting = async (waterPrice, electricityPrice, minWaterUnit, multprepaid, dormID) => {
    const Setting = await pool.query(dormsettingQueries.ADD_SETTING(waterPrice, electricityPrice, minWaterUnit, multprepaid, dormID));
    return Setting;
  };

  const editSetting = async (waterPrice, electricityPrice, minWaterUnit, multprepaid, dormID) => {
    const newSetting = await pool.query(dormsettingQueries.EDIT_SETTING(waterPrice, electricityPrice, minWaterUnit, multprepaid, dormID));
    return newSetting;
  };

  const dormsettingModel = (module.exports = {
    getElectricityPrice,
    getwaterPrice,
    getMinWaterUnit,
    addSetting,
    editSetting
  });
const pool = require("../db");
const invoiceQueries = require("../queries/invoice");

const getInvoiceDate = async (roomID, month) => {
  const invoiceDate = await pool.query(
    invoiceQueries.GET_INVOICE_DATE(roomID, month)
  );
  return invoiceDate;
};

const getInvoiceTotalprice = async (roomID, month) => {
  const invoiceTotalprice = await pool.query(
    invoiceQueries.GET_INVOICE_TOTALPRICE(roomID, month)
  );
  return invoiceTotalprice;
};

const getInvoiceID = async (roomID, month) => {
  const invoiceID = await pool.query(
    invoiceQueries.GET_INVOICEID(roomID, month)
  );
  return invoiceID;
};

const getCost = async (invoiceID) => {
  const cost = await pool.query(invoiceQueries.GET_COST(invoiceID));
  return cost;
};

const getSumCost = async (invoiceID) => {
  const sumCost = await pool.query(invoiceQueries.GET_SUM_COST(invoiceID));
  return sumCost;
};

const invoiceModel = (module.exports = {
  getInvoiceDate,
  getInvoiceTotalprice,
  getInvoiceID,
  getCost,
  getSumCost,
});

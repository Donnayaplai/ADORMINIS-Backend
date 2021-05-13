const GET_INVOICE_DATE = (roomID, month) => {
    return` 
    SELECT i.INVOICEDATE, i.TOTALPRICE, i.INVOICEID FROM INVOICE i 
    JOIN ROOM r ON i.ROOMID  = r.ROOMID 
    WHERE r.ROOMID = "${roomID}"
    AND i.INVOICEDATE LIKE "%${month}%";
    `
}

const GET_INVOICE_TOTALPRICE = (roomID, month) => {
    return` 
    SELECT i.TOTALPRICE FROM INVOICE i 
    JOIN ROOM r ON i.ROOMID  = r.ROOMID 
    WHERE r.ROOMID = "${roomID}"
    AND i.INVOICEDATE LIKE "%${month}%"; 
    `
}

const GET_INVOICEID = (roomID, month) => {
    return` 
    SELECT i.INVOICEID FROM INVOICE i 
    JOIN ROOM r ON i.ROOMID  = r.ROOMID 
    WHERE r.ROOMID = "${roomID}"
    AND i.INVOICEDATE LIKE "%${month}%"; 
    `
}

const GET_COST = (invoiceID) => {
    return`
    SELECT c.COSTNAME, id.PRICE FROM INVOICE i 
    JOIN ROOM r ON r.ROOMID = i.ROOMID 
    JOIN INVOICE_DETAIL id ON i.INVOICEID = id.INVOICEID 
    JOIN COST c ON id.COSTID = c.COSTID 
    WHERE i.INVOICEID = "${invoiceID}";
    `
}

const GET_SUM_COST = (invoiceID) => {
    return`
    SELECT SUM(id.PRICE) FROM INVOICE i 
    JOIN ROOM r ON r.ROOMID = i.ROOMID 
    JOIN INVOICE_DETAIL id ON i.INVOICEID = id.INVOICEID 
    JOIN COST c ON id.COSTID = c.COSTID 
    WHERE i.INVOICEID = "${invoiceID}";
    `
}

const invoiceQueries = (module.exports = {
    GET_INVOICE_DATE, 
    GET_INVOICE_TOTALPRICE, 
    GET_INVOICEID, 
    GET_COST, 
    GET_SUM_COST
});
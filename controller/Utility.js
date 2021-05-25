const utility = require('../model/Utility');
// const utility = new utilityModel();
const dormsetting = require('../model/Dormsetting');
// const dormsetting = new dormsettingModel();

exports.calUtility = async (req, res, next) => {
    try {
        const roomID = req.params.rooID;
        let newmeter = req.params.meterNo;

        let oldmeter = utility.getElectricityMeterNo(roomID);
        let calprice = dormsetting.getElectricityPrice(roomID);
        let date = new Date();
        let toDate = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
        let unitused;
        let price;

        if (oldmeter == null) {
            await utility.addElectricityMeterNo(newmeter, toDate, roomID);
            await res.json(utility);
        } else if (oldmeter > newmeter) {
            newmeter += 9999
            unitused = newmeter - oldmeter
            price = unitused * calprice
            await utility.addElectricityMeterNo(unitused, toDate, roomID);
            await res.json(price);
        } else {
            unitused = newmeter - oldmeter
            price = unitused * calprice
            await utility.addElectricityMeterNo(unitused, toDate, roomID);
            await res.json(price);
        }
    }
    catch (err) {
        console.log(err)
    }
}
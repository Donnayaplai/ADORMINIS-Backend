const utility = require('../model/Utility');
const utility = new utility();
const dormsettingModel = require('../model/Dormsetting');
const dormsetting = new dormsettingModel();

// exports.getElectricityPrice = async ()

exports.utility = async (req, res, next) => {
    try {
        var oldmeter = await utility.getElectricityMeterNo(roomID);
        var newmeter;
        var unitused;
        var unitused;
        var price;

        if(oldmeter == null){
            // addElectricityMeterNo ?
        } else if (oldmeter > newmeter) {
            newmeter += 9999
            unitused = newmeter - oldmeter
            // addElectricityMeterNo ?
        }
    }
}
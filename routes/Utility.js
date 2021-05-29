const express = require("express");
const router = express.Router();
const Utility = require("../controller/Utility");

router.post('/cal/:roomID', async (req, res) => {
    const roomID = req.params.roomID;
    const meterNo = req.params.meterNo;
    const result = await Utility.calUtility(roomID,meterNo);
    res.json(result);
});

module.exports = router;
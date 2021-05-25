const express = require("express");
const router = express.Router();
const Room = require("../model/Room");

router.get("/:dormID", async (req, res) => {
    const dormID = req.params.dormID;
    const room = await Room.getAllRoom(dormID);
    res.json(room);
});

router.get('/:dormID/:roomID', async (req, res) => {
    const roomID = req.params.roomID;
    const info = await Room.getResidentInfo(roomID);
    res.json(info);
});

module.exports = router;
const express = require("express");
const router = express.Router();

router.get("/message", (req, res) => {
    res.json({
        message: "Welcome to OneLink API!",
        status: "success"
    });
});

router.post("/test", (req, res) => {
    const data = req.body;

    res.json({
        message: "Data received successfully!",
        receivedData: data
    });
});

module.exports = router;

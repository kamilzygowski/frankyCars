const express = require("express");
const app = express();

// test if server works properly
app.get("/test", (req, res) => {
    res.status(200).json({ testPassed: true });
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})
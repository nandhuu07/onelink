const express = require("express");
const app = express();
const PORT = 3000;

const apiRoutes = require("./routes/api");

app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoutes);

app.listen(PORT, () => {
    console.log(`OneLink server running at http://localhost:${PORT}`);
});
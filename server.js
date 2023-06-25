
const express = require("express");
const app = express();

require("dotenv").config();
const connectDB = require("./config/connectDB");
const cors = require("cors");

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", require("./routes/product"));
app.use("/api/users", require("./routes/user"));
app.use("/api/cart", require("./routes/cart"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

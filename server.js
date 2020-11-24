const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(
    express.json({
        extended: false,
    })
);

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/users", require("./server/routes/users"));
app.use("/api/auth", require("./server/routes/auth"));
app.use("/api/profile", require("./server/routes/profile"));
app.use("/api/tweets", require("./server/routes/tweets"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

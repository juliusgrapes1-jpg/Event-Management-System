const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let users = [];
let attendance = [];

app.post("/api/register", (req, res) => {
    const { username, password, email } = req.body;

    const exists = users.find(u => u.username === username);

    if (exists) {
        return res.json({ message: "Username already exists" });
    }

    users.push({ username, password, email });

    res.json({ message: "Registered successfully" });
});


app.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        return res.json({
            success: false,
            message: "Invalid credentials"
        });
    }

    res.json({
        success: true,
        message: "Login successful"
    });
});

app.post("/api/attendance", (req, res) => {
    attendance = req.body;
    res.json({ message: "Attendance saved" });
});


app.get("/api/attendance", (req, res) => {
    res.json(attendance);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
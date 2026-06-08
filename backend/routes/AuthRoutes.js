const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const Holding = require("../models/HoldingsModel");
const Position = require("../models/PositionsModel");

const router = express.Router();

// Default holdings seeded for every new user
const defaultHoldings = (userId) => [
    { userId, name: "INFY",     qty: 10, avg: 1400, price: 1555.45, net: "+1.20%", day: "-0.45%" },
    { userId, name: "TCS",      qty: 5,  avg: 3000, price: 3194.8,  net: "+0.80%", day: "-0.25%" },
    { userId, name: "RELIANCE", qty: 8,  avg: 2000, price: 2112.4,  net: "+1.44%", day: "+0.32%" },
    { userId, name: "WIPRO",    qty: 15, avg: 500,  price: 577.75,  net: "+0.32%", day: "+0.10%" },
    { userId, name: "HDFCBANK", qty: 6,  avg: 1500, price: 1642.3,  net: "+0.95%", day: "-0.15%" },
];

// Default positions seeded for every new user
const defaultPositions = (userId) => [
    { userId, product: "CNC", name: "INFY",     qty: 5,  avg: 1520, price: 1555.45, net: "+1.20%", day: "-0.45%", isLoss: false },
    { userId, product: "MIS", name: "ONGC",     qty: 10, avg: 120,  price: 116.8,   net: "-0.09%", day: "-0.09%", isLoss: true  },
    { userId, product: "CNC", name: "KPITTECH", qty: 3,  avg: 250,  price: 266.45,  net: "+3.54%", day: "+3.54%", isLoss: false },
];

// ── SIGNUP ────────────────────────────────────────────────
router.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        // Seed default holdings & positions for this new user
        await Holding.insertMany(defaultHoldings(newUser._id));
        await Position.insertMany(defaultPositions(newUser._id));

        res.status(201).json({ message: "Account created successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// ── LOGIN ─────────────────────────────────────────────────
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            username: user.username,
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

module.exports = router;
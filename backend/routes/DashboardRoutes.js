const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const Holding = require("../models/HoldingsModel");
const Position = require("../models/PositionsModel");
const Order = require("../models/OrdersModel");

const router = express.Router();

// GET /api/holdings — only this user's holdings
router.get("/holdings", authMiddleware, async (req, res) => {
    try {
        const holdings = await Holding.find({ userId: req.user.userId });
        res.status(200).json(holdings);
    } catch (err) {
        res.status(500).json({ message: "Error fetching holdings", error: err.message });
    }
});

// GET /api/positions — only this user's positions
router.get("/positions", authMiddleware, async (req, res) => {
    try {
        const positions = await Position.find({ userId: req.user.userId });
        res.status(200).json(positions);
    } catch (err) {
        res.status(500).json({ message: "Error fetching positions", error: err.message });
    }
});

// GET /api/orders — only this user's orders
router.get("/orders", authMiddleware, async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.userId });
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: "Error fetching orders", error: err.message });
    }
});

// POST /api/orders — place order linked to this user
router.post("/orders", authMiddleware, async (req, res) => {
    const { name, qty, price, mode } = req.body;
    try {
        const newOrder = new Order({
            userId: req.user.userId,
            name, qty, price, mode
        });
        await newOrder.save();
        res.status(201).json({ message: "Order placed successfully!", order: newOrder });
    } catch (err) {
        res.status(500).json({ message: "Error placing order", error: err.message });
    }
});

module.exports = router;
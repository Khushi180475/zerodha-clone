const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/AuthRoutes");
const dashboardRoutes = require("./routes/DashboardRoutes");

const app = express();

// ─── Middleware ───────────────────────────────────────────
// Allows frontend (localhost:3000) to talk to backend (localhost:5000)
app.use(cors({
  origin: [
    "http://localhost:3001",
    "http://localhost:3000",
    "https://zerodha-clone-kappa-liard.vercel.app",
    "https://zerodha-clone-avx6-fr71k1pfr-khushi-aggarwal-s-projects.vercel.app"
  ]
}));

// Allows Express to read JSON data sent from frontend
app.use(express.json());

// ─── Routes ───────────────────────────────────────────────
// All auth routes: /api/signup, /api/login
app.use("/api/auth", authRoutes);

// All dashboard routes: /api/holdings, /api/orders, /api/positions
app.use("/api", dashboardRoutes);

// ─── Connect to MongoDB & Start Server ────────────────────
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Connected to MongoDB");
        app.listen(process.env.PORT, () => {
            console.log(`🚀 Server running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ MongoDB connection failed:", err.message);
    });
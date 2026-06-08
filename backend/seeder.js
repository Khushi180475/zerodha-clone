const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/UserModel");
const Holding = require("./models/HoldingsModel");
const Position = require("./models/PositionsModel");

const defaultHoldings = (userId) => [
    { userId, name: "INFY",     qty: 10, avg: 1400, price: 1555.45, net: "+1.20%", day: "-0.45%" },
    { userId, name: "TCS",      qty: 5,  avg: 3000, price: 3194.8,  net: "+0.80%", day: "-0.25%" },
    { userId, name: "RELIANCE", qty: 8,  avg: 2000, price: 2112.4,  net: "+1.44%", day: "+0.32%" },
    { userId, name: "WIPRO",    qty: 15, avg: 500,  price: 577.75,  net: "+0.32%", day: "+0.10%" },
    { userId, name: "HDFCBANK", qty: 6,  avg: 1500, price: 1642.3,  net: "+0.95%", day: "-0.15%" },
];

const defaultPositions = (userId) => [
    { userId, product: "CNC", name: "INFY",     qty: 5,  avg: 1520, price: 1555.45, net: "+1.20%", day: "-0.45%", isLoss: false },
    { userId, product: "MIS", name: "ONGC",     qty: 10, avg: 120,  price: 116.8,   net: "-0.09%", day: "-0.09%", isLoss: true  },
    { userId, product: "CNC", name: "KPITTECH", qty: 3,  avg: 250,  price: 266.45,  net: "+3.54%", day: "+3.54%", isLoss: false },
];

mongoose.connect(process.env.MONGO_URI).then(async () => {
    console.log("✅ Connected to MongoDB");

    // Clear existing holdings and positions
    await Holding.deleteMany({});
    await Position.deleteMany({});
    console.log("🗑️  Cleared old holdings and positions");

    // Get all users
    const users = await User.find({});
    console.log(`👥 Found ${users.length} users`);

    // Seed data for each user
    for (const user of users) {
        await Holding.insertMany(defaultHoldings(user._id));
        await Position.insertMany(defaultPositions(user._id));
        console.log(`✅ Seeded data for: ${user.username}`);
    }

    console.log("🎉 All done!");
    process.exit();
}).catch(err => {
    console.error("❌ Error:", err);
    process.exit(1);
});
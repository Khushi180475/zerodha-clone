const jwt = require("jsonwebtoken");

// This function runs BEFORE any protected route
// It checks if the user has a valid token (i.e. is logged in)
const authMiddleware = (req, res, next) => {
    // Token is sent in the request header like:
    // Authorization: Bearer <token>
    const authHeader = req.headers.authorization;

    // If no token provided at all
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token, access denied" });
    }

    // Extract just the token part (remove "Bearer ")
    const token = authHeader.split(" ")[1];

    try {
        // Verify the token using your secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user info to request so routes can use it
        req.user = decoded;

        // Move on to the actual route
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = authMiddleware;
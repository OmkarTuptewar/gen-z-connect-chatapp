const express = require("express");
const dotenv = require("dotenv");
const path = require('path');

// Load environment variables
dotenv.config();

// Connect to database
const connectDB = require("./config/db.js");
connectDB();

const app = express();
app.use(express.json());

// Middleware for serving static files
const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "frontend", "build")));

// Routes
app.get("/", (req, res) => {
    res.send("Running on API successfully");
});

// Your other API routes
app.use('/api/user', require("./routes/userRoutes.js"));
app.use('/api/chat', require("./routes/chatRoutes.js"));
app.use('/api/message', require("./routes/messageRoutes.js"));

// Wildcard route for production
if (process.env.NODE_ENV === "production") {
    app.get('*', (req, res) => {
        console.log("Production environment");
        res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
    });
} else {
    app.get("/", (req, res) => {
        res.send("API is running successfully");
    });
}

// Error handling middleware
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});

// Socket.io configuration
const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:3000",
    },
});

// Socket.io event handling
io.on("connection", (socket) => {
    console.log("Connected to socket.io");

    socket.on("setup", (userData) => {
        socket.join(userData._id);
        console.log(userData._id);
        socket.emit("connected");
    });

    // Other socket.io event handlers...
});
  
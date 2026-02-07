// app.js
const express = require("express");
const cors = require("cors");

// Routes
const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "https://assignment-14-crm.netlify.app", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json()); // parse JSON bodies

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("CRM API is running...");
});

module.exports = app;

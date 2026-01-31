// routes/customerRoutes.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

// Import controllers (must exactly match exports)
const { 
  createCustomer, 
  getCustomers, 
  updateCustomer, 
  deleteCustomer 
} = require("../controllers/customerController");

// Protect all routes
router.use(authMiddleware);

// Routes
router.post("/", createCustomer);        // Create
router.get("/", getCustomers);           // Read all
router.put("/:id", updateCustomer);      // Update
router.delete("/:id", deleteCustomer);   // Delete

module.exports = router;

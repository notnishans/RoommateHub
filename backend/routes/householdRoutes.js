const express = require('express');
const { createHousehold } = require('../controllers/householdController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createHousehold);

module.exports = router;

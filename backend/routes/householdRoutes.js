const express = require('express');
const { createHousehold, joinHousehold } = require('../controllers/householdController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, createHousehold);
router.post('/:id/members', protect, joinHousehold);

module.exports = router;

const Household = require('../models/Household');

const createHousehold = async (req, res) => {
  try {
    const { name, location } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'Household name is required' });
    }

    const household = await Household.create({
      name,
      location,
      owner: req.user._id,
      members: [req.user._id],
    });

    return res.status(201).json(household);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ message: messages.join(', ') });
    }
    return res.status(500).json({ message: 'Server error while creating household' });
  }
};

module.exports = { createHousehold };

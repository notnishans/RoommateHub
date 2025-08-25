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

const joinHousehold = async (req, res) => {
  try {
    const household = await Household.findById(req.params.id);

    if (!household) {
      return res.status(404).json({ message: 'Household not found' });
    }

    const alreadyMember = household.members.some(
      (memberId) => memberId.toString() === req.user._id.toString()
    );

    if (alreadyMember) {
      return res.status(400).json({ message: 'You are already a member of this household' });
    }

    household.members.push(req.user._id);
    await household.save();

    return res.status(200).json(household);
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ message: 'Invalid household ID' });
    }
    return res.status(500).json({ message: 'Server error while joining household' });
  }
};

module.exports = { createHousehold, joinHousehold };

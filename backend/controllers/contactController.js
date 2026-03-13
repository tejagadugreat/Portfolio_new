const Message = require('../models/Message');

const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error. Failed to send message.' });
  }
};

module.exports = { sendMessage };

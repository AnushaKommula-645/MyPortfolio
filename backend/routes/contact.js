const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
require('dotenv').config();

router.post('/', async (req, res) => {
    const { name, mail, msg } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_APP_PASS,
        },
    });

    const mailOptions = {
        from: mail,
        to: process.env.MY_EMAIL,
        subject: `New message from ${name}`,
        text: msg,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Message sent successfully!');
    } catch (error) {
        res.status(500).send('Failed to send message');
    }
});

module.exports = router;

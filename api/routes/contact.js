const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const contactModel = require("../models/Contact");


router.post("/contact",async (req, res) => {
    try {
        const contact = new contactModel({
          name: req.body.name,
          email: req.body.email,
          subject : req.body.subject,
          message : req.body.message
        });
        const savedcontact = await contact.save();
        res.send(savedcontact);
    } catch (error) {
      res.status(400).status(error);
    }
  }
);

module.exports = router;

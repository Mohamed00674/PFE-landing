const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = {
  name: {
    type: "String",
    required: true,
    min :3
  },
  email: {
    type: "String",
    required: true
  },
  subject:{
    type : "String",
    required : true,
  },
  message : {
    type : "String",
    required : true
  }

};

const contactModel = mongoose.model("Contact", contactSchema , 'contact' );
module.exports = contactModel;

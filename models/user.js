const mongoose = require("mongoose");
const userSchema1 = mongoose.Schema({

},{timestamp:true,versionKry:false});

const user = mongoose.model("User",userSchema1);

module.exports = user;
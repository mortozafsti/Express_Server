const mongoose = require("mongoose");
const userSchema = mongoose.Schema({

},{timestamp:true,versionKry:false});

const user1 = mongoose.model("User",userSchema);

module.exports = user1;
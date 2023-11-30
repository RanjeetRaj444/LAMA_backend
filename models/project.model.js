const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	userId: {type:String},
	name: { type: String, require: true },
});

module.exports = projectModel = mongoose.model("Project", projectSchema);

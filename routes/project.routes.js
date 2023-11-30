const express = require("express");
const projectModel = require("../models/project.model");
const router = express.Router();
router.get("/project/:id", async (req, res) => {
	// /:id-- userId 
	try {
		const data = await projectModel.find({ userId: req.params.id });
		res.status(200).send({ data: data });
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
});
router.post("/add_project", async (req, res) => {
	// console.log(req.body);
	const project = {
		userId: req.body.userId || "",
		name: req.body.name || "",
	};
	try {
		const exist = await projectModel.findOne({ name: project.name });
		if (exist)
			res
				.status(200)
				.send({ project: exist, msg: "Project is already exist!😒" });
		const data = await projectModel.create(project);
		res.status(200).send({ data: data, msg: "Project stored in database😊" });
	} catch (err) {
		res.status(500).send({ error: err.message });
	}
});

module.exports = router;

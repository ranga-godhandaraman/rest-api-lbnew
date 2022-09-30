module.exports = app => {
  const datalbnew = require("../controllers/datalbnew.controller.js"); // datalbnew defined instead of datadm

  var router = require("express").Router();

  // Create 
  router.post("/", datalbnew.create);

  // Retrieve 
  router.get("/", datalbnew.findAll);

  // Retrieve all 
  router.get("/published", datalbnew.findAllPublished);

  // Retrieve with id
  router.get("/:id", datalbnew.findOne);

  // Update with id
  router.put("/:id", datalbnew.update);

  // Delete with id
  router.delete("/:id", datalbnew.delete);

  // Delete all 
  router.delete("/", datalbnew.deleteAll);

  app.use("/api/datalbnew", router);
};

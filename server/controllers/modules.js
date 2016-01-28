var express = require("express"),
    router = express.Router({mergeParams: true}),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Module = require("../models/module");

router.get("/:moduleId", getModuleByIdHandler);

router.post("/", function(req, res) {
  var module = new Module({ 
      name: req.body.name,
      description: req.body.description,
      _course: req.body.courseId,
      available: req.body.available
  });

  module.save(function(error) {
      if (error) throw error
      return res.json({ success: true, message: "Module is saved successfully"});
  });
});

router.put('/:moduleId', function(req, res) {
  Module
      .findByIdAndUpdate({_id: req.params.moduleId}, req.body, function(error, module) {
          if (error) throw error
          return res.json(module);
      });
});

router.delete('/:moduleId', function(req, res) {
  Module
      .findByIdAndRemove({_id: req.params.moduleId})
      .exec(function(error) {
          if (error) throw error
          return res.json({success: true, message: "Module is deleted successfully"});
      });
});

module.exports = router;

function getModuleByIdHandler(req, res, next) {
  console.log(req.params);
  Module
    .findOne({"_course": req.params.courseId, "_id": req.params.moduleId})
    .populate("_course", "_id")
    .populate("_resources")
    .exec(function(err, module) {
      if (err) next(err);
      return res.json(module);
    });
}
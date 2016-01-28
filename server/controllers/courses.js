var express = require("express"),
    router = express.Router(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Course = require("../models/course"),
    User = require("../models/user");

router.get("/", getAllCoursesHandler);

router.get("/:id", getCourseByIdHandler);

router.post("/", function(req, res, next) {
  var data = {
      area: req.body.area,
      description: req.body.description,
      duration: req.body.duration,
      groups: req.body.groups,
      isPublished: req.body.isPublished,
      minStudents: req.body.minStudents,
      name: req.body.name,
      publish_at: new Date(req.body.publish_at),
      schedule: req.body.schedule,
      startDate: new Date(req.body.startDate),
      unpublish_at: new Date(req.body.unpublish_at)
  };
  
  var course = new Course(data);
      course.save(function(err, course) {
          if (err) next(err)
          res.json({success: true, message: "Зміни збережено"});
      })
});
router.put("/:id", function(req, res, next) {
  var data = {
      area: req.body.area,
      description: req.body.description,
      duration: req.body.duration,
      groups: req.body.groups,
      isPublished: req.body.isPublished,
      minStudents: req.body.minStudents,
      name: req.body.name,
      publish_at: new Date(req.body.publish_at),
      schedule: req.body.schedule,
      startDate: new Date(req.body.startDate),
      unpublish_at: new Date(req.body.unpublish_at)
  };
  
  Course
      .findByIdAndUpdate(req.body._id, data)
      .exec(function(err, course) {
          if (err) next(err)
          res.json({success: true, message: "Зміни збережено"});
      })
});
router.post('/subscribe', function(req, res, next){
  Course.findByIdAndUpdate(req.body.id, {$inc: {"applicantsNumber": 1}}).exec(function(err, course) {
      if (err) next(err);
      User
          .findOneAndUpdate({_id: req.authUser._id}, {$push: {_courses: req.body.id}}, function(err, user){
              if (err){
                  next(err);
              } else {
                  return res.json({
                      success: true,
                      message: 'Ви успішно підписалися на курс "' + req.body.name + '"',
                  });
              }

          });
  });
  
});

router.delete('/subscribe', function(req, res, next){
  Course.findByIdAndUpdate(req.body.id, {$inc: {"applicantsNumber": -1}}).exec(function(err, course) {
      if (err) next(err);

      User
          .findOneAndUpdate({_id: req.authUser._id}, {$pull: {_courses: req.body.id} }, function(err, user){
              if (err){
                  next(err);
              } else {
                  return res.json({
                      success: true,
                      message: 'Ви успішно відписалися від курсу "' + req.body.name + '"',
                  });
              }

          });
  });
  
});
router.delete("/:id", function(req, res, next) {
  Course.findByIdAndRemove({_id: req.params.id}, function(err) {
      if (err) throw err;
      return res.json({success: true, message: "Course deleted successfully"});
  });
});

module.exports = router;

function getAllCoursesHandler(req, res, next) {
  Course.find({}, function (err, courses) {
    if (err) next(err);
    return res.json(courses);
  });
}

function getCourseByIdHandler(req, res, next) {
  Course
    .findOne({name: req.params.id})
    .populate("_modules")
    .exec(function (err, course) {
      if (err) next(err);
      return res.json(course);
    });
}
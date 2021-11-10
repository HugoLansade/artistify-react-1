/*------------------------------------------
// COMMENTS ROUTING
------------------------------------------*/



const express = require("express");
const router = new express.Router();
const Comment =require("../model/Comment");
// const commentModel = require("../model/Comment");

// router.get("/comments/:type/:id", async (req, res, next) => {
//   res.status(200).json({ msg: "@todo" })
// });

router.get("/comments/artists/:id", async (req, res, next) => {
  try {
    const findComments = await Comment.find().populate("author")
res.status(200).json(findComments);
  } catch (error) {
    console.error(error);
  }
});


router.post("/comments/artists/:id", async (req, res, next) => {
  try {
    const newComment = await Comment.create(req.body)
    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
  }
});

// router.post("/comments/:type/:id", async (req, res, next) => {
//   res.status(200).json({ msg: "@todo" })
// });

module.exports = router;

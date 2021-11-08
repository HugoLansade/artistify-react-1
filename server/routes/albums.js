/*------------------------------------------
// ALBUMS ROUTING
------------------------------------------*/

const express = require("express");
const router = new express.Router();
const albumModel = require("../model/Album");
const uploader = require("./../config/cloudinary");

router.get("/albums", async (req, res, next) => {
  try {
    const albums = await albumModel.find()
    .populate('label')
    .populate({
      path:'artist',
      populate : {
        path : 'style',
      }
    });
    console.log(albums)
    res.status(200).json(albums);
  } catch (err) {
    next(err);
  }
});

router.get("/albums/:id", async (req, res, next) => {
  try {
    const albums = await albumModel.findById(req.params.id)
    .populate('label')
    .populate({
      path:'artist',
      populate : {
        path : 'style',
      }
    });
    res.status(200).json(albums);
  } catch (err) {
    next(err);
  }
});

router.delete("/albums/:id", async (req, res, next) => {
  try {
    const deletedAlbum = await albumModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedAlbum);
  } catch (err) {
    next(err);
  }
})

module.exports = router;

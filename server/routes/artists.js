/*------------------------------------------
// ARTISTS ROUTING
------------------------------------------*/
const express = require("express");
const router = new express.Router();


const artistModel = require("../model/Artist");
const albumModel = require("../model/Album");

// router.get("/artists", (req, res) => {
//   res.send("@todo");
// });




// READ

router.get("/artists", async (req, res, next) => {
  try {
    const artists = await artistModel.find()
    .populate('style')
    res.status(200).json(artists);
  } catch (err) {
    next(err);
  }
});



// Route	VERB	HTTP status	Description
// /artists	GET	200 OR 500	get all artists
// /artists/:id	GET	200 OR 500	get one artist by id
// /artists/:id	DELETE	200 OR 500	delete one artist by id
// Should populate:

// style







router.get("/artists/:id", async (req, res, next) => {
  try {
    const artist = await artistModel.findById(req.params.id)
    .populate('style')
    res.status(200).json(artist);
  } catch (err) {
    next(err);
  }
});



// DELETE
router.delete("/artists/:id", async (req, res, next) => {
  try {
    const deletedArtist = await artistModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedArtist);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
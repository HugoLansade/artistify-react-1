/*------------------------------------------
// ARTISTS ROUTING
------------------------------------------*/
const express = require("express");
const router = new express.Router();


const artistModel = require("../model/Artist");
const albumModel = require("../model/Album");
const fileUploader = require("../config/cloudinary")

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

//CREATE the artists
// router.post("/", fileUploader.single("picture"), async (req, res, next) => {
//   try {
//     // get const variables from the req.body
//     const { name, description, isBand, styleName, color, wikiURL } = req.body;
//     // get the variable style from the select input (req.body)
//     let {style}  = req.body;
//     // Check if there is values to create a new style or use existing values from the select input
//     if (styleName !== "" && wikiURL !== "") {
//       const newStyle = await styleModel.create({
//         styleName,
//         wikiURL,
//         color,
//       });
//       //turn the new ID created in the DB into string
//       style = newStyle._id.toString();
//     }
//     //create the new artist with values from the inputs
//     const newArtist = await artistModel.create({name, description, isBand, style});
//     res.status(200).json(newArtist);
//   } catch (err) {
//     console.error(err);
//   }
// });

// DELETE
router.delete("/artists/:id", async (req, res, next) => {
  try {
    const deletedArtist = await artistModel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedArtist);
  } catch (err) {
    next(err);
  }
});

//UPDATE
router.patch("/artists/:id", fileUploader.single("picture"), async (req, res, next) => {
  console.log("here");
  console.log(req.body);
  console.log(req.file);
  
  try{
    const artistUpdated = await artistModel.findByIdAndUpdate(
      req.params.id, 
      {...req.body, picture: req.file.url},
      { new: true }
    );
    res.status(200).json(artistUpdated)
  } catch (err) {
    next(err);
  }
  }
);

module.exports = router;
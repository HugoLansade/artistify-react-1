/*------------------------------------------
// LABELS ROUTING
------------------------------------------*/

const express = require("express");
const router = new express.Router();
const labelModel = require("../model/Label");
const uploader = require("../config/cloudinary");


router.get("/labels", (req, res) => {
    res.send("@todo");
  });

  router.get("/labels", async (req, res) => {
    try {
      const labels = await styleModel.find()
      res.status(200).json(labels);
      
    } catch (error) {
      
    }
  });
  
  router.get("/labels/:id", async (req, res) => {
    try {
      const label = await styleModel.findById(req.params.id)
      res.status(200).json(label);
      
    } catch (error) {
      
    }
  });
  
  router.delete("/labels/:id", async (req, res) => {
    try {
      const label = await styleModel.findByIdAndDelete(req.params.id)
      res.status(200).json(label);
      
    } catch (error) {
      
    }
  });

module.exports = router;

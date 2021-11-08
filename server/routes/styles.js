/*------------------------------------------
// STYLES ROUTING
------------------------------------------*/
const express = require("express");
const router = new express.Router();
const styleModel = require("../model/Style");

router.get("/styles", async (req, res) => {
  try {
    const styles = await styleModel.find()
    res.status(200).json(styles);
    
  } catch (error) {
    
  }
});

router.get("/styles/id", async (req, res) => {
  try {
    const style = await styleModel.findById(req.params.id)
    res.status(200).json(style);
    
  } catch (error) {
    
  }
});

router.delete("/styles/id", async (req, res) => {
  try {
    const style = await styleModel.findByIdAndDelete(req.params.id)
    res.status(200).json(style);
    
  } catch (error) {
    
  }
});

module.exports = router;

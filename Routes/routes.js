/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const RetsiController = require("../Controllers/BlackpinkControllers")

router
  .get("/Pinks", RetsiController.getPinks)
  .get("/Pinks/:id", RetsiController.getPinks)
  .post("/newPinks", RetsiController.postNewPinks)
  .put("/PinksEdit/:id", RetsiController.editPinks)
  .delete("/RemovePinks/:id", RetsiController.deletePinks)

module.exports = router;
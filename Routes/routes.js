/* eslint-disable no-undef */
const express = require("express");
const router = express.Router();
const RetsiController = require("../Controllers/BlackpinkControllers")

router
  .get("/Characters", RetsiController.getCharacters)
  .get("/Character/:id", RetsiController.getCharacter)
  .post("/newCharacter", RetsiController.postNewCharacter)
  .put("/CharacterEdit/:id", RetsiController.editCharacter)
  .delete("/RemoveCharacter/:id", RetsiController.deleteCharacter)

module.exports = router;
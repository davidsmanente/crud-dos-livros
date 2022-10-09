const express = require("express");
const router = express.Router();
const livrosController = require("../controllers/LivrosController");

router.get("/", livrosController.index);
router.get("/:id", livrosController.show);

// // router.destroy("/:id", livrosController.delete);
// router.post("/", livrosController.store);




module.exports = router;
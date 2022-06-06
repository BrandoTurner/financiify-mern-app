const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is the root!"));
router.post("/stocks", controllers.createItem);
router.get("/stocks", controllers.getAllItems);
router.get("/stocks/:id", controllers.getItemById);
router.put("/stocks/:id", controllers.updateItem);
router.delete("/stocks/:id", controllers.deleteItem);

router.get("/overview", controllers.getAllOverview);
router.get("/overview/:id", controllers.getOverviewById);
router.put("/overview/:id", controllers.updateOverview);
module.exports = router;

const {Router} = require("express")
const {postReceta,getRecetas} = require("../controllers/recetas")
const {updateReceta, deleteReceta} = require("../controllers/services")






const router = Router()

router.get("/recetas",getRecetas)
router.post("/recetas",postReceta)
router.put("/receta/:id",updateReceta)
router.delete("/recetas/delete/:id",deleteReceta)


module.exports=router;

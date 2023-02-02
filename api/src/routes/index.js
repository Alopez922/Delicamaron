const {Router} = require("express")
const {postReceta,getRecetas} = require("../controllers/recetas")
const {updateReceta} = require("../controllers/services")






const router = Router()

router.get("/recetas",getRecetas)
router.post("/recetas",postReceta)
router.put("/receta/:id",updateReceta)


module.exports=router;

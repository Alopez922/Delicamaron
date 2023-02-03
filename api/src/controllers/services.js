const {Receta,Dieta}=require("../db")
const axios = require("axios")


const getAllInfo = async()=>{
    try{
        const recetaInfo = await getDbInfo()
        return recetaInfo
    }catch(e){
        return console.log(e)
    }
}

const getDbInfo = async()=>{
    try{
        const recetaDb = await Receta.findAll({
            include:{
                model:Dieta,
                attributes:["nombre"],
            }
        })

        const recetaMap = recetaDb.map((receta)=>{
            return{
                id:receta.dataValues.id,
                nombre:receta.dataValues.nombre,
                descripcion:receta.dataValues.descripcion,
                imagen:receta.dataValues.imagen,
                precio:receta.dataValues.precio
            }
        })
        return recetaMap
    }catch(e){
        return console.log(e)
    }
}

const recetaToDb = async(data)=>{
    try{
        const {nombre,descripcion,imagen,precio} = data
        const [receta,created] = await Receta.findOrCreate({
            where:{nombre},
            defaults:{
                descripcion,
                imagen,
                precio
            }
        })

        if(created){
            const foundDietas = await Dieta.findAll({
                where:{
                    nombre:"" //esto se debe arreglar lo del nombre
                }
            })
            await receta.addDieta(foundDietas)
            return receta
        }
    }catch(e){
        return console.log(e)
    }
}

const updateReceta = async(req,res,next)=>{
    const id = req.params.id;
    const recetas = req.body
    return Receta.update(recetas,{
        where:{
            id,
        }
    })
    .then((updateReceta)=>{
        res.send(updateReceta)
    })
    .catch((error)=>next(error))
}

module.exports={
    recetaToDb,
    getDbInfo,
    getAllInfo,
    updateReceta
}
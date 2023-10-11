import { Types } from "mongoose";
const ObjectId =  Types.ObjectId;

const idValidation = (req,res,next)=>{
    const {id} = req.params;
    if(isValidMongoDBUUID(id)) return next();
    const message='ID invalido en consulta por parametro';
    res.status(400).json({message: message});
}
function isValidMongoDBUUID(id){
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;       
        return false;
    }
    return false;
}
export {idValidation}
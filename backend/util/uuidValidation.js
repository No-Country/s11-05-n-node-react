import { Types } from "mongoose";
const ObjectId =  Types.ObjectId;

const uuidValidation = (id)=>{
    if(isValidMongoDBUUID(id)) return;
    throw new Error('ID invalido en consulta por parametro');
}
function isValidMongoDBUUID(id){
    if(ObjectId.isValid(id)){
        if((String)(new ObjectId(id)) === id)
            return true;       
        return false;
    }
    return false;
}
export {uuidValidation}
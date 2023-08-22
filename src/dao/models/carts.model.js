const mongoose = reqired('mongoose');

const collectionName = 'carts';

const stringTypeSchemaUniqueRequired = {
    type: String,
    unique: true,
    required: true
};

const cartsSchema = new mongoose.Schema({
    name: stringTypeSchemaUniqueRequired,
    products: {
        type:Array,
        default:[]
    },
    total: Number
})


//Definimos el modelo
export const cartsModel = mongoose.model(collectionName, cartsSchema);
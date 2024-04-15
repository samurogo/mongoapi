const mongoose = require('mongoose');

const apartadoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    marca: String,
    talla: String,
    descripcion: String,
    userId: {
        type: String,
        ref: 'User'
    },
    productId: {
        type: String,
        ref: 'Product'
    }
});

module.exports = mongoose.model('Apartado', apartadoSchema);

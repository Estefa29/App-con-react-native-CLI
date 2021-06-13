const {model,Schema}=require('mongoose');

const RegistroEsqueleto=Schema({

    nombre: {
        type: String,
        required:[true, 'El nombre es necesario para el registro']
    },
    email:{
        type: String,
        required:[true, 'El  email es necesario para el registro']
    },
    pais:{
        type: String,
        required: [true, 'El pais es necesario para el registro']
    },
    ciudad:{
        type: String,
        required: [true, 'La ciudad  es necesaria para el registro']
    },
    contraseña:{
        type: String,
        required: [true, 'La  contraseña es necesario para el registro']
    },
    rol:{
        type: String,
        required: [true, 'el rol  es necesario para el registro ']
    },
    
});

module.exports=model('Registro',RegistroEsqueleto);
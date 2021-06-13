const { body, validationResult } = require('express-validator');

const { request,response }=require('express');


function validarPeticion1(peticion=request,respuesta=response, next){

    let errores=validationResult(peticion);

    if(!errores.isEmpty()){

        return (respuesta.status(400).json(errores))

    }
    next();

}
// ---------------------------------------------
function validarPeticion2(peticion=request,respuesta=response, next){

    let errores=validationResult(peticion);

    if(!errores.isEmpty()){

        return (respuesta.status(400).json(errores))

    }
    next();

}
// --------------------------------------------------------------------
function validarPeticion3(peticion=request,respuesta=response, next){

    let errores=validationResult(peticion);

    if(!errores.isEmpty()){

        return (respuesta.status(400).json(errores))

    }
    next();

}

module.exports={validarPeticion1,validarPeticion2,validarPeticion3}
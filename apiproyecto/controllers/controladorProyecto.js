
const { request,response }=require('express');
const Registromodelo=require('../models/Registromodelo.js');
const Apartamentosmodelo=require('../models/Apartamentosmodelo.js');
const Reservasmodelo=require('../models/Reservasmodelo.js');

async function consultarRegistro(peticion=request,respuesta=response){
    let id=peticion.params.id;
    let datosRegistro=await Registromodelo.findById(id);
    
    respuesta.json({
        estado:true,
        mensaje:datosRegistro
    });

    
}
async function consultarRegistro1(peticion=request,respuesta=response){

    
    let datosRegistro1=await Registromodelo.find();
    respuesta.json({
        estado:true,
        mensaje:datosRegistro1
    });

    
}

async function crearRegistro(peticion=request,respuesta=response){

    let datosRegistro=peticion.body;

    let Registro =new Registromodelo(datosRegistro);
    
    await Registro.save();

    respuesta.json({
        estado:true,
        mensaje:'Registro agregado con exito',
        datos:Registro
    });

}

async function editarRegistro(peticion=request,respuesta=response){

    let id=peticion.params.id;
    let datosRegistro=peticion.body;

    await Registromodelo.findByIdAndUpdate(id,datosRegistro);

    respuesta.json({
        estado:true,
        mensaje:'Registro actualizado con exito'
    });

}

async function eliminarRegistro(peticion=request,respuesta=response){

    let id=peticion.params.id;
    await Registromodelo.findByIdAndDelete(id);

    respuesta.json({
        estado:true,
        mensaje:'Registro eliminado con exito'
    });

}
// ----------------------------------------------------------------
async function consultarApartamento(peticion=request,respuesta=response){
    let id=peticion.params.id;
    let datosApartamento=await Apartamentosmodelo.findById(id);
    
    respuesta.json({
        estado:true,
        mensaje:datosApartamento
    });

    
}
async function consultarApartamento1(peticion=request,respuesta=response){

    
    let datosApartamento1=await Apartamentosmodelo.find();
    respuesta.json({
        estado:true,
        mensaje:datosApartamento1
    });

    
}

async function crearApartamento(peticion=request,respuesta=response){

    let datosApartamentos=peticion.body;

    let Apartamentos=new Apartamentosmodelo(datosApartamentos);
    await Apartamentos.save();

    respuesta.json({
        estado:true,
        mensaje:'Apartamento agregado con exito',
        datos:Apartamentos
    });

}

async function editarApartamento(peticion=request,respuesta=response){

    let id=peticion.params.id;
    let datosApartamentos=peticion.body;

    await Apartamentosmodelo.findByIdAndUpdate(id,datosApartamentos);

    respuesta.json({
        estado:true,
        mensaje:'Apartamento actualizado con exito'
    });

}

async function eliminarApartamento(peticion=request,respuesta=response){

    let id=peticion.params.id;
    await Apartamentosmodelo.findByIdAndDelete(id);

    respuesta.json({
        estado:true,
        mensaje:'Apartamento eliminado con exito'
    });

}
// ------------------------------------------------------------------
async function consultarReserva(peticion=request,respuesta=response){
    let id=peticion.params.id;
    let datosReserva=await Reservasmodelo.findById(id);
    
    respuesta.json({
        estado:true,
        mensaje:datosReserva
    });

    
}
async function consultarReserva1(peticion=request,respuesta=response){

    
    let datosReserva1=await Reservasmodelo.find();
    respuesta.json({
        estado:true,
        mensaje:datosReserva1
    });

    
}

async function crearReserva(peticion=request,respuesta=response){

    let datosReserva=peticion.body;

    let Reservas=new Reservasmodelo(datosReserva);
    await Reservas.save();

    respuesta.json({
        estado:true,
        mensaje:'Reserva agregada con exito',
        datos:Reservas
    });

}

async function editarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    let datosReserva=peticion.body;

    await Reservasmodelo.findByIdAndUpdate(id,datosReserva);

    respuesta.json({
        estado:true,
        mensaje:'Reserva actualizada con exito'
    });

}

async function eliminarReserva(peticion=request,respuesta=response){

    let id=peticion.params.id;
    await Reservasmodelo.findByIdAndDelete(id);

    respuesta.json({
        estado:true,
        mensaje:'Reserva eliminada con exito'
    });

}




module.exports={
    consultarRegistro,
    consultarRegistro1,
    crearRegistro,
    editarRegistro,
    eliminarRegistro,
    // ---------------------
    consultarApartamento,
    consultarApartamento1,
    crearApartamento,
    editarApartamento,
    eliminarApartamento,
    // -------------------
    consultarReserva,
    consultarReserva1,
    crearReserva,
    editarReserva,
    eliminarReserva
}

const { Router }= require('express');


const { consultarRegistro}= require('../controllers/controladorProyecto.js');
const { consultarRegistro1 }= require('../controllers/controladorProyecto.js');
const { crearRegistro }= require('../controllers/controladorProyecto.js');
const { editarRegistro }= require('../controllers/controladorProyecto.js');
const { eliminarRegistro}= require('../controllers/controladorProyecto.js');
// ---------------------------------------------------------------------------
const { consultarApartamento }= require('../controllers/controladorProyecto.js');
const { consultarApartamento1 }= require('../controllers/controladorProyecto.js');
const { crearApartamento }= require('../controllers/controladorProyecto.js');
const { editarApartamento }= require('../controllers/controladorProyecto.js');
const { eliminarApartamento}= require('../controllers/controladorProyecto.js');
// ---------------------------------------------------------------------------------------
const { consultarReserva }= require('../controllers/controladorProyecto.js');
const { consultarReserva1 }= require('../controllers/controladorProyecto.js');
const { crearReserva }= require('../controllers/controladorProyecto.js');
const { editarReserva }= require('../controllers/controladorProyecto.js');
const { eliminarReserva}= require('../controllers/controladorProyecto.js');
// -----------------------------------------------------------------------------
const {validarPeticion1}=require('../validations/validaciones.js');
const {validarPeticion2}=require('../validations/validaciones.js');
const {validarPeticion3}=require('../validations/validaciones.js');


const {check}=require('express-validator');


let validacionesApartamento=Array(

    check('ciudad',"este campo es obligatorio").not().isEmpty(),
    check('pais',"este campo es obligatorio").not().isEmpty(),
    check('direccion',"este campo es obligatorio").not().isEmpty(),
    check('numeroHabitaciones',"este campo es obligatorio").not().isEmpty(),
    check('imagen',"este campo es obligatorio").not().isEmpty(),
    check('valorNoche',"este campo es obligatorio").not().isEmpty(),
    check('reseña',"este campo es obligatorio").not().isEmpty(),
    
    validarPeticion1

);
// -------------------------------------------------------------------------------
let validacionesRegistro=Array(

    check('nombre',"este campo es obligatorio").not().isEmpty(),
    check('email',"este campo es obligatorio").not().isEmpty(),
    check('pais',"este campo es obligatorio").not().isEmpty(),
    check('ciudad',"este campo es obligatorio").not().isEmpty(),
    check('contraseña',"este campo es obligatorio").not().isEmpty(),
    check('rol',"este campo es obligatorio").not().isEmpty(),
    
    
    validarPeticion2

);
// -------------------------------------------------------------------------------------
let validacionesReservas=Array(

    check('nombre',"este campo es obligatorio").not().isEmpty(),
    check('identificacion',"este campo es obligatorio").not().isEmpty(),
    check('telefono',"este campo es obligatorio").not().isEmpty(),
    check('fechaInicioReserva',"este campo es obligatorio").not().isEmpty(),
    check('fechaFinReserva',"este campo es obligatorio").not().isEmpty(),
    check('numeroPersonas',"este campo es obligatorio").not().isEmpty(),
    check('tipoPago',"este campo es obligatorio").not().isEmpty(),
    
    validarPeticion3
    );
// ---------------------------------------------------------------------------------------

const rutas=Router();


rutas.get('/apartamentos',consultarApartamento1);
rutas.get('/apartamentos/:id',consultarApartamento);
rutas.post('/apartamento/nuevo',validacionesApartamento,crearApartamento); 
rutas.put('/apartamento/editar/:id',editarApartamento);
rutas.delete('/apartamento/eliminar/:id',eliminarApartamento)
// -----------------------------------------------------------

rutas.get('/registros',consultarRegistro1);
rutas.get('/registros/:id',consultarRegistro);
rutas.post('/registro/nuevo',validacionesRegistro,crearRegistro); 
rutas.put('/registro/editar/:id',editarRegistro);
rutas.delete('/registro/eliminar/:id',eliminarRegistro)
// -------------------------------------------------------
rutas.get('/reservas',consultarReserva1);
rutas.get('/reservas/:id',consultarReserva);
rutas.post('/reserva/nueva',validacionesReservas,crearReserva); 
rutas.put('/reserva/editar/:id',editarReserva);
rutas.delete('/reserva/eliminar/:id',eliminarReserva)



module.exports=rutas;
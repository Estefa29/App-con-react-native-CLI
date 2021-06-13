const {model,Schema}=require('mongoose');

const ApartamentoEsqueleto=Schema({
    
    ciudad: {
        type: String,
        required:[true, 'Por favor agregar una ciudad']
    },
    pais:{
        type: String,
        required:[true, 'Por favor agregar un país']
    },
    direccion:{
        type: String,
        required: [true, 'Por favor agregar una dirección']
    },
    numeroHabitaciones:{
        type: Number,
        required: [true, 'Por favor agregar un numero de habitaciones']
    },
    imagen:{
        type: String,
        required: [true, 'Por favor agregar una imagen']
    },
    valorNoche:{
        type: Number,
        required: [true, 'Por favor agregar el valor por noche']
    },
    reseña:{
        type: String,
        required: [true, 'Por favor agregar la reseña']
    }
});

module.exports=model('Apartamento',ApartamentoEsqueleto);
const {model,Schema}=require('mongoose');

const ReservaEsqueleto=Schema({

    nombre: {
        type: String,
        required:[true, 'El nombre es necesario para esta reserva']
    },
    identificacion:{
        type: Number,
        required:[true, 'la identificacion es necesaria para la reserva']
    },
    telefono:{
        type: Number,
        required: [true, 'El telefono es necesario para la reserva']
    },
    fechaInicioReserva:{
        type: String,
        required: [true, 'La Fecha se requiere']
    },
    fechaFinReserva:{
        type: String,
        required: [true, 'La Fecha se requiere']
    },
    numeroPersonas:{
        type: Number,
        required: [true, 'el numero de personas se requiere']
    },
    tipoPago:{
        type: String,
        required: [true, 'el numero de personas se requiere']
    },



});

module.exports=model('Reserva',ReservaEsqueleto);
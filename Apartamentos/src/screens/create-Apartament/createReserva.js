import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../shared/colors/Colors.js';
import ButtonStyles from '../../shared/styles/ButtonStyles.js';
function CreateReserva({navigation}) {
    // function CreateReserva() {
    const [nombre, setNombre] = useState("");
    const [identificacion, setIdentificacion] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fechaInicioReserva, setFechaInicioReserva] = useState("");
    const [fechaFinReserva, setFechaFinReserva] = useState("");
    const [numeroPersonas, setNumeroPersonas] = useState("");
    const [tipoPago, setTipoPago] = useState("");
    
    const createReserva = async () => {
        if(nombre === ""||identificacion=== "" || telefono=== ""||fechaInicioReserva=== ""|| fechaFinReserva=== ""|| numeroPersonas === "" || tipoPago === ""){
            Alert.alert("Todos los campos debe estar llenos");
        }
        else{
        try {
            const response = await fetch('https://apiapartamentos.herokuapp.com/reserva/nueva', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: nombre,
                    identificacion :identificacion ,
                    telefono : telefono,
                    fechaInicioReserva : fechaInicioReserva,
                    fechaFinReserva : fechaFinReserva,
                    numeroPersonas : numeroPersonas,
                    tipoPago  : tipoPago  
                    
                    
                }),
            });
            const json = await response.json();
            Alert.alert("¡Su reserva fue exitosa!, gracias por preferirnos... ");
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Error:', error.message)
        }
    }
    }
    return (
    <View style={styles.container}>
            <TextInput inlineImageLeft="outline_person_black_24" inlineImagePadding={15} defaultValue={nombre} placeholder="Nombre completo" style={styles.textInput}  onChangeText={(text) => setNombre(text)}></TextInput>
            
            <TextInput  defaultValue={identificacion } inlineImageLeft="outline_badge_black_24" inlineImagePadding={15} placeholder="Identificación " style={styles.textInput} onChangeText={(text) => setIdentificacion(text)}></TextInput>
            
            <TextInput defaultValue={telefono}  inlineImageLeft="outline_phone_black_24" inlineImagePadding={15} placeholder="Telefono" style={styles.textInput} onChangeText={(text) => setTelefono(text)}></TextInput>
            
            <TextInput defaultValue={fechaInicioReserva}  inlineImageLeft="outline_today_black_24" inlineImagePadding={15} placeholder="Fecha de inicio de la reservación" style={styles.textInput} onChangeText={(text) => setFechaInicioReserva(text)}></TextInput>
        
            <TextInput defaultValue={fechaFinReserva}  inlineImageLeft="outline_insert_invitation_black_24" inlineImagePadding={15}  placeholder="Fecha final de la Reservación" style={styles.textInput} onChangeText={(text) => setFechaFinReserva(text)}></TextInput>
    
            <TextInput defaultValue={numeroPersonas}  inlineImageLeft="outline_supervisor_account_black_24" inlineImagePadding={15} placeholder="Numero de personas" style={styles.textInput} onChangeText={(text) => setNumeroPersonas(text)}></TextInput>

            <TextInput defaultValue={tipoPago}  inlineImageLeft="outline_local_atm_black_24" inlineImagePadding={15} placeholder="Tipo de pago" style={styles.textInput} onChangeText={(text) => setTipoPago(text)}></TextInput>
            <TouchableOpacity onPress={createReserva}>
            <LinearGradient colors={[Colors.primary, Colors.secondary]} style={ButtonStyles.large}>
                    <Text style={styles.textReservaButton}>Reservar</Text>
                </LinearGradient>
            </TouchableOpacity>
        
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: "white",
        width: Dimensions.get("screen").width * 0.85,
        borderRadius: 50,
        paddingLeft: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        },
    
    textReservaButton: {
        color: 'white',
        fontSize: 16
    }
});

export default CreateReserva;
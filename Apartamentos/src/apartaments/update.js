import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../src/shared/colors/Colors';
import ButtonStyles from '../shared/styles/ButtonStyles';
function update({route,navigation}) {
    const {ciudadU, paisU, direccionU, numeroHabitacionesU, valorNocheU,reseñaU,imagenU,_idU} = route.params;
    // function update() {
    const [ciudad, setCiudad] = useState(ciudadU);
    const [pais, setPais] = useState(paisU);
    const [direccion, setDireccion] = useState(direccionU);
    const [numeroHabitaciones, setNumeroHabitaciones] = useState(numeroHabitacionesU);
    const [imagen, setImagen] = useState(imagenU);
    const [valorNoche, setValorNoche] = useState(valorNocheU);
    const [reseña , setReseña ] = useState(reseñaU);
    
    
    const update = async () => {
        if(ciudad === ""||pais === "" || direccion === ""|| numeroHabitaciones === ""|| imagen=== ""|| valorNoche === ""|| reseña === ""){
            Alert.alert("Todos los campos debe estar llenos");
        }
        else{
        try {
//             const response = await fetch('https://apiapartamentos.herokuapp.com/apartamento/editar/60bf92a5f262550015d909bb', {
                 const response = await fetch('https://apiapartamentos.herokuapp.com/apartamento/editar/${_idU}', {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ciudad : ciudad,
                    pais : pais,
                    direccion : direccion,
                    numeroHabitaciones : numeroHabitaciones , 
                    imagen : imagen,
                    valorNoche : valorNoche,
                    reseña : reseña  ,
                    
                    
                }),
            });
            const json = await response.json();
            Alert.alert("Apartamento Actualizado correctamente");
            navigation.navigate('ListApartamentsScreen');
        } catch (error) {
            Alert.alert('Error:', error.message)
        }
    }
    }
    return (
    <View style={styles.container}>
            <TextInput  inlineImageLeft="outline_location_on_black_24" inlineImagePadding={15} defaultValue={ciudad} style={styles.textInput} placeholder="Ciudad" onChangeText={text =>setCiudad(text)}/>
            <TextInput  inlineImageLeft="outline_public_black_24" inlineImagePadding={15}  defaultValue={pais} style={styles.textInput} placeholder="País" onChangeText={text => setPais(text)}/>
            <TextInput  inlineImageLeft="outline_directions_black_24" defaultValue={direccion} style={styles.textInput} placeholder="Dirección" onChangeText={text =>  setDireccion(text)}/>
            <TextInput  inlineImageLeft="outline_exposure_plus_2_24"  defaultValue={numeroHabitaciones} style={styles.textInput} placeholder="Numero de habitaciones" onChangeText={text => setNumeroHabitaciones(text)}/>
            <TextInput  inlineImageLeft="outline_image_black_24" inlineImagePadding={15}  defaultValue={imagen} style={styles.textInput} placeholder="Imagen URL" onChangeText={text => setImagen(text)}/>
            <TextInput  inlineImageLeft="outline_attach_money_24" inlineImagePadding={15} defaultValue={valorNoche} style={styles.textInput} placeholder="Valor noche" onChangeText={text => setValorNoche(text)}/>
            <TextInput  inlineImageLeft="outline_supervisor_account_black_24" inlineImagePadding={15} defaultValue={reseña} style={styles.textInput} placeholder="Reseña" onChangeText={text => setReseña(text)}/>
            <TouchableOpacity onPress={update}  >
            <LinearGradient colors={[Colors.primary, Colors.secondary]} style={ButtonStyles.large}>
                    <Text style={styles.textApartamentButton}>Actualizar</Text>
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
    
    textApartamentButton: {
        color: 'white',
        fontSize: 16
    }
});

export default update;

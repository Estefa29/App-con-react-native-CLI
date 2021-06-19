import React from 'react';
import {} from 'react-native';
import { View, Text, Image, Button, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react/cjs/react.development';
import apartamentosStyles from './apartamentsStyles';
const apartamentosScreen = ({route,navigation}) => {
    const {ciudad, pais, direccion, numeroHabitaciones, valorNoche,reseña,imagen,_id} = route.params.apartament;
    
    const editapartaments =  (apartament)=>{
        navigation.navigate("Actualizar",{
            apartament:apartament
        });
    }
    const deleteapartaments = async () => {
        try {
//             const response = await fetch('https://apiapartamentos.herokuapp.com/apartamento/eliminar/60bf98f6f262550015d909c2', {
            const response = await fetch('https://apiapartamentos.herokuapp.com/apartamento/eliminar/${_id}', {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id:_id,
                    
                })
            
            });
            const jsonResponse = await response.json();
            console.log(jsonResponse)
        } catch (e) {
            Alert.alert("Hubo un error inesperado, vuelva a intentarlo más tarde");
        }
    }
    return (
        <View style={apartamentosStyles.container}>
            <View style={apartamentosStyles.imageContainer}>
                <Image source={{ uri: imagen }} borderTopLeftRadius={5}
                    style={{ flex: 1, width: 150, height: 150 }} />
            </View>
            <View style={apartamentosStyles.apartamentosInfoContainer}>
                <Text>Id: {_id}</Text>
                <Text>Ciudad: {ciudad}</Text>
                <Text>Pais: {pais}</Text>
                <Text>Dirección: {direccion}</Text>
                <Text>Numero habitaciones: {numeroHabitaciones}</Text>
                <Text>Valor: {valorNoche}</Text>
                <Text>Reseña: {reseña}</Text>
                <View style={apartamentosStyles.buttonsContainer}>
                    <TouchableOpacity style={apartamentosStyles.buttoStyle} onPress={() => editapartaments()}>
                        <Text>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={apartamentosStyles.buttoStyle} onPress={() => deleteapartaments()}>
                        <Text>Eliminar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={apartamentosStyles.buttoStyle} onPress={() =>  navigation.navigate('Crea_Apartamento')}>
                        <Text>crear </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default apartamentosScreen;

import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ModalDropdown from 'react-native-modal-dropdown';
import Colors from '../../../shared/colors/Colors.js';
import ButtonStyles from '../../../shared/styles/ButtonStyles.js';


function CreateRegister({navigation}) {
    
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [pais, setPais] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [rol, setRol] = useState("");
    
    const createRegister = async () => {
        if(nombre === ""||email=== "" || pais=== ""|| ciudad=== ""|| contraseña=== "" || rol=== "Anfitrión"&&"Invitado"){
            Alert.alert("Todos los campos debe estar llenos");
        }
        else{
        try {
            const response = await fetch('https://apiapartamentos.herokuapp.com/registro/nuevo', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: nombre,
                    email : email,
                    pais : pais,
                    ciudad : ciudad,
                    contraseña : contraseña,
                    rol : "Invitado"&&"Anfitrión"
                    
                    
                }),
            });
            const json = await response.json();
            Alert.alert("Registro creado correctamente"); 
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert('Error:', error.message)
        }
    }
    }
    
    return (
    <View style={styles.container}>
            <TextInput inlineImageLeft="outline_person_black_24" inlineImagePadding={15} defaultValue={nombre} placeholder="Nombre completo" style={styles.textInput}  onChangeText={(text) => setNombre(text)}></TextInput>
            
            <TextInput  defaultValue={email} inlineImageLeft="outline_email_black_24" inlineImagePadding={15} placeholder="Email" style={styles.textInput} onChangeText={(text) => setEmail(text)}></TextInput>
            
            <TextInput defaultValue={pais}  inlineImageLeft="outline_public_black_24" inlineImagePadding={15} placeholder="País" style={styles.textInput} onChangeText={(text) => setPais(text)}></TextInput>
            
            <TextInput defaultValue={ciudad}  inlineImageLeft="outline_location_on_black_24" inlineImagePadding={15} placeholder="Ciudad" style={styles.textInput} onChangeText={(text) => setCiudad(text)}></TextInput>
        
            <TextInput defaultValue={contraseña}  inlineImageLeft="outline_password_black_24" inlineImagePadding={15}  placeholder="Contraseña" style={styles.textInput} onChangeText={(text) => setContraseña(text)}></TextInput>
        
            <TextInput placeholder="ELEGIR ROL" ></TextInput>
            
            <ModalDropdown  options={['Invitado','Anfitrión']} style={styles.containerRol} onChangeText={(options) => setRol(options)} />
            
            

            <TouchableOpacity onPress={createRegister}  >
            <LinearGradient colors={[Colors.primary, Colors.secondary]} style={ButtonStyles.large}>
                    <Text style={styles.textRegisterButton}>Registrar</Text>
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
    
    textRegisterButton: {
        color: 'white',
        fontSize: 16
    },
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
    containerRol: {
        width:150,
        height:25,
        backgroundColor: "white",
        borderRadius: 30,
        paddingLeft: 20,
        marginTop: 20,
        
        },
});

export default CreateRegister;
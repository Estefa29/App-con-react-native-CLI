
import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TextInput, TouchableHighlight, Alert, TouchableOpacity ,Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginStyles from './LoginStyles';
import Colors from '../../../shared/colors/Colors';
import ButtonStyles from '../../../shared/styles/ButtonStyles';

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    
        const validateLogin = () => {
            if(email === "" || contraseña === ""){
                Alert.alert("Todos los campos debe estar llenos");
            }
            else{
                
                setEmail("");
                setContraseña("");
                navigation.navigate("inicio");
            }
        }
        
//     const sendUser = async ()=>{
//         if(email === "" || contraseña=== ""){
//             Alert.alert("Todos los campos debe estar llenos");
//         }
//         else{
//         const response = await fetch('https://apiapartamentos.herokuapp.com/registros', {
//             method: 'GET',
//             headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             email: email,
//             contraseña: contraseña
//         })
//         });
//         const responseJson = await response.json();
//         console.log(responseJson);
//         navigation.navigate('Crea_Apartamento');
//     }
// }
// const getUser = async () => {
//     const response = await fetch("https://apiapartamentos.herokuapp.com/registros");
//     const responseJson = await response.json()
//     console.log(responseJson);
//     navigation.navigate("ListApartamentsScreen",{
//         nombre: nombre
//     });
// }

    
    return <View style={LoginStyles.container}>
                <StatusBar backgroundColor={Colors.primary}></StatusBar>
                <LinearGradient colors={[Colors.primary, Colors.secondary]} style={LoginStyles.logoContainer}>
                    <Image source={require('./img/account.png')} style={LoginStyles.logo}></Image>
                    <Text style={LoginStyles.title}>Bienvenido</Text>
                </LinearGradient>
                <View style={LoginStyles.inputDataContainer}>
                <TextInput defaultValue={email} inlineImageLeft="outline_email_black_24" inlineImagePadding={15} keyboardType="email-address" placeholder="Email" style={LoginStyles.inputData} onChangeText={(text)=>{setEmail(text)}}></TextInput>
                <TextInput defaultValue={contraseña} inlineImageLeft="outline_password_black_24" inlineImagePadding={15} secureTextEntry={true} placeholder="contraseña" style={LoginStyles.inputData} onChangeText={(text)=>{setContraseña(text)}}></TextInput>
                    <TouchableOpacity onPress={()=>validateLogin()}>
                        <LinearGradient colors={[Colors.primary, Colors.secondary]} style={ButtonStyles.large}>
                            <Text style={LoginStyles.textButton}>Login</Text>
                        
                        </LinearGradient>
                        <View style={LoginStyles.ButtonRegister}>
                    <Button color="#1ed47f" title="Regístrate aqui" onPress={() => navigation.navigate('Registrate')} />
                    </View>
                    
                    
                </TouchableOpacity>
            </View>
    </View>
}
export default LoginScreen;
import React from 'react';
import {StyleSheet, View, Text , Button, Dimensions} from 'react-native';

function init({navigation}) {
    return<View>

<Text style={styles.text}>¡BIENVENIDO!</Text>
<Text style={styles.text2}>Escoge tu opción...</Text>
<Text style={styles.text2}>¿quieres reservar? vamos..</Text>

<Button color="#1ed47f" title="invitado" onPress={() => navigation.navigate('Home')} />
<Text style={styles.text2}>Si eres Anfitrión puedes ofertar a tu gusto</Text>

<Button color="#1ed47f" title="anfitrión" onPress={() => navigation.navigate('ListApartamentsScreen')} />
</View>
}

const styles = StyleSheet.create({
    
    text: {
        
        width: Dimensions.get("screen").width * 0.85,
        borderRadius: 50,
        paddingLeft: 20,
        marginTop: 20,
        fontSize:38
        },
        text2 :{
        
            width: Dimensions.get("screen").width * 0.85,
            borderRadius: 50,
            paddingLeft: 20,
            marginTop: 20,
            fontSize:20
            },
        
    
    
});


export default init;
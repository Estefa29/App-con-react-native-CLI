
import React from 'react';
import { View, Text, Image } from 'react-native';
import CardComponentStyles from './CardComponentStyles';
  // console.log(props);
const CardComponent = (props) => {
  const {data} = props;
  
    return <View style={CardComponentStyles.container}>
  
    <View style={CardComponentStyles.containerImage}>
      <Image source={{ uri: data.imagen}} borderTopLeftRadius={5} 
    style={{ flex: 1, width: 150, height: 150 }} /> 
    </View> 
    <View style={CardComponentStyles.containerUsermensaje}>
  <Text>{data.ciudad}</Text>
  <Text>{data.pais}</Text>
  <Text>{data.direccion}</Text>
      <Text>{data.numeroHabitaciones}</Text>
      <Text>{data.valorNoche}</Text>
      <Text>{data.reseña}</Text>
  </View>
  
  </View> 
}

export default CardComponent;

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import ListApartamentsStyles from './ListApartamentsStyles.js';
import ApartamentsService from '../services/ApartamentsService.js';
import CardComponent from './components/CardComponent.js'
const ListApartamentsScreen = ({route,navigation}) => {
    console.log(route.params);
    const [apartaments, setApartaments] = useState([]);
    

// const ListApartamentsScreen = ({navigation}) => {
//     const [apartaments, setApartaments] = useState([]);
//     const [users, setUsers] = useState();
    const getApartaments = async () => {
        const response = await ApartamentsService.getApartaments();
        console.log(response);
        setApartaments(response);
    }
    // const apartamentInfo = (ciudad)=>{
    //     Alert.alert(ciudad);
    //     }
    const apartamentInfo = (apartament)=>{
        navigation.navigate("Apartamento",{
            apartament:apartament
        });
        // navigation.navigate('Apartamento')
    }
    
    
    useEffect(() => {
        getApartaments();
    }, []);
    
        return<View>
        <FlatList 
        data={apartaments} 
        renderItem={({item})=><TouchableOpacity onPress={()=>apartamentInfo(item)}>
        <CardComponent data={item} name="hola"></CardComponent>
    </TouchableOpacity>}></FlatList>
        
    {/* apartamentInfo(item.ciudad) */}
        
    </View>
}

export default ListApartamentsScreen;

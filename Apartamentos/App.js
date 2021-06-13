import React from 'react';
import LoginScreen from './src/auth/screens/login/LoginScreen.js';
import CreateRegister from './src/auth/screens/Register/createRegister.js';
import init from './src/auth/screens/login/init.js';
import CreateApartament from './src/screens/create-Apartament/createApartament.js';
import apartamentsScreen from './src/apartaments/apartament/apartamentsScreen.js';
import HomeScreen from './src/invitado/views/screens/HomeScreen.js';
import DetailsScreen from './src/invitado/views/screens/DetailsScreen.js';
import CreateReserva from './src/screens/create-Apartament/createReserva.js';
import ListApartamentsScreen from './src/apartaments/list-apartament/ListApartamentsScreen.js';
// import apartamentsScreen from './src/apartaments/apartament/apartamentsScreen.js';
import update from './src/apartaments/update.js';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} /> 
      <Stack.Screen name="Registrate" component={CreateRegister} />
      <Stack.Screen name="inicio" component={init} />
      <Stack.Screen name="Crea_Apartamento" component={CreateApartament} />
      <Stack.Screen name="Reserva" component={CreateReserva} />
    <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detalles" component={DetailsScreen} /> 
        <Stack.Screen name="Registro" component={CreateRegister} />  
        <Stack.Screen name="ListApartamentsScreen" component={ListApartamentsScreen} options={{headerShown: false}} /> 
        <Stack.Screen name="Apartamento" component={apartamentsScreen}/>
        <Stack.Screen name="Actualizar" component={update}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


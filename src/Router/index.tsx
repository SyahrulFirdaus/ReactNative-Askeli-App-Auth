import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Splash } from '../Pages';
import Register from '../Pages/Details/Register';
import Beranda from '../Pages/Details';



const Stack = createNativeStackNavigator();

const Router = () => {
  return (

    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name="Beranda" component={Beranda} options={{ headerShown: false }} />
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({

})
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import Details from './src/screens/Details';

const Stack = createNativeStackNavigator();
const InSideStack = createNativeStackNavigator();

const InSideLayout =()=>{
  return (

    <InSideStack.Navigator>
    <InSideStack.Screen name='Details' component={Details}/>
  </InSideStack.Navigator>
    )
}
const App = () => {
  const [user ,setUser] =useState(null);


   useEffect(()=>{
  onAuthStateChanged(FIREBASE_AUTH ,(listUser)=>{
    console.log(listUser,'List User');
    setUser(listUser);
  })

   },[])
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      {user ? 
      <Stack.Screen name='InsideLayout' component={InSideLayout} options={{headerShown:false}}/>
      
      :
      <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
      }
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig'

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'black'}}>Details </Text>
      <Text onPress={()=>FIREBASE_AUTH.signOut()} style={{color:'black'}}>Log Out</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
    }
})
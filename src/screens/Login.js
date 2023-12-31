import { ActivityIndicator, Alert, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth';
const Login = () => {
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [loading,setLoading]=useState(false);
    
    //FIREBASE Auth START

    const auth=FIREBASE_AUTH;
    const signUp =useCallback(async ()=>{
        setLoading(true)
        try {
            const response =await createUserWithEmailAndPassword(auth,email,password);
            console.log(response,'Responseeee')
        } catch (error) {
            console.log('Sign in Failed',error)
            Alert.alert('Sign Up in Failed',error)

        }
        finally{
            setLoading(false)
       
        }
    },[email,password]);


    const signIn =useCallback(async ()=>{
        setLoading(true)
        try {
            const response =await signInWithEmailAndPassword(auth,email,password);
            console.log(response,'Responseeee')
        } catch (error) {
            console.log('Sign in Failed',error)
            Alert.alert('Sign In in Failed',error)
        }
        finally{
            setLoading(false)
          
        }
    },[email,password]);

    //FIREBASE Auth END

    
  return (
      
      <ScrollView contentContainerStyle={styles.contaner}>
        <KeyboardAvoidingView behavior='padding'>
        <TextInput style={styles.input} placeholder='email' value={email} onChangeText={(e)=>setEmail(e)} />
        <TextInput style={styles.input} secureTextEntry={true} placeholder='password' value={password} onChangeText={(e)=>setPassword(e)}/>
     {loading ? <ActivityIndicator/> : 
     <>
     <Text onPress={signIn} style={styles.login}>Login</Text>
     <Text onPress={signUp} style={styles.login}>create a account</Text>
     </>
      }
    </KeyboardAvoidingView>
    </ScrollView>

  )
}

export default Login

const styles = StyleSheet.create({
    contaner:{
        flex:1,
        justifyContent:'center',
        padding:10
    },
    input:{
        marginBottom:10,
        width:'80',
        borderColor:'black',
        padding:10,
        borderWidth:1
    },
    login:{
        marginBottom:10,
        color:'black',
        textAlign:'center'
    }
})
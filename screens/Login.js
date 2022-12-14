import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
// import tw from 'tailwind-rn'
// remove header
const Login = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })

  }, [])
  return (
    <View style={styles.background}>
       {/* Background image with link */}
      <ImageBackground resizeMode='cover' style={styles.background} source={{uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBNNHKxDOv0QnM4kPdYYk1fMZeF3K3MJO0xqQrvLujOl1Wayz74giAHPkjFryGjmGh4ESAZ_IL2r6CpkKOv4DEODl77KBYvijdBbPo3zaxhgc1JjgCpEm6V26lYPOKvjPhc6JX_8p_6-BjFed-kgtRIY4WvZGLsurj88XUDR_H6_ypnmJkFvhOa4t8/s1600/06052022-BLUE@2x.png'}}>      
            {/* Transparent paw image */}
        <Image style={styles.image} source={require("../paw.png")}/>
        {/* Touchable button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text}>Sign in and find matches!</Text>
        </TouchableOpacity>
        
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
background:{
flex: 1,

},
image:{
flex: 1,
top: 250,
left: 75,
width: 240,
maxHeight: 238,
},
text:{
  marginTop: 15,
  fontSize: 15,
  flex: 1,
  textAlign: 'center',
  
},
button:{
  flex: 1,
  marginHorizontal:'25%',
  alignContent: 'center',
  top: 400,
  backgroundColor: 'white',
  width: 200,
  maxHeight: 50,
  borderRadius: 10,
}

});
export default Login;
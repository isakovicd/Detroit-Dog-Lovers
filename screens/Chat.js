import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import React, { useLayoutEffect, Fragment  } from 'react'
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Chat = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })

  }, [])
  return (
    // fragment needed to color above the safeareaview
    <Fragment>
    {/* safeareaview color above */}
    <SafeAreaView style={{ flex: 0, backgroundColor: '#0058FF' }} />
    {/* Actual safeareaview */}
    <SafeAreaView style={[styles.container]}>
      <StatusBar backgroundColor='#0058FF'/>
      {/* Header */}
    <View style={styles.header}>
      <TouchableOpacity style={styles.userHolder}>
        <Image style={styles.userImg} source={{uri:'https://miro.medium.com/max/767/1*YoXUuyJMX0IuGfgH7KOwDw.jpeg'}}/>
      </TouchableOpacity>
      <Text style={styles.label}>Conversations</Text>
      <TouchableOpacity style={styles.logoHolder}><Image style={styles.logo} source={require("../pawcolor.png")}/></TouchableOpacity>
      
      </View>
      {/* end of header */}

      {/* messages */}
      <View style={styles.messageArea}>
        {/* first message */}
        <TouchableOpacity style={styles.message}>
        <Image style={styles.nuserImg} source={{uri:'https://i.pinimg.com/236x/5d/30/cc/5d30cce4a996e1465919a411d0ff7190--pure-joy-cakes.jpg'}}/>
        <Text style={styles.name}>Charles</Text>
        <Text style={styles.lmsg}>Hey how're you doing?</Text>
        <Text style={styles.time}>10:36 PM</Text>
        </TouchableOpacity>
        {/* second message */}
        <TouchableOpacity style={styles.message2}>
        <Image style={styles.nuserImg2} source={{uri:'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn'}}/>
        <Text style={styles.name2}>Demi</Text>
        <Text style={styles.lmsg2}>You have a cute dog :)</Text>
        <Text style={styles.time2}> 8:47 PM</Text>
        </TouchableOpacity>
        {/* Third Message */}
        <TouchableOpacity style={styles.message3}>
        <Image style={styles.nuserImg3} source={{uri:'https://people.com/thmb/m_fKur3LRPF4qlDwBAd0PBFNHSQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/bacon-the-dog-1-1-2000-665624bf445a4eeab2ee4b6f59dbd7e2.jpg'}}/>
        <Text style={styles.name3}>Bartholemule</Text>
        <Text style={styles.lmsg3}>Im sorry for any sin i may have commited</Text>
        <Text style={styles.time3}> 6:66 PM</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </Fragment>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent: 'center',
    
  },
  label:{
    left: 120,
    fontSize: 24,
    top: 30,
    color: 'white'
  },
  header:{
    backgroundColor: '#0058FF',
    maxHeight: 70,
  },
  userHolder:{
    height: 50,
    maxWidth: 50,
    left: 15,
    top: 10,
    borderRadius: 10,
    position:'absolute',

  },
  userImg:{
    width: 50,
    height: 50,
    flex: 1,
    borderRadius: 100,

  },
  logoHolder:{
    height: 60,
    maxWidth: 60,
    left: 310,
    bottom: 22,
    
  },
  logo:{
    height: 60,
    maxWidth: 60,    
  },
  chat:{
    position: 'absolute',
    right: 10,
  },
  messageArea:{
    
    flex: 1,
  },
  message:{

    height: 50,
    width: 500,
    left: 15,
    top: 10,
    position:'absolute',
  },
  
  nuserImg:{
    width: 50,
    height: 50,
    
    borderRadius: 100,

  },
  name:{
    fontSize: 24,
    left: 60,
    top: -50,
  },
  lmsg:{
    left: 60,
    top: -50,
  },
  time:{
    left: 300,
    top: -80,
  },
  message2:{

    height: 50,
    width: 500,
    left: 15,
    top: 70,
    position:'absolute',
  },
  
  nuserImg2:{
    width: 50,
    height: 50,
    
    borderRadius: 100,

  },
  name2:{
    fontSize: 24,
    left: 60,
    top: -50,
  },
  lmsg2:{
    left: 60,
    top: -50,
  },
  time2:{
    left: 300,
    top: -80,
  },
  message3:{

    height: 50,
    width: 500,
    left: 15,
    top: 130,
    position:'absolute',
  },
  
  nuserImg3:{
    width: 50,
    height: 50,
    
    borderRadius: 100,

  },
  name3:{
    fontSize: 24,
    left: 60,
    top: -50,
  },
  lmsg3:{
    left: 60,
    top: -50,
  },
  time3:{
    left: 300,
    top: -80,
  }
})
export default Chat;
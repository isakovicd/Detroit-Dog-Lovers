import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Swiper from 'react-native-deck-swiper';
import data from '../data';


const Card = ({card}) => (
  <View style={styles.card}>
    <Image source={{uri: card.image}} style={styles.cardImage}/>
  </View>
)
const Details = ({index}) => (
    <View key={data[index].id} style={styles.cardDetails}>
      <Text style={styles.cardName}>{data[index].name}</Text>
      <Text style={styles.cardAge}>Age: {data[index].age}</Text>
      <Text style={styles.cardOAge}>O-age: {data[index].ownerAge}</Text>
      <Text style={styles.cardOName}>O-name: {data[index].ownerName}</Text>
    </View>
  )
const swiperRef = React.createRef();
const Home = () => {

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })

  }, [])
  const [index, setIndex] = React.useState(0);

  

  const onSwiped = () => {
    setIndex(index + 1);
  };
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity style={styles.userHolder}>
        <Image style={styles.userImg} source={{uri:'https://miro.medium.com/max/767/1*YoXUuyJMX0IuGfgH7KOwDw.jpeg'}}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoHolder}><Image style={styles.logo} source={require("../pawcolor.png")}/></TouchableOpacity>
      <TouchableOpacity style={styles.chat} onPress={() => navigation.navigate('Chat')}>
        <Ionicons name='chatbubbles-sharp' size={40} color="#0058FF"/>
      </TouchableOpacity>
      </View>
    {/* End of Header */}
    {/* Swipable Cards */}
    <View style={styles.swiperHolder}>
      <Swiper
        ref={swiperRef}
        cards={data}
        cardIndex={index}
        renderCard={(card) => <Card card={card}/>}
        onSwiped={onSwiped}
        stackSize={4}
        stackScale={1}
        stackSeparation={15}
        disableBottomSwipe
        disableTopSwipe
        animateCardOpacity
        infinite
        backgroundColor={'transparent'}
        // overlayLabels={
        //   <Details index={index}/>
        // }
        
      />
      
      </View>
      <View>
        <Details index={index}/>
        <TouchableOpacity style={styles.sad}>
          <Ionicons name="sad" size={80} color="#FF0000"
          onPress={() => swiperRef.current.swipeLeft()}></Ionicons> 
        </TouchableOpacity >
        <TouchableOpacity style={styles.happy}>
          <Ionicons name="happy" size={80} color="#0058FF"
          onPress={() => swiperRef.current.swipeRight()}></Ionicons>
        </TouchableOpacity>
        
      </View>
    
    {/* End of Swipable Cards */}
    </SafeAreaView>
    
  )
}
const styles = StyleSheet.create({
  SafeAreaView:{
    flex: 1,
    alignContent: 'center',
  },
  header:{
    
  },
  userHolder:{
    height: 50,
    maxWidth: 50,
    left: 10,
    top: 0,
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
    left: 165,
  },
  logo:{
    height: 60,
    maxWidth: 60,    
  },
  chat:{
    position: 'absolute',
    right: 10,
  },
  swiperHolder:{
    flex: 1,
    // backgroundColor: 'red',
    
  },
  card:{
    flex: .75,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: 'black',
    shadowOpacity: .5,
    shadowOffset: {width: 0, height: 0},
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    top: -25,

  },
  cardImage:{
    top:-95,
    flex: 1,
    width: 300,
    maxHeight: 300,
    resizeMode: 'cover',
  },
  cardDetails:{
    top: -70,
    left: 50,
    fontSize: 32,
  },
  cardAge:{
    
  },
  cardName:{
    fontSize: 32,

  },
  cardOAge:{
    color: 'grey',
  },
  cardOName:{
    color: 'grey',
  },
  happy:{
    left: 275,
  },
  sad:{
    bottom: -87,
    left: 30
  },
  });

export default Home;
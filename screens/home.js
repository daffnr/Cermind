import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import Title from '../components/title'
import QuestionOptions from '../components/questionOptions'


const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title/>
      <QuestionOptions/>
      <View style={styles.bannerContainer}>
            <Image source={require('../assets/carousel.png')}
            style={styles.banner}
            resizeMode='contain'
            />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={styles.button}>
        <Text style={styles.buttonText}>Mulai</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

export const styles = StyleSheet.create({
    banner: {
        height:300,
        width:700,
    },
    bannerContainer: {
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
    },
    container:{
        paddingTop: 40,
        paddingHorizontal: 20,
        height:'100%'
    },
    button:{
        width: '100%',
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText:{
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
})
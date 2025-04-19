import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat datang di Cermind</Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontSize:26,
        fontWight:'8900',
        marginTop:'30',
    },
    container:{
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
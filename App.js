import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import Quiz from './screens/quiz'
import Result from './screens/result'
import Home from './screens/home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyStack from './navigations'

const App = () => {
  return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingTop:40,
    paddingHorizontal: 16,
  },
})
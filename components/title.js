import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Title = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Selamat datang di Cermind <Image
          source={require('../assets/logoCermind.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        </Text>
      </View>
      <View>
        <Text style={styles.subtitle1}>Hai!</Text>
        <Text style={styles.subtitle2}>Mau latihan apa hari ini?</Text>
      </View>

    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginRight: 100,
    marginTop: 40
  },
  logo: {
    height: 30,
    width: 40, 
  },
  subtitle1: {
    fontSize: 28,
    fontWeight: 'bold',   
  },
  subtitle2: {
    fontSize: 21,
    fontWeight: '500',   
  },
});
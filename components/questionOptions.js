import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const QuestionOptions = ({ setSelectedQuestions }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setSelectedQuestions('20Soal')} style={styles.optionButton}>
        <Text style={styles.optionText}>20 Soal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedQuestions('40Soal')} style={styles.optionButton}>
        <Text style={styles.optionText}>40 Soal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedQuestions('50Soal')} style={styles.optionButton}>
        <Text style={styles.optionText}>50 Soal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 30,
  },
  optionButton: {
    backgroundColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 15,
    height: 35,
    borderWidth: 2,
    borderRadius: 6,
    flex: 1,
    marginHorizontal: 10
  },
  optionText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default QuestionOptions;
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { questions } from '../data/questions';

const Quiz = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(20);
  const [correctCount, setCorrectCount] = useState(0);
  const [startTime] = useState(Date.now()); // Simpan waktu mulai

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (timer === 0) {
      handleNext();
      return;
    }
    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleOptionPress = (optionKey) => {
    setSelected(optionKey);
    if (optionKey === currentQuestion.answer) {
      setCorrectCount(prev => prev + 1);
    }
    setTimeout(() => {
      handleNext();
    }, 500);
  };

  const handleNext = () => {
    if (currentIndex + 1 === questions.length) {
      const totalTimeInSeconds = Math.floor((Date.now() - startTime) / 1000);
      navigation.navigate('Result', {
        correctCount,
        totalQuestions: questions.length,
        totalTimeInSeconds
      });
      return;
    }

    setSelected(null);
    setTimer(20);
    setCurrentIndex(prev => prev + 1); // Lanjutkan ke soal berikutnya
  };

  const renderOptionBox = (value, index) => {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    return (
      <View key={index} style={styles.optionBox}>
        <Text style={styles.optionNumber}>{value}</Text>
        <Text style={styles.optionLetter}>{letters[index]}</Text>
      </View>
    );
  };

  const renderChoiceButton = (label) => {
    const isSelected = selected === label;
    return (
      <TouchableOpacity
        key={label}
        style={[styles.choiceBtn, isSelected && styles.selectedBtn]}
        onPress={() => handleOptionPress(label)}>
        <Text style={styles.choiceText}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.progress}>{currentIndex + 1}/40</Text>
        <View style={styles.timerBox}>
          <Text style={styles.timerText}>{`00:${timer < 10 ? '0' : ''}${timer}`}</Text>
        </View>
      </View>

      <View style={styles.optionRow}>
        {currentQuestion.options.map(renderOptionBox)}
      </View>

      <View style={styles.questionBox}>
        <Text style={styles.questionLabel}>Soal</Text>
        <Text style={styles.questionValue}>{currentQuestion.question}</Text>
      </View>

      <View style={styles.choiceList}>
        {['A', 'B', 'C', 'D', 'E'].map(renderChoiceButton)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  progress: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  timerBox: {
    backgroundColor: 'orange',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  timerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionBox: {
    alignItems: 'center',
    width: 40,
  },
  optionNumber: {
    backgroundColor: '#333',
    color: 'white',
    fontSize: 18,
    padding: 6,
    borderRadius: 4,
    marginBottom: 2,
    textAlign: 'center',
  },
  optionLetter: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  questionBox: {
    backgroundColor: '#ddd',
    padding: 15,
    marginBottom: 20,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questionLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  questionValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  choiceList: {
    gap: 10,
  },
  choiceBtn: {
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  selectedBtn: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  choiceText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default Quiz;

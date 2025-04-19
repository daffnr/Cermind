import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';

const Quiz = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);

  const getQuiz = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(shuffleOptions(data.results[0]));
  };

  const shuffleOptions = (question) => {
    const options = [...question.incorrect_answers];
    options.push(question.correct_answer);
    return options.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNext = () => {
    if (ques < questions.length - 1) {
      setQues(ques + 1);
      setOptions(shuffleOptions(questions[ques + 1]));
    } else {
      navigation.navigate("Result"); // ganti sesuai screen yang lo punya
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  return (
    <View style={styles.container}>
      {questions.length > 0 ? (
        <View style={styles.parent}>
          <View style={styles.top}>
            <Text style={styles.question}>
              Q. {decodeURIComponent(questions[ques].question)}
            </Text>
          </View>

          <View style={styles.options}>
            {options.map((option, index) => (
              <TouchableOpacity key={index} style={styles.optionButton}>
                <Text style={styles.option}>{decodeURIComponent(option)}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity onPress={handleSkip} style={styles.button}>
              <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNext} style={styles.button}>
              <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#184E77',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButton: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent:{
    height: '100%'
  }
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Result = ({ route, navigation }) => {
  const { correctCount, totalQuestions, totalTimeInSeconds } = route.params;

  const wrongCount = totalQuestions - correctCount;
  const score = correctCount * 10;

  const minutes = Math.floor(totalTimeInSeconds / 60);
  const seconds = totalTimeInSeconds % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hasil Tes</Text>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Score Anda</Text>
        <Text style={styles.score}>{score}</Text>

        <View style={styles.timerRow}>
          <Ionicons name="time-outline" size={20} color="#FF9900" />
          <Text style={styles.timerText}>
            {minutes} Menit{seconds > 0 ? ` ${seconds} Detik` : ''}
          </Text>
        </View>
      </View>

      <View style={styles.resultRow}>
        <View style={styles.resultBox}>
          <Text style={styles.resultValue}>{correctCount}</Text>
          <Text style={styles.resultLabel}>Soal Benar</Text>
        </View>
        <View style={styles.resultBox}>
          <Text style={styles.resultValue}>{wrongCount}</Text>
          <Text style={styles.resultLabel}>Soal Salah</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Pembahasan Soal</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonSecondary}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.buttonText}>Kembali ke Halaman Utama</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    elevation: 4,
    marginBottom: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  timerText: {
    marginLeft: 6,
    color: '#FF9900',
    fontWeight: '600',
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  resultBox: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
  },
  resultValue: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  resultLabel: {
    marginTop: 4,
    color: '#888',
  },
  button: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  buttonSecondary: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
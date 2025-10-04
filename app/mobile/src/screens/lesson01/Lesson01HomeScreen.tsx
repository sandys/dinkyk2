import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { palette, shadowStyles } from '../../core/theme';
import { RootStackParamList } from '../../navigation/AppNavigator';

const Lesson01HomeScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, 'Lesson01Home'>
> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.heroCard}>
        <Text style={styles.eyebrow}>Phase 1 · Lesson 01</Text>
        <Text style={styles.title}>Sound Detective: Rhyme & Count</Text>
        <Text style={styles.subtitle}>
          Warm up the ear before we introduce letters. First, find rhyming words. Then, tap out the
          words in a sentence.
        </Text>
      </View>

      <View style={styles.activityCard}>
        <Text style={styles.activityTitle}>Exercise 3.1 · Rhyme Match</Text>
        <Text style={styles.activityBody}>
          Listen to the prompt and tap the picture that rhymes with the target word. Visuals get
          brighter and audio confirms when the match is correct.
        </Text>
        <TouchableOpacity
          accessibilityHint="Start the Rhyme Match game"
          accessibilityRole="button"
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Lesson01RhymeMatch')}
        >
          <Text style={styles.primaryButtonLabel}>Start Rhyme Match</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.activityCard}>
        <Text style={styles.activityTitle}>Exercise 3.2 · Word Tapper</Text>
        <Text style={styles.activityBody}>
          Listen to a short sentence and tap once for every word you hear. Each tap fills a dot and a
          celebration plays when the count is correct.
        </Text>
        <TouchableOpacity
          accessibilityHint="Start the Word Tapper activity"
          accessibilityRole="button"
          style={styles.primaryButton}
          onPress={() => navigation.navigate('Lesson01WordTapper')}
        >
          <Text style={styles.primaryButtonLabel}>Start Word Tapper</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activityBody: {
    color: palette.secondaryText,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16
  },
  activityCard: {
    ...shadowStyles,
    backgroundColor: palette.card,
    borderRadius: 18,
    gap: 12,
    padding: 20
  },
  activityTitle: {
    color: palette.primaryText,
    fontSize: 18,
    fontWeight: '700'
  },
  container: {
    backgroundColor: palette.background,
    flex: 1,
    gap: 20,
    padding: 24
  },
  eyebrow: {
    color: palette.secondaryText,
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  heroCard: {
    ...shadowStyles,
    backgroundColor: palette.card,
    borderRadius: 20,
    gap: 12,
    padding: 24
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: palette.primary,
    borderRadius: 12,
    paddingVertical: 14
  },
  primaryButtonLabel: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '600'
  },
  subtitle: {
    color: palette.secondaryText,
    fontSize: 16,
    lineHeight: 22
  },
  title: {
    color: palette.primaryText,
    fontSize: 26,
    fontWeight: '700'
  }
});

export default Lesson01HomeScreen;

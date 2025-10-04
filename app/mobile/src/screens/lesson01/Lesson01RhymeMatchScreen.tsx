import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  LayoutAnimation,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  UIManager,
  View
} from 'react-native';
import * as Speech from 'expo-speech';

import { palette, shadowStyles } from '../../core/theme';
import WordBadge from '../../components/WordBadge';
import { RootStackParamList } from '../../navigation/AppNavigator';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const promptSets = [
  { target: 'cat', options: ['hat', 'dog', 'car'], correctIndex: 0 },
  { target: 'bug', options: ['rug', 'fig', 'bus'], correctIndex: 0 },
  { target: 'pin', options: ['fin', 'cup', 'log'], correctIndex: 0 },
  { target: 'sun', options: ['run', 'sit', 'map'], correctIndex: 0 },
  { target: 'man', options: ['pan', 'dig', 'cup'], correctIndex: 0 }
];

type Props = NativeStackScreenProps<RootStackParamList, 'Lesson01RhymeMatch'>;

type FeedbackState = 'neutral' | 'correct' | 'incorrect';

const Lesson01RhymeMatchScreen: React.FC<Props> = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [feedback, setFeedback] = React.useState<FeedbackState>('neutral');
  const [completed, setCompleted] = React.useState(false);

  const current = promptSets[index];

  const speakPrompt = React.useCallback(() => {
    Speech.speak(`Which word rhymes with ${current.target}?`, {
      pitch: 1.1,
      rate: 0.9
    });
  }, [current.target]);

  React.useEffect(() => {
    speakPrompt();
  }, [speakPrompt]);

  const handleSelect = (optionIndex: number) => {
    const isCorrect = optionIndex === current.correctIndex;
    LayoutAnimation.easeInEaseOut();
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    Speech.speak(isCorrect ? 'Yes! That rhymes.' : 'Try again.', {
      pitch: isCorrect ? 1.2 : 0.8,
      rate: 0.95
    });

    if (isCorrect && index === promptSets.length - 1) {
      setCompleted(true);
    }
  };

  const goToNext = () => {
    if (index < promptSets.length - 1) {
      setIndex((prev) => prev + 1);
      setFeedback('neutral');
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Exercise 3.1</Text>
        <Text style={styles.title}>Rhyme Match</Text>
        <Text style={styles.subtitle}>
          Listen to the prompt and tap the word that rhymes with the target word.
        </Text>
      </View>

      <View style={styles.promptCard}>
        <Text style={styles.promptLabel}>Target Word</Text>
        <View style={styles.promptVisual}>
          <WordBadge word={current.target} />
        </View>
        <Text style={styles.promptWord}>{current.target}</Text>
        <Pressable accessibilityRole="button" style={styles.promptButton} onPress={speakPrompt}>
          <Text style={styles.promptButtonLabel}>Replay Prompt</Text>
        </Pressable>
      </View>

      <View style={styles.optionsRow}>
        {current.options.map((option, optionIndex) => {
          const optionStatus =
            feedback === 'neutral'
              ? styles.option
              : optionIndex === current.correctIndex
              ? [styles.option, styles.optionCorrect]
              : [styles.option, styles.optionNeutral];

          return (
            <Pressable
              key={option}
              accessibilityHint={`Answer choice ${option}`}
              accessibilityRole="button"
              disabled={feedback === 'correct'}
              onPress={() => handleSelect(optionIndex)}
              style={optionStatus}
            >
              <WordBadge word={option} size={88} />
              <Text style={styles.optionText}>{option}</Text>
              {feedback === 'correct' && optionIndex === current.correctIndex ? (
                <Text style={styles.optionFeedback}>✓</Text>
              ) : null}
            </Pressable>
          );
        })}
      </View>

      <View style={styles.footer}>
        {feedback === 'correct' ? (
          <Pressable style={styles.primaryButton} onPress={goToNext} accessibilityRole="button">
            <Text style={styles.primaryButtonLabel}>
              {completed ? 'Finish Lesson' : 'Next Word'}
            </Text>
          </Pressable>
        ) : (
          <Text style={styles.feedbackText}>
            {feedback === 'incorrect' ? 'Almost! Tap another word that rhymes.' : 'Choose your match.'}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  feedbackText: {
    color: palette.secondaryText,
    fontSize: 16,
    textAlign: 'center'
  },
  footer: {
    alignItems: 'center',
    gap: 12
  },
  header: {
    gap: 8
  },
  option: {
    ...shadowStyles,
    alignItems: 'center',
    backgroundColor: palette.card,
    borderRadius: 16,
    flex: 1,
    gap: 8,
    padding: 20
  },
  optionCorrect: {
    borderColor: palette.success,
    borderWidth: 2
  },
  optionFeedback: {
    color: palette.success,
    fontSize: 20,
    fontWeight: '700'
  },
  optionNeutral: {
    opacity: 0.7
  },
  optionText: {
    color: palette.primaryText,
    fontSize: 20,
    fontWeight: '600'
  },
  optionsRow: {
    flexDirection: 'row',
    gap: 16
  },
  primaryButton: {
    backgroundColor: palette.primary,
    borderRadius: 12,
    paddingHorizontal: 32,
    paddingVertical: 14
  },
  primaryButtonLabel: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '600'
  },
  promptButton: {
    backgroundColor: palette.primary,
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 10
  },
  promptButtonLabel: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '600'
  },
  promptCard: {
    ...shadowStyles,
    alignItems: 'center',
    backgroundColor: palette.card,
    borderRadius: 20,
    gap: 12,
    padding: 32
  },
  promptLabel: {
    color: palette.secondaryText,
    fontSize: 16
  },
  promptVisual: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  promptWord: {
    color: palette.primaryText,
    fontSize: 48,
    fontWeight: '700',
    letterSpacing: 2,
    textTransform: 'uppercase'
  },
  subtitle: {
    color: palette.secondaryText,
    fontSize: 16,
    lineHeight: 22
  },
  title: {
    color: palette.primaryText,
    fontSize: 28,
    fontWeight: '700'
  }
});

export default Lesson01RhymeMatchScreen;

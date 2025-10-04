import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { LayoutAnimation, Pressable, StyleSheet, Text, View } from 'react-native';
import * as Speech from 'expo-speech';

import { palette, shadowStyles } from '../../core/theme';
import { RootStackParamList } from '../../navigation/AppNavigator';

const sentences = [
  { text: 'Dogs run.', wordCount: 2 },
  { text: 'The dog ran.', wordCount: 3 },
  { text: 'The dog ran fast.', wordCount: 4 }
];

type Props = NativeStackScreenProps<RootStackParamList, 'Lesson01WordTapper'>;

type StageState = 'listening' | 'counting' | 'complete';

const Lesson01WordTapperScreen: React.FC<Props> = ({ navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [tapCount, setTapCount] = React.useState(0);
  const [stage, setStage] = React.useState<StageState>('listening');
  const [celebrate, setCelebrate] = React.useState(false);

  const current = sentences[index];

  const handlePlaySentence = () => {
    setStage('counting');
    Speech.speak(current.text, {
      pitch: 1.0,
      rate: 0.9
    });
  };

  const reset = () => {
    setTapCount(0);
    setCelebrate(false);
    setStage('listening');
  };

  const handleTap = () => {
    if (stage !== 'counting') {
      return;
    }

    setTapCount((prev) => {
      const next = prev + 1;
      if (next === current.wordCount) {
        LayoutAnimation.easeInEaseOut();
        setCelebrate(true);
        setStage('complete');
        Speech.speak('Great counting!', {
          pitch: 1.2,
          rate: 0.95
        });
      } else if (next > current.wordCount) {
        LayoutAnimation.easeInEaseOut();
        setCelebrate(false);
        setStage('complete');
        Speech.speak('Let us try that sentence again.', {
          pitch: 0.9,
          rate: 0.85
        });
      }
      return next;
    });
  };

  const advance = () => {
    if (index === sentences.length - 1) {
      navigation.goBack();
      return;
    }

    setIndex((prev) => prev + 1);
    setTapCount(0);
    setCelebrate(false);
    setStage('listening');
  };

  const dots = Array.from({ length: current.wordCount }, (_, idx) => idx < tapCount);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Exercise 3.2</Text>
        <Text style={styles.title}>Word Tapper</Text>
        <Text style={styles.subtitle}>
          Tap once for every word you hear. Replay the sentence if you need to listen again.
        </Text>
      </View>

      <View style={styles.sentenceCard}>
        <Text style={styles.sentenceText}>{current.text}</Text>
        <Pressable
          accessibilityHint="Replay sentence"
          accessibilityRole="button"
          onPress={handlePlaySentence}
          style={styles.primaryButton}
        >
          <Text style={styles.primaryButtonLabel}>Play Sentence</Text>
        </Pressable>
      </View>

      <Pressable
        accessibilityHint="Tap once per word"
        accessibilityRole="button"
        onPress={handleTap}
        style={styles.tapSurface}
      >
        <Text style={styles.tapPrompt}>Tap here for each word</Text>
        <View style={styles.dotsRow}>
          {dots.map((filled, idx) => (
            <View key={`dot-${idx}`} style={[styles.dot, filled ? styles.dotFilled : styles.dotEmpty]} />
          ))}
        </View>
      </Pressable>

      <View style={styles.footer}>
        {stage === 'complete' ? (
          <>
            <Text style={styles.feedbackText}>
              {celebrate ? 'Amazing listening!' : 'Let’s try that one again.'}
            </Text>
            <View style={styles.footerButtons}>
              <Pressable style={styles.secondaryButton} onPress={reset} accessibilityRole="button">
                <Text style={styles.secondaryButtonLabel}>Replay</Text>
              </Pressable>
              <Pressable style={styles.primaryButton} onPress={advance} accessibilityRole="button">
                <Text style={styles.primaryButtonLabel}>
                  {index === sentences.length - 1 ? 'Finish Lesson' : 'Next Sentence'}
                </Text>
              </Pressable>
            </View>
          </>
        ) : (
          <Text style={styles.feedbackText}>
            {stage === 'listening'
              ? 'Press “Play Sentence” to begin.'
              : 'Tap the big pad below for each word you heard.'}
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
  dot: {
    borderRadius: 999,
    height: 36,
    width: 36
  },
  dotEmpty: {
    backgroundColor: palette.transparent,
    borderColor: palette.cardBorder,
    borderWidth: 2
  },
  dotFilled: {
    backgroundColor: palette.primary
  },
  dotsRow: {
    columnGap: 12,
    flexDirection: 'row'
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
  footerButtons: {
    columnGap: 12,
    flexDirection: 'row'
  },
  header: {
    gap: 8
  },
  primaryButton: {
    alignItems: 'center',
    backgroundColor: palette.primary,
    borderRadius: 12,
    paddingHorizontal: 28,
    paddingVertical: 14
  },
  primaryButtonLabel: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '600'
  },
  secondaryButton: {
    alignItems: 'center',
    borderColor: palette.primary,
    borderRadius: 12,
    borderWidth: 2,
    paddingHorizontal: 28,
    paddingVertical: 12
  },
  secondaryButtonLabel: {
    color: palette.primary,
    fontSize: 16,
    fontWeight: '600'
  },
  sentenceCard: {
    ...shadowStyles,
    alignItems: 'center',
    backgroundColor: palette.card,
    borderRadius: 20,
    gap: 12,
    padding: 24
  },
  sentenceText: {
    color: palette.primaryText,
    fontSize: 28,
    fontWeight: '700'
  },
  subtitle: {
    color: palette.secondaryText,
    fontSize: 16,
    lineHeight: 22
  },
  tapPrompt: {
    color: palette.secondaryText,
    fontSize: 18,
    fontWeight: '600'
  },
  tapSurface: {
    ...shadowStyles,
    alignItems: 'center',
    backgroundColor: palette.card,
    borderRadius: 24,
    gap: 16,
    padding: 32
  },
  title: {
    color: palette.primaryText,
    fontSize: 28,
    fontWeight: '700'
  }
});

export default Lesson01WordTapperScreen;

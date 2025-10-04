import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { palette } from '../core/theme';

const SoundWallScreen: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>Sound Wall</Text>
      <Text style={styles.body}>
        This module will progressively unlock phoneme cards, articulation assets, and grapheme
        mappings following Part VII of `SPECS.md`. The initial build will subscribe to curriculum
        metadata to know which sounds are currently taught.
      </Text>
    </View>
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.placeholderCard}>
        <Text style={styles.placeholderTitle}>Consonant Deck</Text>
        <Text style={styles.placeholderBody}>
          Upcoming work: render consonant phonemes grouped by place/manner of articulation with
          tap-to-reveal anchor media and unlock animations.
        </Text>
      </View>
      <View style={styles.placeholderCard}>
        <Text style={styles.placeholderTitle}>Vowel Valley</Text>
        <Text style={styles.placeholderBody}>
          Upcoming work: visualize vowel valley ordering and highlight diphthongs / r-controlled
          vowels per progression milestones.
        </Text>
      </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  body: {
    color: palette.secondaryText,
    fontSize: 16,
    lineHeight: 22
  },
  container: {
    backgroundColor: palette.background,
    flex: 1
  },
  content: {
    gap: 16,
    padding: 24
  },
  header: {
    backgroundColor: palette.card,
    borderBottomColor: palette.cardBorder,
    borderBottomWidth: 1,
    padding: 24
  },
  placeholderBody: {
    color: palette.secondaryText,
    fontSize: 15,
    lineHeight: 21
  },
  placeholderCard: {
    backgroundColor: palette.card,
    borderColor: palette.cardBorder,
    borderRadius: 16,
    borderWidth: 1,
    padding: 20
  },
  placeholderTitle: {
    color: palette.primaryText,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6
  },
  title: {
    color: palette.primaryText,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8
  }
});

export default SoundWallScreen;

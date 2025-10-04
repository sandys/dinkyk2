import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const palette = {
  background: '#f8f5ff',
  card: '#ffffff',
  primaryText: '#2c1d4e',
  secondaryText: '#5b4f7d',
  bodyText: '#3f3356',
  shadow: '#000000'
} as const;

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.hero}>
          <Text style={styles.title}>DinkyK2</Text>
          <Text style={styles.subtitle}>Systematic phonics journeys, built for touch.</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Next Actions</Text>
          <Text style={styles.cardBody}>
            • Connect lesson data from `curriculum/` to unlock exercises.
            {'\n'}• Implement Sound Wall module per Part VII of `SPECS.md`.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.card,
    borderRadius: 16,
    elevation: 6,
    padding: 24,
    shadowColor: palette.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 12
  },
  cardBody: {
    color: palette.bodyText,
    fontSize: 16,
    lineHeight: 22
  },
  cardTitle: {
    color: palette.primaryText,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12
  },
  container: {
    backgroundColor: palette.background,
    flex: 1
  },
  hero: {
    alignItems: 'center',
    marginBottom: 32
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24
  },
  subtitle: {
    color: palette.secondaryText,
    fontSize: 18,
    marginTop: 8,
    textAlign: 'center'
  },
  title: {
    color: palette.primaryText,
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center'
  }
});

export default App;

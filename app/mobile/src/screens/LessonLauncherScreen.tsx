import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { getLessonSummaries } from '../core/lessonLoader';
import { palette, shadowStyles } from '../core/theme';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'LessonLauncher'>;

const LessonLauncherScreen: React.FC<Props> = ({ navigation }) => {
  const lessons = React.useMemo(() => getLessonSummaries(), []);

  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>
          Choose a lesson to continue the systematic phonics progression. Data hooks will soon
          source full objectives directly from `curriculum/` metadata.
        </Text>
      </View>
      <View style={styles.quickActions}>
        <TouchableOpacity
          accessibilityHint="Open today’s review queue"
          accessibilityRole="button"
          onPress={() => navigation.navigate('DailyReview')}
          style={styles.actionButton}
        >
          <Text style={styles.actionLabel}>Daily Review</Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityHint="Open the interactive Sound Wall"
          accessibilityRole="button"
          onPress={() => navigation.navigate('SoundWall')}
          style={styles.actionButton}
        >
          <Text style={styles.actionLabel}>Sound Wall</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.listTitle}>Upcoming Lessons</Text>
      <FlatList
        contentContainerStyle={styles.lessonList}
        data={lessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            accessibilityHint="Open lesson menu"
            accessibilityRole="button"
            onPress={() => navigation.navigate('Lesson01Home')}
            style={styles.lessonCard}
          >
            <Text style={styles.lessonId}>{`Phase ${item.phase}`}</Text>
            <Text style={styles.lessonName}>{`Lesson ${item.lesson.toString().padStart(2, '0')}`}</Text>
            <Text style={styles.lessonFocus}>{item.focus}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    ...shadowStyles,
    alignItems: 'center',
    backgroundColor: palette.primary,
    borderRadius: 12,
    flex: 1,
    paddingVertical: 14
  },
  actionLabel: {
    color: palette.white,
    fontSize: 16,
    fontWeight: '600'
  },
  container: {
    backgroundColor: palette.background,
    flex: 1,
    gap: 24,
    padding: 24
  },
  headerBlock: {
    ...shadowStyles,
    backgroundColor: palette.card,
    borderRadius: 16,
    padding: 20
  },
  lessonCard: {
    backgroundColor: palette.card,
    borderColor: palette.cardBorder,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
    padding: 16
  },
  lessonFocus: {
    color: palette.secondaryText,
    fontSize: 16,
    marginTop: 4
  },
  lessonId: {
    color: palette.secondaryText,
    fontSize: 14,
    marginBottom: 4
  },
  lessonList: {
    paddingBottom: 12
  },
  lessonName: {
    color: palette.primaryText,
    fontSize: 18,
    fontWeight: '600'
  },
  listTitle: {
    color: palette.primaryText,
    fontSize: 18,
    fontWeight: '600'
  },
  quickActions: {
    columnGap: 12,
    flexDirection: 'row'
  },
  subtitle: {
    color: palette.secondaryText,
    fontSize: 16
  },
  title: {
    color: palette.primaryText,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12
  }
});

export default LessonLauncherScreen;

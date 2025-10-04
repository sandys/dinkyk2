import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getSrsSummary } from '../core/srsLoader';
import { palette, shadowStyles } from '../core/theme';

const DailyReviewScreen: React.FC = () => {
  const summary = React.useMemo(() => getSrsSummary(), []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Daily Review</Text>
        <Text style={styles.body}>
          Review queue analytics, due exercise counts, and FSRS scheduling visuals will display here.
          Next iteration will surface interval projections and error streaks.
        </Text>
        <View style={styles.metricsRow}>
          <View style={styles.metricBlock}>
            <Text style={styles.metricValue}>{summary.dueCount}</Text>
            <Text style={styles.metricLabel}>Due Now</Text>
          </View>
          <View style={styles.metricBlock}>
            <Text style={styles.metricValue}>{summary.newCount}</Text>
            <Text style={styles.metricLabel}>New Today</Text>
          </View>
          <View style={styles.metricBlock}>
            <Text style={styles.metricValue}>{summary.totalCount}</Text>
            <Text style={styles.metricLabel}>Total Cards</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    color: palette.secondaryText,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 24
  },
  card: {
    ...shadowStyles,
    backgroundColor: palette.card,
    borderRadius: 16,
    padding: 24
  },
  container: {
    backgroundColor: palette.background,
    flex: 1,
    padding: 24
  },
  metricBlock: {
    alignItems: 'center'
  },
  metricLabel: {
    color: palette.secondaryText,
    fontSize: 14
  },
  metricValue: {
    color: palette.primaryText,
    fontSize: 28,
    fontWeight: '700'
  },
  metricsRow: {
    columnGap: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: palette.primaryText,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12
  }
});

export default DailyReviewScreen;

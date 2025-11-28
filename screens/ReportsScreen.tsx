import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const dummyWeeklyData = [
  { day: 'Mon', screenTime: '1h 45m', goodPosture: '80%' },
  { day: 'Tue', screenTime: '2h 10m', goodPosture: '75%' },
  { day: 'Wed', screenTime: '1h 30m', goodPosture: '88%' },
  { day: 'Thu', screenTime: '2h 00m', goodPosture: '82%' },
  { day: 'Fri', screenTime: '2h 20m', goodPosture: '70%' },
  { day: 'Sat', screenTime: '2h 45m', goodPosture: '65%' },
  { day: 'Sun', screenTime: '1h 20m', goodPosture: '90%' },
];

export default function ReportsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reports &amp; History</Text>
      <Text style={styles.subtitle}>
        A simple preview of the insights Vertevi Kids will provide about screen
        time and posture.
      </Text>

      {/* Summary cards */}
      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>This week</Text>
          <Text style={styles.summaryValue}>13h 50m</Text>
          <Text style={styles.summaryDetail}>Total screen time</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Good posture</Text>
          <Text style={styles.summaryValue}>79%</Text>
          <Text style={styles.summaryDetail}>Across all sessions</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Weekly overview</Text>
        <Text style={styles.sectionDescription}>
          These values are just example data. Later, Vertevi will show real
          usage and posture trends for your child.
        </Text>

        <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.tableHeaderText]}>Day</Text>
          <Text style={[styles.tableCell, styles.tableHeaderText]}>
            Screen
          </Text>
          <Text style={[styles.tableCell, styles.tableHeaderText]}>
            Good posture
          </Text>
        </View>

        {dummyWeeklyData.map((row) => (
          <View key={row.day} style={styles.tableRow}>
            <Text style={styles.tableCell}>{row.day}</Text>
            <Text style={styles.tableCell}>{row.screenTime}</Text>
            <Text style={styles.tableCell}>{row.goodPosture}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What this will become</Text>
        <Text style={styles.bodyText}>
          In the full Vertevi Kids experience, this screen will show:
        </Text>
        <Text style={styles.bulletText}>
          • Trends in daily and weekly screen time.
        </Text>
        <Text style={styles.bulletText}>
          • How often posture guidance was needed.
        </Text>
        <Text style={styles.bulletText}>
          • Improvements over time as your child builds healthy habits.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: colors.surface,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  summaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  summaryLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  summaryDetail: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },
  section: {
    backgroundColor: colors.background,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  bodyText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  bulletText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 4,
    marginBottom: 4,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 4,
    marginBottom: 4,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    color: colors.textSecondary,
  },
  tableHeaderText: {
    fontWeight: '600',
    color: colors.textPrimary,
  },
});

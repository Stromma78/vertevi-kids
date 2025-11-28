import { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { getAllSessions, SessionSummary } from '../data/sessionStore';

type WeeklyDataRow = {
  day: string;
  screenMinutes: number;
  goodPosturePercent: number;
};

// Example weekly data in numeric form so we can calculate summaries.
// TODO: Replace this with real aggregated data from sessions/settings later.
const dummyWeeklyData: WeeklyDataRow[] = [
  { day: 'Mon', screenMinutes: 105, goodPosturePercent: 80 }, // 1h 45m
  { day: 'Tue', screenMinutes: 130, goodPosturePercent: 75 }, // 2h 10m
  { day: 'Wed', screenMinutes: 90, goodPosturePercent: 88 },  // 1h 30m
  { day: 'Thu', screenMinutes: 120, goodPosturePercent: 82 }, // 2h 00m
  { day: 'Fri', screenMinutes: 140, goodPosturePercent: 70 }, // 2h 20m
  { day: 'Sat', screenMinutes: 165, goodPosturePercent: 65 }, // 2h 45m
  { day: 'Sun', screenMinutes: 80, goodPosturePercent: 90 },  // 1h 20m
];

function formatMinutes(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}h ${minutes.toString().padStart(2, '0')}m`;
}

export default function ReportsScreen() {
  const [sessions, setSessions] = useState<SessionSummary[]>([]);
  const [sessionsLoading, setSessionsLoading] = useState(true);

  // Load saved session summaries
  useEffect(() => {
    const loadSessions = async () => {
      try {
        const all = await getAllSessions();
        setSessions(all);
      } catch (error) {
        console.warn('Failed to load sessions in Reports:', error);
      } finally {
        setSessionsLoading(false);
      }
    };

    loadSessions();
  }, []);

  // Calculate total weekly screen time (dummy data for now)
  const totalScreenMinutes = dummyWeeklyData.reduce(
    (sum, row) => sum + row.screenMinutes,
    0
  );
  const totalScreenTimeLabel = formatMinutes(totalScreenMinutes);

  // Calculate average "good posture" percentage (from dummy weekly data)
  const avgGoodPosture =
    Math.round(
      dummyWeeklyData.reduce(
        (sum, row) => sum + row.goodPosturePercent,
        0
      ) / dummyWeeklyData.length
    );

  // Basic real session stats from sessionStore data
  const totalSessions = sessions.length;
  const distanceCount = sessions.filter((s) => s.type === 'distance').length;
  const postureCount = sessions.filter((s) => s.type === 'posture').length;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reports &amp; History</Text>
      <Text style={styles.subtitle}>
        A simple preview of the insights Vertevi Kids will provide about screen
        time, posture, and sessions over time.
      </Text>

      {/* Real session summary (from sessionStore) */}
      <View style={styles.sessionSummaryCard}>
        <Text style={styles.summaryLabel}>Sessions recorded on this device</Text>
        {sessionsLoading ? (
          <Text style={styles.summaryDetail}>Loading sessions…</Text>
        ) : totalSessions === 0 ? (
          <Text style={styles.summaryDetail}>
            No sessions have been saved yet. Try running Distance Coach or
            Posture Check in Kids Mode.
          </Text>
        ) : (
          <>
            <Text style={styles.summaryValue}>{totalSessions}</Text>
            <Text style={styles.summaryDetail}>
              Distance sessions: {distanceCount}
            </Text>
            <Text style={styles.summaryDetail}>
              Posture sessions: {postureCount}
            </Text>
          </>
        )}
      </View>

      {/* Summary cards from dummy weekly data */}
      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>This week (example)</Text>
          <Text style={styles.summaryValue}>{totalScreenTimeLabel}</Text>
          <Text style={styles.summaryDetail}>Total screen time (dummy)</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Good posture (example)</Text>
          <Text style={styles.summaryValue}>{avgGoodPosture}%</Text>
          <Text style={styles.summaryDetail}>
            Across all sessions (dummy)
          </Text>
        </View>
      </View>

      {/* Weekly overview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Weekly overview (example data)</Text>
        <Text style={styles.sectionDescription}>
          These values are example data. Later, Vertevi will show real usage and
          posture trends for your child based on recorded sessions and settings.
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
            <Text style={styles.tableCell}>
              {formatMinutes(row.screenMinutes)}
            </Text>
            <Text style={styles.tableCell}>
              {row.goodPosturePercent}%
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What this will become</Text>
        <Text style={styles.bodyText}>
          In the full Vertevi Kids experience, this screen will show:
        </Text>
        <Text style={styles.bulletText}>
          • Trends in daily and weekly screen time based on real usage.
        </Text>
        <Text style={styles.bulletText}>
          • How often posture guidance was needed during sessions.
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
  sessionSummaryCard: {
    backgroundColor: colors.background,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
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

import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function ReportsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reports &amp; History</Text>
      <Text style={styles.subtitle}>
        This screen will summarise usage, posture trends, and screen time
        history for your family.
      </Text>
      <Text style={styles.helper}>
        It&apos;s a placeholder while we design the analytics and reporting
        experience for Vertevi Kids.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  helper: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.textSecondary,
  },
});

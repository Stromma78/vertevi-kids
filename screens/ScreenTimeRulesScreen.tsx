import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function ScreenTimeRulesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen Time Rules</Text>
      <Text style={styles.subtitle}>
        Here you&apos;ll be able to define daily limits, time windows, and
        break rules for Vertevi Kids.
      </Text>
      <Text style={styles.helper}>
        This is a shell screen so we can design your screen time controls and
        connect data later.
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

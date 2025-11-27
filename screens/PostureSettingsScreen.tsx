import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function PostureSettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posture Settings</Text>
      <Text style={styles.subtitle}>
        Here you&apos;ll be able to configure posture sensitivity, reminders,
        and recommended height/angle ranges for Vertevi.
      </Text>
      <Text style={styles.helper}>
        For now, this is a placeholder so we can plan the posture configuration
        experience.
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

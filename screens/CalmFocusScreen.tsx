import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function CalmFocusScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calm Focus Mode</Text>
      <Text style={styles.subtitle}>
        This screen will support calm, focused screen time with gentle guidance
        and reminders for healthy habits.
      </Text>
      <Text style={styles.helper}>
        Right now this is a placeholder so we can build and test navigation
        while we design the detailed flow.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
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

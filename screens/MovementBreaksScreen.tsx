import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function MovementBreaksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movement Breaks</Text>
      <Text style={styles.subtitle}>
        This screen will offer short movement breaks and stretches to help kids
        reset their posture and reduce sitting time.
      </Text>
      <Text style={styles.helper}>
        For now, it is a shell screen so we can design the experience and
        connect navigation from Kids Mode.
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

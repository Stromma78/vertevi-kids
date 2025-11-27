import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function PostureCheckScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Posture Check</Text>
      <Text style={styles.subtitle}>
        This screen will guide kids through simple posture checks to keep their
        head, neck, and shoulders in a healthy position.
      </Text>
      <Text style={styles.helper}>
        At the moment this is a placeholder so we can design and test the flow
        before wiring in the real posture tracking logic.
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

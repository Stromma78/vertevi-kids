import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function DistanceCoachScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen Distance Coach</Text>
      <Text style={styles.subtitle}>
        This is where Vertevi Kids will guide your child to keep a healthy
        distance from the screen using the Vertevi stand.
      </Text>
      <Text style={styles.helper}>
        For now this is just a shell screen so we can design the flow and
        navigation structure.
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

import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function DeviceProfilesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Profiles</Text>
      <Text style={styles.subtitle}>
        This section will let you add and manage different devices and profiles
        for each child.
      </Text>
      <Text style={styles.helper}>
        It&apos;s a shell screen for now so we can define how Vertevi Kids
        supports multiple devices and users.
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

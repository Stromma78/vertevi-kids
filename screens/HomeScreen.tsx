import { View, Text, Button, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

type HomeScreenProps = {
  navigation: any;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Vertevi Kids</Text>
      <Text style={styles.tagline}>
        Healthy screen habits for growing necks, backs, and brains.
      </Text>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>What Vertevi Kids helps with</Text>
        <Text style={styles.infoText}>
          Vertevi Kids is designed to support better posture, healthier screen
          distance, and regular movement breaks while your child uses their
          device.
        </Text>
      </View>

      <View style={styles.actionsContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>For kids</Text>
          <View style={styles.buttonWrapper}>
            <Button
              title="Enter Kids Mode"
              onPress={() => navigation.navigate('KidsMode')}
              color={colors.primary}
            />
          </View>
          <Text style={styles.sectionHint}>
            Guided activities to help kids sit well, move often, and stay at a
            healthy distance from the screen.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionLabel}>For parents</Text>
          <View style={styles.buttonWrapper}>
            <Button
              title="Parent Area"
              onPress={() => navigation.navigate('ParentPin')}
              color={colors.secondary}
            />
          </View>
          <Text style={styles.sectionHint}>
            Set screen time rules, posture guidance settings, device profiles,
            and view reports on healthy habits.
          </Text>
        </View>
      </View>

      <Text style={styles.footerText}>
        This is an early preview of the Vertevi Kids experience. Settings and
        data are stored only on this device for now.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  appName: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 24,
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 24,
    width: '100%',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  actionsContainer: {
    width: '100%',
    marginBottom: 24,
  },
  section: {
    marginBottom: 16,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 8,
  },
  buttonWrapper: {
    width: '70%',
    alignSelf: 'center',
    marginBottom: 8,
  },
  sectionHint: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 11,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 8,
  },
});

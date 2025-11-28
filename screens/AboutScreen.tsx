import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { APP_VERSION } from '../config/appConfig';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Vertevi Kids</Text>
      <Text style={styles.subtitle}>
        Helping kids build healthy screen habits, with or without a stand.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What Vertevi Kids does</Text>
        <Text style={styles.bodyText}>
          Vertevi Kids is designed to support healthier screen use for children
          by guiding three key habits:
        </Text>
        <Text style={styles.bulletText}>
          • Keeping a healthy distance from the screen.
        </Text>
        <Text style={styles.bulletText}>
          • Sitting with better posture over time.
        </Text>
        <Text style={styles.bulletText}>
          • Taking regular movement breaks and reset moments.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Works on any device</Text>
        <Text style={styles.bodyText}>
          Vertevi Kids is being built first as a software experience that works
          on any compatible phone or tablet. The goal is for families to use it
          even if they:
        </Text>
        <Text style={styles.bulletText}>
          • Do not have a special stand.
        </Text>
        <Text style={styles.bulletText}>
          • Use a generic stand or case.
        </Text>
        <Text style={styles.bulletText}>
          • Sometimes hold the device in their hands.
        </Text>
        <Text style={styles.bodyText}>
          When camera-based detection is added, the app will use the device
          camera to give live posture and distance guidance wherever possible.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Future Vertevi stand integration</Text>
        <Text style={styles.bodyText}>
          The Vertevi stand is planned as an optional upgrade: it can make it
          easier to keep screens at the right height and distance, and may
          unlock more precise guidance. However, Vertevi Kids is being designed
          so that the core coaching features still make sense without the stand.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Designed for kids and parents</Text>
        <Text style={styles.bodyText}>
          Vertevi Kids aims to feel fun and friendly for children while giving
          parents clear, simple controls:
        </Text>
        <Text style={styles.bulletText}>
          • Parent-only area protected by a PIN.
        </Text>
        <Text style={styles.bulletText}>
          • Screen time rules, posture settings, and profiles per child.
        </Text>
        <Text style={styles.bulletText}>
          • Reports that help you see how habits improve over time.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Important note</Text>
        <Text style={styles.bodyText}>
          Vertevi Kids is a wellbeing tool and does not replace professional
          medical advice. It is designed to support healthier everyday habits
          around screens, not to diagnose or treat any condition.
        </Text>
        <Text style={styles.bodyText}>
          This is an early preview of the Vertevi Kids experience. Settings and
          data are currently stored only on this device.
        </Text>
      </View>

      <Text style={styles.versionText}>
        Vertevi Kids version {APP_VERSION}
      </Text>
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
  versionText: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 16,
  },
});

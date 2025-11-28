import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Vertevi Kids</Text>
      <Text style={styles.subtitle}>
        Helping kids build healthy screen habits, one session at a time.
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
        <Text style={styles.sectionTitle}>How it works (future vision)</Text>
        <Text style={styles.bodyText}>
          As Vertevi Kids develops, it will connect with the Vertevi stand and
          camera-based posture detection to:
        </Text>
        <Text style={styles.bulletText}>
          • Gently prompt kids when they sit too close to the screen.
        </Text>
        <Text style={styles.bulletText}>
          • Offer simple posture checks and reminders.
        </Text>
        <Text style={styles.bulletText}>
          • Trigger movement breaks during longer sessions.
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
      </View>
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
});

import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../theme/colors';

type KidsModeScreenProps = {
  navigation: any;
};

const activities = [
  {
    key: 'DistanceCoach',
    title: 'Screen Distance Coach',
    description: 'Helps you sit the right distance from your screen.',
  },
  {
    key: 'PostureCheck',
    title: 'Posture Check',
    description: 'Quick check to help your head, neck and shoulders.',
  },
  {
    key: 'MovementBreaks',
    title: 'Movement Breaks',
    description: 'Short moves and stretches between screen time.',
  },
  {
    key: 'CalmFocus',
    title: 'Calm Focus Mode',
    description: 'Helps you get calm and ready to focus.',
  },
];

export default function KidsModeScreen({ navigation }: KidsModeScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kids Mode</Text>
      <Text style={styles.subtitle}>
        Choose an activity to help your body feel better while you use your
        device.
      </Text>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>How to use this</Text>
        <Text style={styles.infoText}>
          Pick one activity at a time. Vertevi Kids will guide you through a
          short session – you can do these before or during screen time to keep
          your neck, back and eyes healthier.
        </Text>
      </View>

      <View style={styles.grid}>
        {activities.map((activity) => (
          <Pressable
            key={activity.key}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
            onPress={() => navigation.navigate(activity.key)}
          >
            <Text style={styles.cardTitle}>{activity.title}</Text>
            <Text style={styles.cardDescription}>
              {activity.description}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.footerText}>
        This is an early preview of Kids Mode. In the future these activities
        will use the camera (and optionally the Vertevi stand) to give live
        feedback and rewards.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 8,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 16,
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
  grid: {
    gap: 16,
    marginTop: 8,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardPressed: {
    opacity: 0.85,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: colors.textPrimary,
  },
  cardDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  footerText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 24,
    textAlign: 'center',
  },
});

import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../theme/colors';

type KidsModeScreenProps = {
  navigation: any;
};

const activities = [
  {
    key: 'DistanceCoach',
    title: 'Screen Distance Coach',
    description: 'Helps your child keep a healthy distance from the screen.',
  },
  {
    key: 'PostureCheck',
    title: 'Posture Check',
    description: 'Guided posture checks for head, neck and shoulders.',
  },
  {
    key: 'MovementBreaks',
    title: 'Movement Breaks',
    description: 'Short movement and stretch breaks between screen sessions.',
  },
  {
    key: 'CalmFocus',
    title: 'Calm Focus Mode',
    description:
      'Supports calm, focused screen time with gentle visual prompts.',
  },
];

export default function KidsModeScreen({ navigation }: KidsModeScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kids Mode</Text>
      <Text style={styles.subtitle}>
        Choose an activity to get started with healthy screen habits.
      </Text>

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
    marginBottom: 24,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  grid: {
    gap: 16,
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
});

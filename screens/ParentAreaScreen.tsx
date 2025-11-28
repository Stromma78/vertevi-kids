import { ScrollView, View, Text, StyleSheet, Pressable } from 'react-native';
import { colors } from '../theme/colors';

type ParentAreaScreenProps = {
  navigation: any;
};

const sections = [
  {
    key: 'ScreenTimeRules',
    title: 'Screen Time Rules',
    description: 'Set daily limits, time windows, and break reminders.',
  },
  {
    key: 'PostureSettings',
    title: 'Posture Settings',
    description: 'Configure posture guidance sensitivity and reminders.',
  },
  {
    key: 'DeviceProfiles',
    title: 'Device Profiles',
    description: 'Manage devices and profiles for each child.',
  },
  {
    key: 'Reports',
    title: 'Reports & History',
    description: 'View trends in screen time and posture over time.',
  },
  {
    key: 'About',
    title: 'About Vertevi Kids',
    description: 'See what Vertevi Kids is designed to do.',
  },
];

export default function ParentAreaScreen({ navigation }: ParentAreaScreenProps) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Parent Area</Text>
      <Text style={styles.subtitle}>
        Configure Vertevi Kids for your family and review insights.
      </Text>

      <View style={styles.sectionList}>
        {sections.map((section) => (
          <Pressable
            key={section.key}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
            onPress={() => navigation.navigate(section.key)}
          >
            <Text style={styles.cardTitle}>{section.title}</Text>
            <Text style={styles.cardDescription}>
              {section.description}
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
  sectionList: {
    gap: 16,
  },
  card: {
    backgroundColor: colors.background,
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

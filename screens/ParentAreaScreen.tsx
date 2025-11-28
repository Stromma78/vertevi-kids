import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../theme/colors';
import {
  SCREEN_TIME_RULES_KEY,
  POSTURE_SETTINGS_KEY,
} from '../config/storageKeys';

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
  {
    key: 'CameraTest',
    title: 'Camera Test (preview)',
    description: 'Check camera access and a simple live preview.',
  },
];

export default function ParentAreaScreen({ navigation }: ParentAreaScreenProps) {
  const handleClearSavedSettings = async () => {
    try {
      await AsyncStorage.multiRemove([
        SCREEN_TIME_RULES_KEY,
        POSTURE_SETTINGS_KEY,
      ]);
      alert('Saved Screen Time Rules and Posture Settings cleared on this device.');
    } catch (error) {
      console.warn('Failed to clear saved parent settings:', error);
      alert('There was a problem clearing the saved settings. Please try again.');
    }
  };

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

      {/* Developer tools – for testing only, easy to remove later */}
      <View style={styles.devSection}>
        <Text style={styles.devTitle}>Developer tools</Text>
        <Text style={styles.devText}>
          For testing only. This clears saved Screen Time Rules and Posture Settings
          on this device so you can try different scenarios.
        </Text>
        <View style={styles.devButtonWrapper}>
          <Button
            title="Clear saved parent settings"
            onPress={handleClearSavedSettings}
            color={colors.secondary}
          />
        </View>
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
    marginBottom: 24,
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
  devSection: {
    backgroundColor: colors.background,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  devTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  devText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  devButtonWrapper: {
    width: '80%',
    alignSelf: 'center',
  },
});

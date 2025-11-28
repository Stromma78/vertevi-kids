import { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Switch,
  Pressable,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../theme/colors';
import { POSTURE_SETTINGS_KEY } from '../config/storageKeys';

type SensitivityLevel = 'low' | 'medium' | 'high';

type StoredPostureSettings = {
  guidanceEnabled: boolean;
  remindersEnabled: boolean;
  gentleModeEnabled: boolean;
  sensitivity: SensitivityLevel;
};

export default function PostureSettingsScreen() {
  const [guidanceEnabled, setGuidanceEnabled] = useState(true);
  const [remindersEnabled, setRemindersEnabled] = useState(true);
  const [gentleModeEnabled, setGentleModeEnabled] = useState(true);
  const [sensitivity, setSensitivity] =
    useState<SensitivityLevel>('medium');
  const [isLoading, setIsLoading] = useState(true);

  const reminderFrequencyLabel = 'Every 10 minutes';

  // Load saved settings on mount
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const json = await AsyncStorage.getItem(POSTURE_SETTINGS_KEY);
        if (json) {
          const stored: StoredPostureSettings = JSON.parse(json);
          setGuidanceEnabled(stored.guidanceEnabled);
          setRemindersEnabled(stored.remindersEnabled);
          setGentleModeEnabled(stored.gentleModeEnabled);
          setSensitivity(stored.sensitivity);
        }
      } catch (error) {
        console.warn('Failed to load posture settings:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadSettings();
  }, []);

  const handleSave = async () => {
    const data: StoredPostureSettings = {
      guidanceEnabled,
      remindersEnabled,
      gentleModeEnabled,
      sensitivity,
    };

    try {
      await AsyncStorage.setItem(
        POSTURE_SETTINGS_KEY,
        JSON.stringify(data)
      );
      alert('Posture settings saved on this device.');
    } catch (error) {
      console.warn('Failed to save posture settings:', error);
      alert('There was a problem saving the settings. Please try again.');
    }
  };

  const renderSensitivityChip = (
    level: SensitivityLevel,
    label: string
  ) => {
    const isActive = sensitivity === level;
    return (
      <Pressable
        onPress={() => setSensitivity(level)}
        style={[
          styles.chip,
          isActive && styles.chipActive,
        ]}
      >
        <Text
          style={[
            styles.chipText,
            isActive && styles.chipTextActive,
          ]}
        >
          {label}
        </Text>
      </Pressable>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>
          Loading posture settings…
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Posture Settings</Text>
      <Text style={styles.subtitle}>
        Configure how Vertevi Kids guides posture and how often it offers
        reminders.
      </Text>

      {/* Posture guidance master switch */}
      <View style={styles.section}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Posture guidance</Text>
          <Switch
            value={guidanceEnabled}
            onValueChange={setGuidanceEnabled}
            trackColor={{ false: '#ccc', true: colors.primary }}
            thumbColor={guidanceEnabled ? colors.onPrimary : '#f4f3f4'}
          />
        </View>
        <Text style={styles.sectionDescription}>
          When enabled, Vertevi Kids will gently guide your child to keep
          head, neck, and shoulders in a healthy position.
        </Text>
      </View>

      {/* Sensitivity level */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sensitivity level</Text>
        <Text style={styles.sectionDescription}>
          Choose how quickly Vertevi responds when posture starts to drift.
        </Text>

        <View style={styles.chipRow}>
          {renderSensitivityChip('low', 'Low')}
          {renderSensitivityChip('medium', 'Medium')}
          {renderSensitivityChip('high', 'High')}
        </View>

        <Text style={styles.helperText}>
          Later on, this will adjust how strict Vertevi is about posture
          changes before showing guidance.
        </Text>
      </View>

      {/* Reminder frequency */}
      <View style={styles.section}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Posture reminders</Text>
          <Switch
            value={remindersEnabled}
            onValueChange={setRemindersEnabled}
            trackColor={{ false: '#ccc', true: colors.primary }}
            thumbColor={remindersEnabled ? colors.onPrimary : '#f4f3f4'}
          />
        </View>

        <Text style={styles.sectionDescription}>
          Set how often Vertevi gently reminds your child to reset posture
          during longer sessions.
        </Text>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Frequency</Text>
          <Text style={styles.settingValue}>{reminderFrequencyLabel}</Text>
        </View>

        <Text style={styles.helperText}>
          In a future version, parents will be able to choose different
          reminder timings for different profiles.
        </Text>
      </View>

      {/* Gentle vs strict mode */}
      <View style={styles.section}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Gentle mode</Text>
          <Switch
            value={gentleModeEnabled}
            onValueChange={setGentleModeEnabled}
            trackColor={{ false: '#ccc', true: colors.primary }}
            thumbColor={gentleModeEnabled ? colors.onPrimary : '#f4f3f4'}
          />
        </View>

        <Text style={styles.sectionDescription}>
          In gentle mode, Vertevi uses softer prompts and fewer alerts. Turn
          this off for stricter posture coaching.
        </Text>

        <Text style={styles.helperText}>
          We can later connect this to different notification styles,
          vibrations, or sound cues depending on what works for your family.
        </Text>
      </View>

      {/* Save button */}
      <View style={styles.saveButtonWrapper}>
        <Button
          title="Save posture settings"
          onPress={handleSave}
          color={colors.primary}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  loadingText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
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
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  sectionDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  chipRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  chip: {
    flex: 1,
    marginHorizontal: 4,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  chipActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primaryDark,
  },
  chipText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  chipTextActive: {
    color: colors.onPrimary,
    fontWeight: '600',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  settingLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  settingValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  helperText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 8,
  },
  saveButtonWrapper: {
    marginTop: 24,
    marginBottom: 40,
    width: '80%',
    alignSelf: 'center',
  },
});

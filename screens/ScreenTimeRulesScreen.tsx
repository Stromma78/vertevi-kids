import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Button,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../theme/colors';

const STORAGE_KEY = 'vertevi:screenTimeRules';

type StoredRules = {
  limitsEnabled: boolean;
  breaksEnabled: boolean;
  eveningBlockEnabled: boolean;
};

export default function ScreenTimeRulesScreen() {
  const [limitsEnabled, setLimitsEnabled] = useState(true);
  const [breaksEnabled, setBreaksEnabled] = useState(true);
  const [eveningBlockEnabled, setEveningBlockEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // These are just placeholders for now – later we can make real controls.
  const dailyLimitLabel = '2 hours total';
  const breakFrequencyLabel = 'Every 20 minutes';
  const eveningBlockLabel = 'After 8:00 pm';

  // Load saved settings on mount
  useEffect(() => {
    const loadRules = async () => {
      try {
        const json = await AsyncStorage.getItem(STORAGE_KEY);
        if (json) {
          const stored: StoredRules = JSON.parse(json);
          setLimitsEnabled(stored.limitsEnabled);
          setBreaksEnabled(stored.breaksEnabled);
          setEveningBlockEnabled(stored.eveningBlockEnabled);
        }
      } catch (error) {
        console.warn('Failed to load screen time rules:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadRules();
  }, []);

  const handleSave = async () => {
    const data: StoredRules = {
      limitsEnabled,
      breaksEnabled,
      eveningBlockEnabled,
    };

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      alert('Screen time rules saved on this device.');
    } catch (error) {
      console.warn('Failed to save screen time rules:', error);
      alert('There was a problem saving the rules. Please try again.');
    }
  };

  // While loading, we can show a simple placeholder.
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading screen time rules…</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Screen Time Rules</Text>
      <Text style={styles.subtitle}>
        Configure simple rules that Vertevi Kids will follow when your child is
        using their device.
      </Text>

      {/* Daily limit section */}
      <View style={styles.section}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Daily time limit</Text>
          <Switch
            value={limitsEnabled}
            onValueChange={setLimitsEnabled}
            trackColor={{ false: '#ccc', true: colors.primary }}
            thumbColor={limitsEnabled ? colors.onPrimary : '#f4f3f4'}
          />
        </View>

        <Text style={styles.sectionDescription}>
          Set the maximum amount of screen time Vertevi will allow each day.
        </Text>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Limit</Text>
          <Text style={styles.settingValue}>{dailyLimitLabel}</Text>
        </View>

        <Text style={styles.helperText}>
          In a future version you&apos;ll be able to adjust this limit directly
          and sync it with your child&apos;s profile.
        </Text>
      </View>

      {/* Breaks section */}
      <View style={styles.section}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Break reminders</Text>
          <Switch
            value={breaksEnabled}
            onValueChange={setBreaksEnabled}
            trackColor={{ false: '#ccc', true: colors.primary }}
            thumbColor={breaksEnabled ? colors.onPrimary : '#f4f3f4'}
          />
        </View>

        <Text style={styles.sectionDescription}>
          Encourage short movement breaks to reset posture and rest eyes.
        </Text>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Frequency</Text>
          <Text style={styles.settingValue}>{breakFrequencyLabel}</Text>
        </View>

        <Text style={styles.helperText}>
          Later on, Vertevi Kids will use this to trigger Movement Breaks during
          longer sessions.
        </Text>
      </View>

      {/* Evening rules section */}
      <View style={styles.section}>
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Evening screen rules</Text>
          <Switch
            value={eveningBlockEnabled}
            onValueChange={setEveningBlockEnabled}
            trackColor={{ false: '#ccc', true: colors.primary }}
            thumbColor={eveningBlockEnabled ? colors.onPrimary : '#f4f3f4'}
          />
        </View>

        <Text style={styles.sectionDescription}>
          Optional rule to limit screen time later in the evening.
        </Text>

        <View style={styles.settingRow}>
          <Text style={styles.settingLabel}>Block after</Text>
          <Text style={styles.settingValue}>{eveningBlockLabel}</Text>
        </View>

        <Text style={styles.helperText}>
          In the future this will integrate with your child&apos;s profile so
          Vertevi can avoid late-night sessions.
        </Text>
      </View>

      {/* Save button */}
      <View style={styles.saveButtonWrapper}>
        <Button
          title="Save screen time rules"
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

import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Button,
  ScrollView,
} from 'react-native';
import { colors } from '../theme/colors';

export default function ScreenTimeRulesScreen() {
  const [limitsEnabled, setLimitsEnabled] = useState(true);
  const [breaksEnabled, setBreaksEnabled] = useState(true);
  const [eveningBlockEnabled, setEveningBlockEnabled] = useState(false);

  // These are just placeholders for now – later we can make real controls.
  const dailyLimitLabel = '2 hours total';
  const breakFrequencyLabel = 'Every 20 minutes';
  const eveningBlockLabel = 'After 8:00 pm';

  const handleSave = () => {
    // For now we just show a simple message. Later this would save to real storage / backend.
    alert('Screen time rules saved (placeholder).');
  };

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

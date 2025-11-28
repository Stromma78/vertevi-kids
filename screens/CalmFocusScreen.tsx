import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { colors } from '../theme/colors';

type CalmState = 'idle' | 'running' | 'complete';

export default function CalmFocusScreen() {
  const [state, setState] = useState<CalmState>('idle');

  const handleStart = () => {
    // TODO: Integration point – when calm focus content is implemented:
    // - Start a calm-focus session here.
    // - Begin a short sequence (e.g. breathing, grounding, posture reminders).
    // - Optionally log that a calm focus session was started.
    setState('running');
  };

  const handleFinish = () => {
    // TODO: Integration point – when calm focus metrics are added:
    // - Mark this session as completed.
    // - Track how long the child stayed in calm focus mode.
    // - Summarise this info for parent Reports.
    setState('complete');
  };

  const handleReset = () => {
    // TODO: Integration point – if we later track calm focus streaks:
    // - Reset in-memory session stats here, if needed.
    setState('idle');
  };

  return (
    <View style={styles.container}>
      {state === 'idle' && (
        <>
          <Text style={styles.title}>Calm Focus Mode</Text>
          <Text style={styles.subtitle}>
            Help your child settle into calm, focused screen time with gentle
            guidance.
          </Text>
          <Text style={styles.body}>
            When you tap &quot;Start calm focus&quot;, Vertevi Kids will guide a
            short, quiet settling routine. In the future this screen can include
            breathing prompts, soft cues, and posture-friendly focus tips.
          </Text>

          {/* TODO: Integration point – calm focus routine selection.
              - Choose different types of calm routines (e.g. breathing, visual focus, listening).
              - This could later be personalised per child.
          */}

          <View style={styles.buttonWrapper}>
            <Button
              title="Start calm focus"
              onPress={handleStart}
              color={colors.primary}
            />
          </View>
        </>
      )}

      {state === 'running' && (
        <>
          <Text style={styles.title}>Calm focus in progress</Text>
          <Text style={styles.subtitle}>
            Imagine Vertevi now guiding a short sequence of calm, screen-ready
            moments.
          </Text>
          <Text style={styles.body}>
            In the real app this might include simple breathing exercises,
            reminders to relax shoulders, and gentle prompts to keep the screen
            at a good distance while staying focused.
          </Text>

          {/* TODO: Integration point – calm focus step UI.
              - Show the current step in the calm routine.
              - Optionally show a timer or simple animation for breathing.
              - Keep the visuals simple to avoid overstimulating the child.
          */}

          <View style={styles.buttonWrapper}>
            <Button
              title="End calm focus"
              onPress={handleFinish}
              color={colors.secondary}
            />
          </View>
        </>
      )}

      {state === 'complete' && (
        <>
          <Text style={styles.title}>Calm focus complete</Text>
          <Text style={styles.subtitle}>
            Great work. Your child is ready for focused, healthy screen time.
          </Text>
          <Text style={styles.body}>
            Later on, Vertevi Kids can track how often calm focus sessions are
            used and show parents how they support better posture and attention
            over time.
          </Text>

          {/* TODO: Integration point – calm focus summary & rewards.
              - Show a simple summary of the calm focus session.
              - Optionally award a small badge or encouragement for using calm focus.
              - Feed session info into the Reports & History data.
          */}

          <View style={styles.buttonRow}>
            <View className="buttonHalf" style={styles.buttonHalf}>
              <Button
                title="Start another calm focus"
                onPress={handleStart}
                color={colors.primary}
              />
            </View>
            <View className="buttonHalf" style={styles.buttonHalf}>
              <Button
                title="Back to start"
                onPress={handleReset}
                color={colors.secondary}
              />
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
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
    marginBottom: 16,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  body: {
    fontSize: 14,
    marginBottom: 24,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  buttonWrapper: {
    width: '60%',
  },
  buttonRow: {
    flexDirection: 'row',
    width: '80%',
    gap: 12,
    justifyContent: 'center',
  },
  buttonHalf: {
    flex: 1,
  },
});

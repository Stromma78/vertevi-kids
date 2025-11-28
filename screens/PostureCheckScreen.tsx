import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { colors } from '../theme/colors';
import { saveSession } from '../data/sessionStore';

type PostureState = 'idle' | 'running' | 'complete';

export default function PostureCheckScreen() {
  const [state, setState] = useState<PostureState>('idle');

  const handleStart = () => {
    // TODO: Integration point – when Vertevi posture detection is available:
    // - Start a posture monitoring session here.
    // - Subscribe to posture events (e.g. head tilt, slouching, shoulder hunch).
    // - Prepare to show live prompts based on those events.
    setState('running');
  };

  const handleFinish = async () => {
    // TODO: Integration point – when we summarise posture data:
    // - Stop posture monitoring.
    // - Compute simple metrics (e.g. % correct posture during the check).
    // - Save a summary entry for parent Reports.

    // Save a very simple session summary for now.
    await saveSession({
      type: 'posture',
      timestamp: Date.now(),
      durationMinutes: 0,
      notes: 'Posture Check session completed (placeholder summary).',
    });

    setState('complete');
  };

  const handleReset = () => {
    // TODO: Integration point – if we later track per-session history:
    // - Reset any in-memory posture stats here.
    setState('idle');
  };

  return (
    <View style={styles.container}>
      {state === 'idle' && (
        <>
          <Text style={styles.title}>Posture Check</Text>
          <Text style={styles.subtitle}>
            Vertevi Kids will guide your child to sit with a healthy head, neck,
            and shoulder posture.
          </Text>
          <Text style={styles.body}>
            When you tap &quot;Start posture check&quot;, we&apos;ll walk
            through a simple sequence. In the future this screen will connect to
            Vertevi and camera-based posture tracking for live feedback.
          </Text>

          <View style={styles.buttonWrapper}>
            <Button
              title="Start posture check"
              onPress={handleStart}
              color={colors.primary}
            />
          </View>
        </>
      )}

      {state === 'running' && (
        <>
          <Text style={styles.title}>Posture check in progress</Text>
          <Text style={styles.subtitle}>
            Imagine Vertevi is now checking head position, neck angle, and
            shoulder alignment.
          </Text>
          <Text style={styles.body}>
            In the real app this is where we will show prompts like &quot;Lift
            your chin a little&quot;, &quot;Relax your shoulders&quot;, or
            &quot;Lean back slightly&quot; based on posture data.
          </Text>

          {/* TODO: Integration point – live posture feedback UI.
              - Replace this static text with:
                - Visual indicators for head/neck/shoulders (e.g. simple icons).
                - Clear feedback when posture goes out of range.
                - Positive reinforcement when posture is corrected.
          */}

          <View style={styles.buttonWrapper}>
            <Button
              title="Finish check"
              onPress={handleFinish}
              color={colors.secondary}
            />
          </View>
        </>
      )}

      {state === 'complete' && (
        <>
          <Text style={styles.title}>Posture check complete</Text>
          <Text style={styles.subtitle}>
            This is where we will summarise how your child&apos;s posture looked
            during the check.
          </Text>
          <Text style={styles.body}>
            Later on, you might see suggestions for improvement, badges for
            great posture, and trends over time that parents can view in the
            reports section.
          </Text>

          {/* TODO: Integration point – posture summary & trends.
              - Show simple bullet points for what went well and what can improve.
              - Display a friendly score or badge to motivate kids.
              - Send a copy of this summary into the Reports & History data.
          */}

          <View style={styles.buttonRow}>
            <View style={styles.buttonHalf}>
              <Button
                title="Check again"
                onPress={handleStart}
                color={colors.primary}
              />
            </View>
            <View style={styles.buttonHalf}>
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

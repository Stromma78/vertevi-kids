import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { colors } from '../theme/colors';
import { saveSession } from '../data/sessionStore';

type SessionState = 'idle' | 'running' | 'complete';

export default function DistanceCoachScreen() {
  const [state, setState] = useState<SessionState>('idle');

  const handleStart = () => {
    // TODO: Integration point – when we connect to the Vertevi stand and camera:
    // - Start a "distance monitoring" session here.
    // - Subscribe to distance events (e.g. too close / too far).
    // - Trigger visual feedback to the child based on those events.
    setState('running');
  };

  const handleFinish = async () => {
    // TODO: Integration point – when analytics are added:
    // - Stop distance monitoring.
    // - Summarise how long the child stayed in the "healthy" range.
    // - Send summary data to the parent reports backend.

    // Save a very simple session summary for now.
    await saveSession({
      type: 'distance',
      timestamp: Date.now(),
      // durationMinutes can be computed later; 0 is just a placeholder.
      durationMinutes: 0,
      notes: 'Distance Coach session completed (placeholder summary).',
    });

    setState('complete');
  };

  const handleReset = () => {
    // TODO: Integration point – if we add session history per child:
    // - Consider resetting local in-memory session stats here.
    setState('idle');
  };

  return (
    <View style={styles.container}>
      {state === 'idle' && (
        <>
          <Text style={styles.title}>Screen Distance Coach</Text>
          <Text style={styles.subtitle}>
            Vertevi Kids will help your child sit at a healthy distance from
            the screen.
          </Text>
          <Text style={styles.body}>
            When you tap &quot;Start coaching&quot;, we will guide your child
            through a short session that encourages the right viewing distance.
            In the future this screen will connect to the Vertevi stand and
            camera to give live feedback.
          </Text>

          <View style={styles.buttonWrapper}>
            <Button
              title="Start coaching"
              onPress={handleStart}
              color={colors.primary}
            />
          </View>
        </>
      )}

      {state === 'running' && (
        <>
          <Text style={styles.title}>Coaching in progress</Text>
          <Text style={styles.subtitle}>
            Imagine Vertevi is now checking the distance and guiding your child.
          </Text>
          <Text style={styles.body}>
            In the real app this is where we will show live feedback like
            &quot;Move back a little&quot; or &quot;Great distance&quot; based
            on what the stand and camera can detect.
          </Text>

          {/* TODO: Integration point – live distance feedback UI.
              - Replace this static text with dynamic UI that:
                - Shows current distance (e.g. near / ideal / far).
                - Animates when the child moves back into a healthy zone.
                - Possibly uses a fun avatar or colour coding.
          */}

          <View style={styles.buttonRow}>
            <View style={styles.buttonHalf}>
              <Button
                title="End session"
                onPress={handleFinish}
                color={colors.secondary}
              />
            </View>
          </View>
        </>
      )}

      {state === 'complete' && (
        <>
          <Text style={styles.title}>Session complete</Text>
          <Text style={styles.subtitle}>
            This is where we will summarise how the session went.
          </Text>
          <Text style={styles.body}>
            In the future you might see things like how long your child kept a
            good distance, gentle suggestions for improvement, and rewards for
            healthy habits.
          </Text>

          {/* TODO: Integration point – summary / rewards.
              - Show actual metrics from the distance session (e.g. % of time at good distance).
              - Display badges or stars for kids.
              - Send a condensed summary to the parent Reports screen.
          */}

          <View style={styles.buttonRow}>
            <View style={styles.buttonHalf}>
              <Button
                title="Start another session"
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

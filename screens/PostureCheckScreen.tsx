import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { colors } from '../theme/colors';

type PostureState = 'idle' | 'running' | 'complete';

export default function PostureCheckScreen() {
  const [state, setState] = useState<PostureState>('idle');

  const handleStart = () => {
    setState('running');
  };

  const handleFinish = () => {
    setState('complete');
  };

  const handleReset = () => {
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

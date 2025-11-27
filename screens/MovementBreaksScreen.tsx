import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { colors } from '../theme/colors';

type MovementState = 'idle' | 'running' | 'complete';

export default function MovementBreaksScreen() {
  const [state, setState] = useState<MovementState>('idle');

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
          <Text style={styles.title}>Movement Breaks</Text>
          <Text style={styles.subtitle}>
            Short movement breaks help reset posture and reduce sitting time.
          </Text>
          <Text style={styles.body}>
            When you tap &quot;Start movement break&quot;, we&apos;ll walk
            through a simple sequence. In the future, this screen will guide
            your child through kid-friendly stretches that work alongside the
            Vertevi stand.
          </Text>

          <View style={styles.buttonWrapper}>
            <Button
              title="Start movement break"
              onPress={handleStart}
              color={colors.primary}
            />
          </View>
        </>
      )}

      {state === 'running' && (
        <>
          <Text style={styles.title}>Movement break in progress</Text>
          <Text style={styles.subtitle}>
            Imagine Vertevi now guiding a short series of movements and
            stretches.
          </Text>
          <Text style={styles.body}>
            In the real app this is where we will show step-by-step prompts
            like &quot;Stand up and reach for the sky&quot;, &quot;Roll your
            shoulders&quot;, and &quot;Take a few big, slow breaths&quot;,
            with simple timers or progress indicators.
          </Text>

          <View style={styles.buttonWrapper}>
            <Button
              title="Finish break"
              onPress={handleFinish}
              color={colors.secondary}
            />
          </View>
        </>
      )}

      {state === 'complete' && (
        <>
          <Text style={styles.title}>Nice work!</Text>
          <Text style={styles.subtitle}>
            Movement break complete. Little resets like this support healthy
            posture and focus.
          </Text>
          <Text style={styles.body}>
            Later on, Vertevi Kids can celebrate these breaks with rewards and
            show parents how often movement breaks are taken across the day.
          </Text>

          <View style={styles.buttonRow}>
            <View style={styles.buttonHalf}>
              <Button
                title="Do another break"
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

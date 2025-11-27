import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function ParentPinScreen({ navigation }) {
  const [pin, setPin] = useState('');
  const correctPin = '1234';

  const handleSubmit = () => {
    if (pin === correctPin) {
      navigation.replace('ParentArea');
    } else {
      // Simple feedback for now; we can add more visual feedback later
      alert('Incorrect PIN. Try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Parent Access</Text>
        <Text style={styles.subtitle}>Enter your 4-digit PIN</Text>

        <TextInput
          style={styles.input}
          value={pin}
          onChangeText={setPin}
          keyboardType="numeric"
          secureTextEntry
          maxLength={4}
        />

        <View style={styles.buttonWrapper}>
          <Button
            title="Enter"
            onPress={handleSubmit}
            color={colors.primary}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    maxWidth: 380,
    backgroundColor: colors.background,
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  input: {
    width: '60%',
    height: 50,
    borderColor: colors.border,
    borderWidth: 1,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 10,
    color: colors.textPrimary,
  },
  buttonWrapper: {
    width: '60%',
  },
});

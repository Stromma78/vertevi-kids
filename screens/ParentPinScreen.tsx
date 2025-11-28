import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import { PARENT_PIN } from '../config/appConfig';

export default function ParentPinScreen({ navigation }) {
  const [pin, setPin] = useState('');

  const handleSubmit = () => {
    if (pin === PARENT_PIN) {
      // If the PIN is correct, go to the Parent Area.
      navigation.replace('ParentArea');
    } else {
      alert('Incorrect PIN. Try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parent Access</Text>
      <Text style={styles.subtitle}>Enter your {PARENT_PIN.length}-digit PIN</Text>

      <TextInput
        style={styles.input}
        value={pin}
        onChangeText={setPin}
        keyboardType="numeric"
        secureTextEntry
        maxLength={PARENT_PIN.length}
      />

      <View style={styles.buttonSpacing}>
        <Button
          title="Enter"
          onPress={handleSubmit}
          color={colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: 20,
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
    width: '50%',
    height: 50,
    borderColor: colors.border,
    borderWidth: 1,
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    borderRadius: 10,
    color: colors.textPrimary,
  },
  buttonSpacing: {
    width: '60%',
  },
});

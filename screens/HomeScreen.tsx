import { View, Text, Button, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vertevi Kids</Text>
      <Text style={styles.subtitle}>
        Healthy screen habits made simple for kids and parents.
      </Text>

      <View style={styles.buttonGroup}>
        <View style={styles.buttonWrapper}>
          <Button
            title="Enter Kids Mode"
            onPress={() => navigation.navigate('KidsMode')}
            color={colors.primary}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="Parent Area"
            onPress={() => navigation.navigate('ParentPin')}
            color={colors.secondary}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 10,
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  buttonGroup: {
    width: '70%',
  },
  buttonWrapper: {
    marginVertical: 10,
  },
});

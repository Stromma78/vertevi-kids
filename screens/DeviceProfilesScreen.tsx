import { ScrollView, View, Text, StyleSheet, Button } from 'react-native';
import { colors } from '../theme/colors';

const dummyProfiles = [
  {
    id: '1',
    name: 'Jack',
    device: 'iPad',
    ageRange: '8–10 years',
  },
  {
    id: '2',
    name: 'Lily',
    device: 'Laptop',
    ageRange: '11–13 years',
  },
];

export default function DeviceProfilesScreen() {
  const handleAddProfile = () => {
    // Placeholder only – later this will open a real "Add Profile" flow.
    alert('Add profile flow coming soon (placeholder).');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Device Profiles</Text>
      <Text style={styles.subtitle}>
        Manage different devices and profiles for each child in your family.
      </Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Current profiles</Text>
        <Text style={styles.sectionDescription}>
          These are example profiles for now. Later, Vertevi Kids will let you
          add, edit, and remove real profiles linked to devices.
        </Text>

        {dummyProfiles.map((profile) => (
          <View key={profile.id} style={styles.profileCard}>
            <View style={styles.profileHeaderRow}>
              <Text style={styles.profileName}>{profile.name}</Text>
              <Text style={styles.profileDevice}>{profile.device}</Text>
            </View>
            <Text style={styles.profileDetail}>
              Recommended age: {profile.ageRange}
            </Text>
            <Text style={styles.profileHint}>
              In future, this profile will have its own screen time rules and
              posture settings.
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What you&apos;ll be able to do</Text>
        <Text style={styles.bulletText}>
          • Add a new child profile and link it to a device.
        </Text>
        <Text style={styles.bulletText}>
          • Give each profile its own screen time rules.
        </Text>
        <Text style={styles.bulletText}>
          • Adjust posture guidance settings per child.
        </Text>
      </View>

      <View style={styles.addButtonWrapper}>
        <Button
          title="Add new profile"
          onPress={handleAddProfile}
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  profileCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
  },
  profileHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  profileDevice: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  profileDetail: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  profileHint: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  bulletText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 4,
    marginBottom: 4,
  },
  addButtonWrapper: {
    marginTop: 24,
    marginBottom: 40,
    width: '80%',
    alignSelf: 'center',
  },
});

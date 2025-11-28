# Vertevi Kids

Vertevi Kids is a mobile app designed to help children build healthier screen habits:
- Keeping a healthy distance from the screen.
- Sitting with better posture.
- Taking regular movement breaks.
- Settling into calm, focused screen time.

The app is built with **Expo** and **React Native**, and is designed to work on any compatible phone or tablet. In the future it will optionally integrate with the Vertevi stand and camera-based posture / distance detection.

---

## Tech stack

- Expo (React Native)
- TypeScript
- React Navigation (Native Stack)
- AsyncStorage (for local persistence of parent settings)
- Expo Camera (for future camera-based posture / distance checks and a Camera Test preview)

---

## Project structure (high level)

```text
vertevi-kids/
  App.tsx               # Navigation setup and screen registration
  app.json              # Expo config (name, icon, splash, bundle IDs, etc.)
  eas.json              # EAS (Expo Application Services) build config
  package.json          # Dependencies and npm scripts
  assets/               # App icon, splash, and other media
  theme/
    colors.ts           # Design system colours
  config/
    appConfig.ts        # PARENT_PIN and APP_VERSION
    storageKeys.ts      # AsyncStorage keys
  screens/
    HomeScreen.tsx          # Entry point: Kids vs Parent sections
    KidsModeScreen.tsx      # Kids Mode hub (4 activities)
    DistanceCoachScreen.tsx # Screen Distance Coach flow
    PostureCheckScreen.tsx  # Posture Check flow
    MovementBreaksScreen.tsx# Movement Breaks flow
    CalmFocusScreen.tsx     # Calm Focus Mode flow

    ParentPinScreen.tsx     # Parent PIN gate
    ParentAreaScreen.tsx    # Parent hub (rules, settings, profiles, reports, about, camera test, dev tools)
    ScreenTimeRulesScreen.tsx  # Screen Time Rules (with saved settings)
    PostureSettingsScreen.tsx  # Posture Settings (with saved settings)
    DeviceProfilesScreen.tsx   # Example device/child profiles
    ReportsScreen.tsx          # Reports & History preview (dummy data)
    AboutScreen.tsx            # About Vertevi Kids information
    CameraTestScreen.tsx       # Camera Test (preview) screen using expo-camera

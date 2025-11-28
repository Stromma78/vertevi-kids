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

---

## Project structure (high level)

```text
vertevi-kids/
  App.tsx               # Navigation setup and screen registration
  app.json              # Expo config (name, icon, splash, etc.)
  assets/               # App icon, splash, and other media
  theme/
    colors.ts           # Design system colours
  screens/
    HomeScreen.tsx          # Entry point: Kids vs Parent sections
    KidsModeScreen.tsx      # Kids Mode hub (4 activities)
    DistanceCoachScreen.tsx # Screen Distance Coach flow
    PostureCheckScreen.tsx  # Posture Check flow
    MovementBreaksScreen.tsx# Movement Breaks flow
    CalmFocusScreen.tsx     # Calm Focus Mode flow

    ParentPinScreen.tsx     # Parent PIN gate
    ParentAreaScreen.tsx    # Parent hub (rules, settings, profiles, reports, about)
    ScreenTimeRulesScreen.tsx  # Screen Time Rules (with saved settings)
    PostureSettingsScreen.tsx  # Posture Settings (with saved settings)
    DeviceProfilesScreen.tsx   # Example device/child profiles
    ReportsScreen.tsx          # Placeholder reports & history view
    AboutScreen.tsx            # About Vertevi Kids information

import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  CameraView,
  CameraType,
  useCameraPermissions,
} from 'expo-camera';
import { colors } from '../theme/colors';

type DistanceStatus = 'unknown' | 'too_close' | 'ok' | 'too_far';
type PostureStatus = 'unknown' | 'good' | 'tilted' | 'slouched';

export default function CameraLabScreen() {
  const [facing, setFacing] = useState<CameraType>('front');
  const [permission, requestPermission] = useCameraPermissions();
  const [distanceStatus] = useState<DistanceStatus>('unknown');
  const [postureStatus] = useState<PostureStatus>('unknown');

  if (!permission) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.infoText}>Checking camera permission…</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.infoText}>
          Vertevi Kids needs permission to use the camera for posture and
          distance checks.
        </Text>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={requestPermission}
        >
          <Text style={styles.primaryButtonText}>
            Grant camera permission
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  return (
    <View style={styles.fullContainer}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.overlayTop}>
          <Text style={styles.overlayTitle}>Camera Lab (dev)</Text>
          <Text style={styles.overlayText}>
            This screen is for experimenting with camera-based distance and
            posture detection.
          </Text>

          <View style={styles.statusRow}>
            <View style={styles.statusPill}>
              <Text style={styles.statusLabel}>Distance</Text>
              <Text style={styles.statusValue}>{distanceStatus}</Text>
            </View>
            <View style={styles.statusPill}>
              <Text style={styles.statusLabel}>Posture</Text>
              <Text style={styles.statusValue}>{postureStatus}</Text>
            </View>
          </View>

          {/* TODO: Integration point – camera processing pipeline.
              - Stream frames into a vision/ML pipeline.
              - Estimate distance from camera (too_close / ok / too_far).
              - Estimate posture state (good / tilted / slouched).
              - Update distanceStatus and postureStatus based on detection results.
          */}
        </View>

        <View style={styles.overlayBottom}>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={toggleCameraFacing}
          >
            <Text style={styles.flipButtonText}>Flip camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
  camera: {
    flex: 1,
  },
  overlayTop: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  overlayTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    marginBottom: 4,
  },
  overlayText: {
    fontSize: 13,
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    marginBottom: 12,
  },
  statusRow: {
    flexDirection: 'row',
    gap: 8,
  },
  statusPill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
    alignItems: 'center',
  },
  statusLabel: {
    fontSize: 11,
    color: '#CCCCCC',
  },
  statusValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  overlayBottom: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  flipButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  flipButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  centeredContainer: {
    flex: 1,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  infoText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 16,
  },
  primaryButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
  primaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.onPrimary,
  },
});

import AsyncStorage from '@react-native-async-storage/async-storage';
import { SESSIONS_KEY } from '../config/storageKeys';

export type SessionType = 'distance' | 'posture';

export type SessionSummary = {
  id: string;
  type: SessionType;
  timestamp: number; // Unix ms
  durationMinutes?: number;
  notes?: string;
};

function makeId() {
  return `${Date.now()}-${Math.round(Math.random() * 1_000_000)}`;
}

export async function saveSession(
  partial: Omit<SessionSummary, 'id'>
): Promise<void> {
  try {
    const existingJson = await AsyncStorage.getItem(SESSIONS_KEY);
    const existing: SessionSummary[] = existingJson
      ? JSON.parse(existingJson)
      : [];

    const session: SessionSummary = {
      id: makeId(),
      ...partial,
    };

    const updated = [...existing, session];
    await AsyncStorage.setItem(SESSIONS_KEY, JSON.stringify(updated));
  } catch (error) {
    console.warn('Failed to save session summary:', error);
  }
}

export async function getAllSessions(): Promise<SessionSummary[]> {
  try {
    const json = await AsyncStorage.getItem(SESSIONS_KEY);
    if (!json) return [];
    const parsed: SessionSummary[] = JSON.parse(json);
    return parsed;
  } catch (error) {
    console.warn('Failed to load session summaries:', error);
    return [];
  }
}

export async function clearAllSessions(): Promise<void> {
  try {
    await AsyncStorage.removeItem(SESSIONS_KEY);
  } catch (error) {
    console.warn('Failed to clear session summaries:', error);
  }
}

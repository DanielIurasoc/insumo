import { useEffect } from 'react';
import { Platform } from 'react-native';

export function useTheme(dark: boolean) {
  useEffect(() => {
    if (Platform.OS === 'web') {
      document.documentElement.classList.toggle('dark', dark);
    }
  }, [dark]);
}

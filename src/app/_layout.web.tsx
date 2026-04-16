import React, { useCallback, useEffect, useState } from 'react';
import { Slot, usePathname } from 'expo-router';
import Head from 'expo-router/head';
import { useFonts } from 'expo-font';
import { View, Text, ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import '../../global.css';

import TopNavBar from '../components/TopNavBar';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const pathname = usePathname();
  const [appReady, setAppReady] = useState(false);

  // mapping Head titles for web browser
  const titles: Record<string, string> = {
    '/': 'Insumo - Home',
    '/dashboard': 'Insumo - Dashboard',
    '/networth': 'Insumo - Net Worth Tracking',
    '/settings': 'Insumo - Settings',
  };

  // update title based on current path
  const pageTitle = titles[pathname] || 'Insumo';

  const [fontsLoaded] = useFonts({
    'jetbrains-100': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-Thin.ttf'),
    'jetbrains-i-100': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-ThinItalic.ttf'),
    'jetbrains-200': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-ExtraLight.ttf'),
    'jetbrains-i-200': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-ExtraLightItalic.ttf'),
    'jetbrains-300': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-Light.ttf'),
    'jetbrains-i-300': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-LightItalic.ttf'),
    'jetbrains-400': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-Regular.ttf'),
    'jetbrains-i-400': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-Italic.ttf'),
    'jetbrains-500': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-Medium.ttf'),
    'jetbrains-i-500': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-MediumItalic.ttf'),
    'jetbrains-600': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-SemiBold.ttf'),
    'jetbrains-i-600': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-SemiBoldItalic.ttf'),
    'jetbrains-700': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-Bold.ttf'),
    'jetbrains-i-700': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-BoldItalic.ttf'),
    'jetbrains-800': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-ExtraBold.ttf'),
    'jetbrains-i-800': require('../../assets/fonts/JetBrainsMono/JetBrainsMono-ExtraBoldItalic.ttf'),
  });

  const onReady = useCallback(async () => {
    if (fontsLoaded) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAppReady(true);
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onReady();
  }, [onReady]);

  if (!appReady) {
    return (
      <View className='flex-1 justify-center items-center bg-white'>
        <ActivityIndicator size='large' color='#22c55e' />
        <Text className='font-jetbrains-200 py-2 text-xs color-gray-400'>
          loading fonts
        </Text>
      </View>
    );
  }

  return (
    <React.Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <View className='min-h-screen bg-white'>
        <TopNavBar />

        <View>
          <Slot />
        </View>
      </View>
    </React.Fragment>
  );
}

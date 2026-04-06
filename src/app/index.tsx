import { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { useTheme } from '../hooks/useTheme';
// import { Redirect } from 'expo-router';

export default function IndexScreen() {
  // return <Redirect href='/dashboard' />;
  const [dark, setDark] = useState(false);
  useTheme(dark);

  return (
    <View className='justify-center items-center flex-1 p-4 bg-white dark:bg-black'>
      <Text className='text-black dark:text-white mb-6'>Dark mode toggle</Text>
      <Pressable
        onPress={() => setDark(!dark)}
        className='px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded'
      >
        <Text className='text-black dark:text-white'>Switch Theme</Text>
      </Pressable>
    </View>
  );
}

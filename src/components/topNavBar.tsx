import React from 'react';
import { View, Text, Image } from 'react-native';
import { Link, usePathname } from 'expo-router';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Logo3 from '../../assets/logo_recolor.png';

const TopNavBar = () => {
  const pathname = usePathname();
  return (
    <View className='flex flex-row justify-between items-center w-[100%] h-20 px-[10%] bg-green-50'>
      <View className='flex justify-center items-center'>
        <Link
          href='/'
          className='px-2 flex flex-row justify-center items-center'
        >
          <Image
            source={Logo3}
            style={{ width: 90, height: 90 }}
            resizeMode='contain'
          />
          <Text className='text-3xl font-jetbrains-700'>insumo</Text>
        </Link>
      </View>
      <View className='flex flex-row justify-evenly items-center w-[500px]'>
        <Link href='/dashboard'>
          <Text
            className={
              pathname === '/dashboard'
                ? 'text-green-500 border-b-4 border-green-500 font-jetbrains-700 text-2xl px-3 py-1 pb-5'
                : 'text-gray-500 font-jetbrains-700 text-2xl px-3 py-1'
            }
          >
            Dashboard
          </Text>
        </Link>
        <Link href='/networth'>
          <Text
            className={
              pathname === '/networth'
                ? 'text-green-500 border-b-4 border-green-500 font-jetbrains-700 text-2xl px-3 py-1 pb-5'
                : 'text-gray-500 font-jetbrains-700 text-2xl px-3 py-1'
            }
          >
            Net Worth Tracking
          </Text>
        </Link>
      </View>
      <Link href='/settings'>
        <MaterialCommunityIcons
          name='cog'
          size={40}
          color={pathname === '/settings' ? '#22c55e' : '#6b7280'}
        />
      </Link>
    </View>
  );
};

export default TopNavBar;

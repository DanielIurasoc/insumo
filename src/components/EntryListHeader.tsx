import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Animated } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { ENTRY_LIST_HEADER_MIN_HEIGHT } from '../constants/constants';

const EntryListHeader = ({
  date,
  height,
  isCollapsed,
}: {
  date: string;
  height: Animated.AnimatedInterpolation<number>;
  isCollapsed: boolean;
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <>
      {showSearch && (
        <Pressable
          onPress={() => {
            setShowSearch(false);
            setSearchText('');
          }}
          style={{ position: 'absolute', inset: 0, zIndex: 1 }}
        />
      )}

      <Animated.View style={{ height, width: '60%' }}>
        {!isCollapsed && (
          <View className='bg-gray-500 flex-1 justify-center items-center'>
            <Text> stuff i want to hide </Text>
          </View>
        )}
        <View
          className='bg-gray-200 flex-row items-center justify-between px-2 border-b-[1px] border-b-black'
          style={{ minHeight: ENTRY_LIST_HEADER_MIN_HEIGHT }}
        >
          <Text className='text-sm font-semibold text-gray-800'>{date}</Text>

          <View className='flex-row items-center'>
            {showSearch && (
              <TextInput
                value={searchText}
                onChangeText={setSearchText}
                placeholder='Search entries...'
                className='w-[150px] bg-white px-2 rounded-md text-sm mr-2 h-8'
                autoFocus
              />
            )}

            <Pressable onPress={() => setShowSearch((p) => !p)}>
              <MaterialCommunityIcons
                name={showSearch ? 'close' : 'magnify'}
                size={20}
              />
            </Pressable>
          </View>
        </View>
      </Animated.View>
    </>
  );
};

export default EntryListHeader;

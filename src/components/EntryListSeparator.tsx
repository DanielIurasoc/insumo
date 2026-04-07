import React from 'react';
import { View, Text } from 'react-native';

import { ENTRY_LIST_HEADER_MIN_HEIGHT } from '../constants/constants';

const EntryListSeparator = ({ date }: { date: string }) => {
  return (
    <View
      className='w-full px-2 py-2 bg-gray-200 flex-row items-center border-b-[1px] border-black justify-between z-10'
      style={{ height: ENTRY_LIST_HEADER_MIN_HEIGHT }}
    >
      {/* Left side */}
      <Text className='text-sm font-semibold text-gray-800'>{date}</Text>
    </View>
  );
};

export default EntryListSeparator;

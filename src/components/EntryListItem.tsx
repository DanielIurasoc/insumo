import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Entry } from '../constants/types';
import { CATEGORIES, FALLBACK_CATEGORY } from '../constants/constants';
import EntryListButton from './EntryListButton';

const EntryListItem: React.FC<Entry> = ({
  categoryId,
  walletId,
  entryDate,
  comment,
  amount,
}) => {
  const category =
    CATEGORIES.find((c) => c.id === Number(categoryId)) || FALLBACK_CATEGORY;

  return (
    <View className='flex w-[100%] h-16 flex-row justify-between items-center px-6 border-b-[1px] border-black bg-gray-50'>
      <View className='flex-[1] pr-3 items-center justify-center'>
        <View
          className='w-12 h-12 rounded-full items-center justify-center'
          style={{ backgroundColor: category.color }}
        >
          <MaterialCommunityIcons
            name={category.icon}
            size={30}
            color={'white'}
          />
        </View>
      </View>
      <View className='flex-[2.5] flex-col px-3 justify-center items-start'>
        <Text className='text-xs font-jetbrains-500 w-full'>{walletId}</Text>
        <Text
          className='text-sm font-jetbrains-500 w-full'
          style={{
            color:
              category.name == 'Savings'
                ? '#3285F3'
                : category.name == 'Income'
                  ? '#26A86D'
                  : '#FE1684',
          }}
        >
          {category.name}
        </Text>
      </View>
      {/* <View className='flex-[2.5] flex-col px-3 justify-center items-start'>
        <Text className='text-xs font-jetbrains-500 w-full'> Date</Text>
        <Text className='text-sm font-jetbrains-500 w-full'> {entryDate} </Text>
      </View> */}
      <View className='flex-[6] flex-col px-3 justify-center items-start'>
        <Text className='text-xs font-jetbrains-500 w-full'>Comment</Text>
        <Text className='text-sm font-jetbrains-500 w-full'>{comment}</Text>
      </View>
      <View className='flex-[2] flex-col px-3 justify-center items-center'>
        <Text className='text-xs font-jetbrains-500'>Amount</Text>
        <Text
          className='text-base font-jetbrains-500'
          style={{
            color:
              category.name == 'Savings'
                ? '#3285F3'
                : category.name == 'Income'
                  ? '#26A86D'
                  : '#FE1684',
          }}
        >
          {category.name == 'Income' ? '+' : ''}
          {amount} RON
        </Text>
      </View>
      <View className='flex-[1.5] flex-row justify-end items-center'>
        <EntryListButton
          iconName='clipboard-edit'
          iconColor='#474747'
          onPress={() => {}}
        />
        <EntryListButton
          iconName='delete'
          iconColor='#cf3838'
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

export default EntryListItem;

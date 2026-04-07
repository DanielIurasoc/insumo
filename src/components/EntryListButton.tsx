import { View, Text, Pressable } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { EntryListButtonProps } from '../constants/types';

const EntryListButton: React.FC<EntryListButtonProps> = ({
  iconName,
  iconColor,
  onPress,
}) => {
  return (
    <Pressable>
      <MaterialCommunityIcons
        name={iconName}
        color={iconColor}
        size={24}
        onPress={onPress}
      />
    </Pressable>
  );
};

export default EntryListButton;

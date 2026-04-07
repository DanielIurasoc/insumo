import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export type Category = {
  id: number;
  name: string;
  color: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
};

export type Entry = {
  id: string;
  categoryId: number;
  walletId: string;
  entryDate: string;
  comment: string;
  amount: number;
};

export type EntryListButtonProps = {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  iconColor?: string;
  onPress?: () => void;
};

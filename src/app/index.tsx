import React, { useRef, useState } from 'react';
import {
  View,
  SectionList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { Animated } from 'react-native';

import EntryListItem from '../components/EntryListItem';
import EntryListSeparator from '../components/EntryListSeparator';
import EntryListHeader from '../components/EntryListHeader';
import {
  ENTRIES,
  ENTRY_LIST_HEADER_MIN_HEIGHT,
  ENTRY_LIST_HEADER_MAX_HEIGHT,
} from '../constants/constants';

export default function IndexScreen() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [isCollapsed, setIsCollapsed] = useState(false);

  const headerHeight = scrollY.interpolate({
    inputRange: [
      0,
      ENTRY_LIST_HEADER_MAX_HEIGHT - ENTRY_LIST_HEADER_MIN_HEIGHT,
    ],
    outputRange: [ENTRY_LIST_HEADER_MAX_HEIGHT, ENTRY_LIST_HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const sections = Object.values(
    ENTRIES.reduce(
      (acc, entry) => {
        if (!acc[entry.entryDate]) {
          acc[entry.entryDate] = {
            title: entry.entryDate,
            data: [],
          };
        }
        acc[entry.entryDate].data.push(entry);
        return acc;
      },
      {} as Record<string, { title: string; data: typeof ENTRIES }>,
    ),
  ).sort((a, b) => new Date(b.title).getTime() - new Date(a.title).getTime());

  const [activeDate, setActiveDate] = useState(sections[0]?.title);

  // ✅ MUST be useRef
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    const firstVisibleItem = viewableItems.find(
      (item: any) => item.item?.entryDate,
    );

    if (firstVisibleItem?.item?.entryDate) {
      setActiveDate(firstVisibleItem.item.entryDate);
    }
  }).current;

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 10,
  };

  return (
    <View className='flex-1 bg-white dark:bg-black items-center'>
      {/* ✅ Fixed dynamic header */}

      <Animated.View
        style={{
          width: '100%',
          height: headerHeight,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          alignItems: 'center',
          zIndex: 20,
        }}
      >
        <EntryListHeader
          date={activeDate ?? ''}
          height={headerHeight}
          isCollapsed={isCollapsed}
        />
      </Animated.View>

      <Animated.SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        onViewableItemsChanged={onViewableItemsChanged} // ✅ REQUIRED
        viewabilityConfig={viewabilityConfig} // ✅ REQUIRED
        renderSectionHeader={({ section }) => (
          // section.title === activeDate ? null :
          <EntryListSeparator date={section.title} />
        )}
        renderItem={({ item }) => (
          <EntryListItem
            id={item.id}
            categoryId={item.categoryId}
            walletId={item.walletId}
            entryDate={item.entryDate}
            amount={item.amount}
            comment={item.comment}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop:
            ENTRY_LIST_HEADER_MAX_HEIGHT - ENTRY_LIST_HEADER_MIN_HEIGHT,
          paddingBottom: 80,
        }}
        style={{ width: '100%', paddingHorizontal: '20%', paddingBottom: 80 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false,
            listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
              const y = event.nativeEvent.contentOffset.y;
              setIsCollapsed(
                y >=
                  ENTRY_LIST_HEADER_MAX_HEIGHT - ENTRY_LIST_HEADER_MIN_HEIGHT,
              );
            },
          },
        )}
      />
    </View>
  );
}

import React, { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {
  ENTRY_LIST_HEADER_MIN_HEIGHT,
  ENTRY_LIST_HEADER_MAX_HEIGHT,
} from '../constants/constants';

type Props = {
  date: string;
  height: number;
};

export default function EntryListHeader({ date, height }: Props) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <div
      className='w-full bg-white border-b border-gray-200 overflow-hidden'
      style={{ height }}
    >
      {/* Centered inner container (matches list width) */}
      <div className='mx-auto max-w-[1100px] h-full px-6 flex flex-col justify-end'>
        {/* EXPANDED CONTENT */}
        <div
          // className={`
          //   flex-1 flex items-center justify-center transition-opacity duration-150
          //   ${isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          // `}
          className={'flex-1 flex items-center justify-center'}
        >
          <div className='w-full max-w-[600px] rounded-lg bg-gray-100 p-4 text-center'>
            <strong>Stuff I want to hide</strong>
            <p className='text-sm mt-1 text-gray-600'>
              (icon picker, date picker, amount, add button)
            </p>
          </div>
        </div>

        {/* COLLAPSED BAR (always visible) */}
        <div
          className='flex items-center justify-between px-2'
          style={{ minHeight: ENTRY_LIST_HEADER_MIN_HEIGHT }}
        >
          <span className='text-sm font-semibold text-gray-800'>{date}</span>

          <div className='flex items-center'>
            {showSearch && (
              <input
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder='Search entries...'
                autoFocus
                className='mr-2 h-8 rounded-md border border-gray-300 px-2 text-sm'
              />
            )}

            <button
              onClick={() => setShowSearch((v) => !v)}
              className='flex items-center justify-center'
            >
              <MaterialCommunityIcons
                name={showSearch ? 'close' : 'magnify'}
                size={20}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

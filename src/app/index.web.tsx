import React, { useEffect, useRef, useState } from 'react';

import EntryListItem from '../components/EntryListItem';
import EntryListHeader from '../components/EntryListHeader';
import EntryListSeparator from '../components/EntryListSeparator';

import {
  ENTRIES,
  ENTRY_LIST_HEADER_MAX_HEIGHT,
  ENTRY_LIST_HEADER_MIN_HEIGHT,
  TOP_NAVBAR_HEIGHT,
} from '../constants/constants';

export default function IndexWebScreen() {
  const firstEntryRef = useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = useState(
    ENTRY_LIST_HEADER_MAX_HEIGHT,
  );

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeDate, setActiveDate] = useState('');

  /* ---------------------------------------------------------
   * Group entries by date
   * --------------------------------------------------------- */
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

  /* ---------------------------------------------------------
   * IMMEDIATE collapse on scroll
   * --------------------------------------------------------- */
  useEffect(() => {
    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        if (!firstEntryRef.current) return;

        const navBottom = TOP_NAVBAR_HEIGHT;

        const firstEntryTop =
          firstEntryRef.current.getBoundingClientRect().top + window.scrollY;

        const collapseDistance =
          firstEntryTop - navBottom - ENTRY_LIST_HEADER_MIN_HEIGHT;

        if (collapseDistance <= 0) return;

        const scrollY = window.scrollY;

        const progress = Math.min(Math.max(scrollY / collapseDistance, 0), 1);

        const height =
          ENTRY_LIST_HEADER_MAX_HEIGHT -
          progress *
            (ENTRY_LIST_HEADER_MAX_HEIGHT - ENTRY_LIST_HEADER_MIN_HEIGHT);

        setHeaderHeight(height);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  /* ---------------------------------------------------------
   * Track active date
   * --------------------------------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          const date = visible[0].target.getAttribute('data-date');
          if (date) setActiveDate(date);
        }
      },
      { threshold: 0.1 },
    );

    document
      .querySelectorAll('section[data-date]')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Fixed Entry Header */}
      <header
        className='fixed left-0 right-0 z-50 bg-white'
        style={{ top: TOP_NAVBAR_HEIGHT }}
      >
        <EntryListHeader date={activeDate} height={headerHeight} />
      </header>

      {/* Document-scrolling content */}
      <main
        className='min-h-screen pb-10'
        style={{
          paddingTop: TOP_NAVBAR_HEIGHT + ENTRY_LIST_HEADER_MAX_HEIGHT,
        }}
      >
        <div className='mx-auto w-full max-w-[1100px] px-6'>
          {sections.map((section, sectionIndex) => (
            <section key={section.title} data-date={section.title}>
              <EntryListSeparator date={section.title} />

              {section.data.map((entry, entryIndex) => {
                const isFirst = sectionIndex === 0 && entryIndex === 0;

                return (
                  <div key={entry.id} ref={isFirst ? firstEntryRef : null}>
                    <EntryListItem {...entry} />
                  </div>
                );
              })}
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

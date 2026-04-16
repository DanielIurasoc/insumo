import { Category, Entry } from './types';

export const ENTRY_LIST_HEADER_MAX_HEIGHT = 200;
export const ENTRY_LIST_HEADER_MIN_HEIGHT = 48;
export const TOP_NAVBAR_HEIGHT = 80;

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Groceries',
    color: '#BF3851',
    icon: 'cart',
  },
  {
    id: 2,
    name: 'Home',
    color: '#3AC2C2',
    icon: 'home',
  },
  {
    id: 3,
    name: 'Transport',
    color: '#F59E0B',
    icon: 'bus',
  },
  {
    id: 4,
    name: 'Entertainment',
    color: '#8B5CF6',
    icon: 'movie-open',
  },
  {
    id: 5,
    name: 'Health',
    color: '#10B981',
    icon: 'heart-pulse',
  },
  {
    id: 6,
    name: 'Income',
    color: '#2563EB',
    icon: 'cash-plus',
  },
  {
    id: 7,
    name: 'Savings',
    color: '#059669',
    icon: 'piggy-bank',
  },
];

export const FALLBACK_CATEGORY: Category = {
  id: 0,
  name: 'missing',
  color: 'red',
  icon: 'head-question',
};

export const ENTRIES: Entry[] = [
  // ----- April 1
  {
    id: '1',
    categoryId: 6,
    walletId: 'Main Wallet',
    entryDate: '2026-04-01',
    amount: 3200,
    comment: 'Monthly salary deposited from main employer.',
  },
  {
    id: '2',
    categoryId: 1,
    walletId: 'Main Wallet',
    entryDate: '2026-04-01',
    amount: -145.3,
    comment: 'Weekly grocery shopping at the local supermarket.',
  },
  {
    id: '3',
    categoryId: 2,
    walletId: 'Main Wallet',
    entryDate: '2026-04-01',
    amount: -420,
    comment: 'Paid electricity and maintenance bills for the apartment.',
  },

  // ----- April 2
  {
    id: '4',
    categoryId: 3,
    walletId: 'Cash',
    entryDate: '2026-04-02',
    amount: -12.5,
    comment: 'Bus tickets and short ride across the city.',
  },
  {
    id: '5',
    categoryId: 1,
    walletId: 'Cash',
    entryDate: '2026-04-02',
    amount: -36.9,
    comment: 'Picked up fruits, snacks, and drinks on the way home.',
  },
  {
    id: '6',
    categoryId: 7,
    walletId: 'Savings',
    entryDate: '2026-04-02',
    amount: -500,
    comment: 'Moved part of the salary into long-term savings account.',
  },

  // ----- April 3
  {
    id: '7',
    categoryId: 4,
    walletId: 'Main Wallet',
    entryDate: '2026-04-03',
    amount: -55,
    comment: 'Cinema night with friends, tickets and popcorn included.',
  },
  {
    id: '8',
    categoryId: 5,
    walletId: 'Main Wallet',
    entryDate: '2026-04-03',
    amount: -89.99,
    comment: 'Pharmacy visit for supplements and basic medication.',
  },

  // ----- April 4
  {
    id: '9',
    categoryId: 3,
    walletId: 'Main Wallet',
    entryDate: '2026-04-04',
    amount: -25,
    comment: 'Fuel contribution for a shared car ride.',
  },
  {
    id: '10',
    categoryId: 2,
    walletId: 'Savings',
    entryDate: '2026-04-04',
    amount: -300,
    comment: 'Emergency home repair fund allocation.',
  },

  // ----- April 5
  {
    id: '11',
    categoryId: 4,
    walletId: 'Main Wallet',
    entryDate: '2026-04-05',
    amount: -42,
    comment: 'Streaming subscriptions and movie rental fees.',
  },
  {
    id: '12',
    categoryId: 1,
    walletId: 'Main Wallet',
    entryDate: '2026-04-05',
    amount: -67.4,
    comment: 'Restocked household food supplies for the week.',
  },

  // ----- April 6
  {
    id: '13',
    categoryId: 6,
    walletId: 'Main Wallet',
    entryDate: '2026-04-06',
    amount: 250,
    comment: 'Freelance project payment received via bank transfer.',
  },
  {
    id: '14',
    categoryId: 5,
    walletId: 'Main Wallet',
    entryDate: '2026-04-06',
    amount: -120,
    comment: 'Doctor consultation and basic medical check-up.',
  },
  {
    id: '15',
    categoryId: 3,
    walletId: 'Cash',
    entryDate: '2026-04-06',
    amount: -8,
    comment: 'Quick taxi ride due to bad weather.',
  },

  // ----- April 7
  {
    id: '16',
    categoryId: 4,
    walletId: 'Main Wallet',
    entryDate: '2026-04-07',
    amount: -60,
    comment: 'Dinner out with colleagues after work.',
  },
  {
    id: '17',
    categoryId: 2,
    walletId: 'Main Wallet',
    entryDate: '2026-04-07',
    amount: -95,
    comment: 'Bought small furniture items for the living room.',
  },
  {
    id: '18',
    categoryId: 1,
    walletId: 'Cash',
    entryDate: '2026-04-07',
    amount: -22.8,
    comment: 'Late-night snack and drinks from convenience store.',
  },

  // ----- April 8
  {
    id: '19',
    categoryId: 6,
    walletId: 'Main Wallet',
    entryDate: '2026-04-08',
    amount: 180,
    comment: 'Side gig income from online consulting session.',
  },
  {
    id: '20',
    categoryId: 7,
    walletId: 'Savings',
    entryDate: '2026-04-08',
    amount: -250,
    comment: 'Transferred extra funds to savings after side income.',
  },

  // ----- April 9
  {
    id: '21',
    categoryId: 3,
    walletId: 'Main Wallet',
    entryDate: '2026-04-09',
    amount: -14,
    comment: 'Metro card top-up for daily commute.',
  },
  {
    id: '22',
    categoryId: 1,
    walletId: 'Main Wallet',
    entryDate: '2026-04-09',
    amount: -52.6,
    comment: 'Grocery shopping focused on fresh vegetables and meat.',
  },

  // ----- April 10
  {
    id: '23',
    categoryId: 6,
    walletId: 'Main Wallet',
    entryDate: '2026-04-10',
    amount: 500,
    comment: 'Performance bonus received for project delivery.',
  },
  {
    id: '24',
    categoryId: 7,
    walletId: 'Savings',
    entryDate: '2026-04-10',
    amount: -700,
    comment: 'Moved bonus money into long-term investment savings.',
  },

  // ----- April 11
  {
    id: '25',
    categoryId: 4,
    walletId: 'Main Wallet',
    entryDate: '2026-04-11',
    amount: -75,
    comment: 'Concert tickets purchased for upcoming live event.',
  },
  {
    id: '26',
    categoryId: 5,
    walletId: 'Main Wallet',
    entryDate: '2026-04-11',
    amount: -45,
    comment: 'Fitness supplements and vitamins.',
  },

  // ----- April 12
  {
    id: '27',
    categoryId: 1,
    walletId: 'Main Wallet',
    entryDate: '2026-04-12',
    amount: -103.2,
    comment: 'Large grocery run including cleaning supplies.',
  },
  {
    id: '28',
    categoryId: 3,
    walletId: 'Cash',
    entryDate: '2026-04-12',
    amount: -9,
    comment: 'Short rides using ride-sharing service.',
  },

  // ----- April 13
  {
    id: '29',
    categoryId: 6,
    walletId: 'Main Wallet',
    entryDate: '2026-04-13',
    amount: 120,
    comment: 'Refund received for previously returned purchase.',
  },
  {
    id: '30',
    categoryId: 7,
    walletId: 'Savings',
    entryDate: '2026-04-13',
    amount: -150,
    comment: 'Automatic weekly savings transfer.',
  },

  // ----- April 14
  {
    id: '31',
    categoryId: 2,
    walletId: 'Main Wallet',
    entryDate: '2026-04-14',
    amount: -210,
    comment: 'Bought new desk lamp and storage containers.',
  },
  {
    id: '32',
    categoryId: 4,
    walletId: 'Main Wallet',
    entryDate: '2026-04-14',
    amount: -30,
    comment: 'Online game purchase and in-app content.',
  },

  // ----- April 15
  {
    id: '33',
    categoryId: 6,
    walletId: 'Main Wallet',
    entryDate: '2026-04-15',
    amount: 950,
    comment: 'Final invoice payment for freelance project.',
  },
  {
    id: '34',
    categoryId: 7,
    walletId: 'Savings',
    entryDate: '2026-04-15',
    amount: -400,
    comment: 'End-of-month savings contribution.',
  },
];

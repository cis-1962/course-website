export const ASSIGNMENT_SLUGS = ['1-data-wrangling', '2-async-events'] as const;
export type AssignmentSlug = (typeof ASSIGNMENT_SLUGS)[number];

export const ASSIGNMENT_DATA: {
  [slug in AssignmentSlug]: {
    name: string;
    number: number;
    unlocks: number;
    due: number;
  };
} = {
  '1-data-wrangling': {
    name: 'Data Wrangling',
    number: 1,
    unlocks: Date.parse('04 June 2023 00:00:00 EST'),
    due: Date.parse('18 Sept 2023 00:00:00 EST'),
  } as const,
  '2-async-events': {
    name: 'Async Events and Callbacks',
    number: 2,
    unlocks: Date.parse('11 Sept 2023 00:00:00 EST'),
    due: Date.parse('25 Sept 2023 00:00:00 EST'),
  },
};
// TODO: more assignments!

// TODO: more lectures!

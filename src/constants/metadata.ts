export const TITLE_BASE = 'CIS-1962';

export const ASSIGNMENTS = {
  '1-data-wrangling': {
    name: 'Data Wrangling',
    number: 1,
    unlocks: Date.parse('04 June 2023 00:00:00 EST'),
    due: Date.parse('18 Sept 2023 00:00:00 EST'),
  },
  '2-async-events': {
    name: 'Async Events and Callbacks',
    number: 2,
    unlocks: Date.parse('11 Sept 2023 00:00:00 EST'),
    due: Date.parse('25 Sept 2023 00:00:00 EST'),
  },
} as const;
// TODO: more assignments!

export type AssignmentSlug = keyof typeof ASSIGNMENTS;

export const LECTURES = {
  '0-course-policies': {
    name: 'Course Policies',
    number: 0,
    date: Date.parse('01 June 2023 19:00:00 EST'),
  },
  '1-js-basics': {
    name: 'JavaScript Basics',
    number: 1,
    date: Date.parse('25 June 2023 19:00:00 EST'),
  },
} as const;
// TODO: more lectures!

export type LectureSlug = keyof typeof LECTURES;

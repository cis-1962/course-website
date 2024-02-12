export const STAFF_IMAGE_FOLDER = '/images/staff';

export const STAFF = [
  {
    name: 'Thomas Shaw',
    role: 'Lecturer',
    email: 'tlshaw@sas.upenn.edu',
    oh: {
      location: 'Levine 3 Bump Space',
      time: 'Monday 8-10pm',
    },
    description:
      "Hi! I'm Thomas, an undergrad junior in the DMD program at Penn. I also help run the UPenn SIGGRAPH club, which you should definitely check out if you have any interest in graphics tech!",
    image: 'thomas.png',
  },
  {
    name: 'Marcel Kida',
    role: 'TA',
    email: 'mkida@wharton.upenn.edu',
    oh: {
      location: 'Location TBD',
      time: 'Time TBD',
    },
    description:
      "I'm a junior in M&T. I like playing volleyball and rock climbing. Let's talk anything about design, fashion, or tech!",
    image: 'marcel.jpeg',
  },
  {
    name: 'Andrew Jiang',
    role: 'TA',
    email: 'ajay54@sas.upenn.edu',
    oh: {
      location: 'Levine 601 bump space',
      time: 'Thursday 7-8pm',
    },
    description:
      "Hi! I'm a senior majoring in Economics and CIS. I enjoy eating good food and playing all types of games (board games, card games, video games). Feel free to reach out for anything!",
    image: 'andrew.png',
  },
] as const;

export const DAY = 'Wednesdays from 5:15 to 6:45pm';

export const LOCATION = 'Towne 311';

export const CLASS_RECORDINGS_URL =
  'https://drive.google.com/drive/folders/1Q6V6h65Y0gxa30bZ8iYG1UGGYSga5KoO?usp=drive_link';
export const LIVE_CODE_URL =
  'https://github.com/cis-1962/live-code/tree/main/2024a';

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
] as const;

export const DAY = 'Wednesdays from 5:15 to 6:45pm';

export const LOCATION = 'Towne 311';

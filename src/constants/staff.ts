export const STAFF_IMAGE_FOLDER = '/images/staff';

export const STAFF = [
  {
    name: 'Thomas Shaw',
    role: 'Lecturer',
    email: 'tlshaw@sas.upenn.edu',
    description:
      "Hi! I'm Thomas, an undergrad junior in the DMD program at Penn. I also help run the UPenn SIGGRAPH club, which you should definitely check out if you have any interest in graphics tech!",
    image: 'thomas.png',
  },
  {
    name: 'Tuneer Roy',
    role: 'Lecturer',
    email: 'tuneer@seas.upenn.edu',
    description:
      "Hey! I'm Tuneer, a junior studying CS at Penn. I'm also a Team Lead for Penn Mobile @ Penn Labs, so if the app ever breaks... my bad.",
    image: 'raccoon.png',
  },
  {
    name: 'Kashyap Chaturvedula',
    role: 'TA',
    email: 'kashyapc@seas.upenn.edu',
    description:
      'Hi, I’m Kashyap, an undergrad junior studying CS @ Penn. I’m involved in Penn Spark, a club focused on design and engineering projects; If you’re interested in building something fun please check us out!',
    image: 'kashyap.png',
  },
] as const;

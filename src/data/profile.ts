// Personal info used across the site. Edit these to update your details
// everywhere at once.

export const profile = {
  name: 'Ibrahim',
  // Short role line shown under your name in the hero
  role: 'Electrical Engineering · University of Waterloo',
  tagline:
    'Engineering student focused on hardware and embedded systems, from PCB design to FPGA digital logic.',

  // About section narrative
  about: [
    'I study Electrical Engineering at the University of Waterloo, with most of my work on circuits, sensors, and embedded software.',
    'I’ve always learned best by building. I like getting into the details, testing what works, and improving the parts that do not. Competitive sports shaped that same side of me, teaching me to stay disciplined, adapt quickly, and keep pushing when results take time.',
    'That mindset also led me into entrepreneurship. Through social media, I’ve generated over $50,000 in sales and learned how much execution depends on attention, trust, and consistency. Whether it is engineering, business, or sport, I care most about turning effort into something real.',
  ],

  // Recognition: links out to the announcement page
  award: {
    label: 'Won a startup fund for Beasy Inc.',
    org: 'Enterprise Co-op Pitch · Conrad School',
    url: 'https://uwaterloo.ca/conrad-school-entrepreneurship-business/news/meet-fall-2024-enterprise-co-op-pitch-winners#:~:text=Beasey',
  },

  // Skill groups shown as chips in the About section
  skills: [
    { group: 'Hardware', items: ['Circuit Design', 'Sensors', 'PCB Design', 'Signal Conditioning'] },
    { group: 'Embedded / Digital', items: ['VHDL', 'FPGA', 'Microcontrollers', 'FSM Design'] },
    { group: 'Software', items: ['C++', 'Python', 'MATLAB', 'Git'] },
    { group: 'Tools', items: ['Vivado', 'Oscilloscope', 'VNA', 'Lab Bench', 'Soldering'] },
  ],

  // Journey timeline (Waterloo -> Spain)
  journey: [
    {
      place: 'University of Waterloo',
      location: 'Waterloo, Canada',
      detail: 'Electrical Engineering, with a focus on hardware and embedded systems.',
      time: 'Current',
    },
    {
      place: 'Universidad Carlos III de Madrid (UC3M)',
      location: 'Madrid, Spain',
      detail: 'Studying abroad on exchange with a new academic environment, and a chance to broaden my engineering background.',
      time: 'Fall 2026',
    },
  ],

  // Testimonials / endorsements. Add or remove entries freely; the section
  // hides itself automatically if this list is empty.
  testimonials: [
    {
      quote:
        '[TODO: replace with a real 2-3 sentence endorsement from someone who can speak to your work, e.g. a professor, manager, or teammate. Keep it specific.]',
      name: '[Full Name]',
      title: 'Professor, ECE · University of Waterloo',
    },
    {
      quote:
        '[TODO: a second short endorsement. One or two focused sentences reads best.]',
      name: '[Full Name]',
      title: 'Manager · Company',
    },
  ],

  // Contact details.
  contact: {
    email: 'ischowdh@uwaterloo.ca', // shown as plain text (not a link)
    github: 'https://github.com/ibrahimchowdhuryECE',
    githubLabel: 'github.com/ibrahimchowdhuryECE',
    location: 'Toronto',
  },
};

// Personal info used across the site. Edit these to update your details
// everywhere at once.

export const profile = {
  name: 'Ibrahim',
  // Short role line shown under your name in the hero
  role: 'Electrical & Computer Engineering @ University of Waterloo',
  tagline:
    'I build hardware and software that ships — from biomedical devices to digital logic. Dedicated, curious, and always making something.',

  // About section narrative
  about: [
    'I’m a University of Waterloo engineering student and a builder at heart. I like taking hard, real-world problems and turning them into things that actually work — circuits, embedded devices, and the code that drives them.',
    'Waterloo’s co-op culture rubs off on you: ship early, learn fast, iterate. That mindset shows up in everything I make, whether it’s a biomedical prototype or a state machine on an FPGA.',
  ],

  // Skill groups shown as chips in the About section
  skills: [
    { group: 'Hardware', items: ['Circuit Design', 'Sensors', 'PCB Basics', 'Signal Conditioning'] },
    { group: 'Embedded / Digital', items: ['VHDL', 'FPGA', 'Microcontrollers', 'FSM Design'] },
    { group: 'Software', items: ['C / C++', 'Python', 'MATLAB', 'Git'] },
    { group: 'Tools', items: ['Vivado', 'Oscilloscope', 'Lab Bench', 'Soldering'] },
  ],

  // Journey timeline (Waterloo -> Spain)
  journey: [
    {
      place: 'University of Waterloo',
      location: 'Waterloo, Canada',
      detail: 'Electrical & Computer Engineering — where the building habit took hold.',
      time: 'Now',
    },
    {
      place: 'Universidad Carlos III de Madrid (UC3M)',
      location: 'Madrid, Spain',
      detail: 'Heading abroad on exchange — new country, new perspective, same drive to build.',
      time: 'Fall 2026',
    },
  ],

  // Contact + social links. [TODO] = replace with your real links.
  contact: {
    email: 'isc.05@yahoo.com',
    github: 'https://github.com/ibrahimchowdhuryECE',
    linkedin: '', // [TODO] add your LinkedIn URL
    resume: '', // [TODO] add a link/path to your résumé PDF
  },
};

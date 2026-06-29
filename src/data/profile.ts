// Personal info used across the site. Edit these to update your details
// everywhere at once.

export const profile = {
  name: 'Ibrahim',
  // Short role line shown under your name in the hero
  role: 'Electrical & Computer Engineering · University of Waterloo',
  tagline:
    'Engineering student focused on hardware and embedded systems — from a biomedical sensing device to FPGA digital logic.',

  // About section narrative
  about: [
    'I study Electrical & Computer Engineering at the University of Waterloo, where I work across the stack from sensors and circuits to the firmware that runs them.',
    'My projects tend to start with a concrete problem and end with a working prototype — a non-invasive glucose sensor, a traffic-light controller in VHDL, and more in progress.',
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
      detail: 'Electrical & Computer Engineering, with a focus on hardware and embedded systems.',
      time: 'Current',
    },
    {
      place: 'Universidad Carlos III de Madrid (UC3M)',
      location: 'Madrid, Spain',
      detail: 'Studying abroad on exchange — a new academic environment and a chance to broaden my engineering background.',
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

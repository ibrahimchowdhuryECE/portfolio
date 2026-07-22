import type { Project } from '../types/project';
import glucoseSensor from '../assets/glucose-sensor.jpg';

/* =====================================================================
   YOUR PROJECTS LIVE HERE.
   To add a new project: copy one object below, change the fields, and
   give it a unique `slug`. It will automatically appear in the Projects
   grid on the home page and get its own page at /projects/<slug>.
   Placeholder text is marked with [TODO]; replace with real details.
   ===================================================================== */

export const projects: Project[] = [
  {
    slug: 'blood-glucose-breath',
    title: 'Non-Invasive Blood Glucose Breath Detector',
    blurb:
      'A handheld device that estimates blood glucose from a breath sample, with no finger-pricking required.',
    tags: ['Biomedical', 'Embedded', 'Sensors', 'Hardware'],
    featured: true,
    thumbnail: glucoseSensor,
    summary: {
      problem:
        'Diabetics rely on painful, repetitive finger-prick blood tests to track glucose. We set out to make a non-invasive alternative.',
      role: 'Project at McMaster. [TODO: your specific role, e.g. hardware design / firmware / sensor integration].',
      stack: 'Gas sensors, microcontroller, analog signal conditioning, [TODO: add specifics].',
      outcome:
        '[TODO: result, e.g. working prototype that correlated breath readings with reference glucose levels].',
    },
    sections: [
      {
        heading: 'Overview',
        body: 'Built a handheld prototype that analyzes volatile compounds in a person’s breath (such as acetone) which correlate with blood glucose levels, offering a pain-free screening method. [TODO: expand with the motivation and scope.]',
      },
      {
        heading: 'Approach & Design',
        body: '[TODO: describe the sensor choice, the circuit / signal conditioning, the microcontroller and how a reading is captured and processed.]',
      },
      {
        heading: 'Challenges',
        body: '[TODO: e.g. sensor drift, calibration against reference glucose data, noise, breath sampling consistency.]',
      },
      {
        heading: 'Results',
        body: '[TODO: what you achieved, accuracy/correlation, demos, next steps.]',
      },
    ],
    links: [],
  },
  {
    slug: 'vhdl-traffic-controller',
    title: '4-Way Traffic Light Controller',
    blurb:
      'A finite-state-machine intersection controller written in VHDL and deployed to an FPGA.',
    tags: ['VHDL', 'FPGA', 'Digital Logic', 'FSM'],
    featured: true,
    summary: {
      problem:
        'A 4-way intersection needs safe, timed signalling that never gives conflicting greens.',
      role: 'Designed and implemented the full state machine in VHDL.',
      stack: 'VHDL, finite state machine design, FPGA, [TODO: board e.g. Basys 3 / DE10].',
      outcome:
        '[TODO: working, simulated and synthesized controller cycling through safe light states with correct timing].',
    },
    sections: [
      {
        heading: 'Overview',
        body: 'Implemented a traffic-light controller for a four-way intersection as a finite state machine, handling green/yellow/red phases with safe transitions and configurable timing. [TODO: expand.]',
      },
      {
        heading: 'Approach & Design',
        body: '[TODO: describe the state diagram, timing counters, clock division, and how you guaranteed no conflicting greens.]',
      },
      {
        heading: 'Challenges',
        body: '[TODO: e.g. debouncing inputs, clock division for human-scale timing, simulation vs hardware behavior.]',
      },
      {
        heading: 'Results',
        body: '[TODO: simulation waveforms, on-board demo, what you learned.]',
      },
    ],
    links: [],
  },
  {
    slug: 'coming-soon',
    title: 'More Projects Coming Soon',
    blurb: 'Placeholder. Duplicate this entry in src/data/projects.ts to add a new project.',
    tags: ['Placeholder'],
    summary: {
      problem: '[TODO]',
      role: '[TODO]',
      stack: '[TODO]',
      outcome: '[TODO]',
    },
    sections: [
      {
        heading: 'Overview',
        body: 'This is a template entry. Copy it, give it a new slug, and fill in the details to publish another project.',
      },
    ],
    links: [],
  },
];

// Helper used by the project detail page to look up one project by its slug.
export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

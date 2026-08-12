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
    tags: ['Biomedical', 'Mixed Signal Design', 'PCB Design', 'Embedded C', 'ESP32-S3', 'Sensors'],
    status: 'In the works · PCB and validation',
    featured: true,
    thumbnail: glucoseSensor,
    summary: {
      problem:
        'Diabetics rely on painful, repetitive finger-prick blood tests to track glucose. We set out to make a non-invasive alternative.',
      role: 'Research Hardware Team Lead, McMaster. Leading entire hardware scope.',
      stack:
        'Altium Designer, Embedded C, Python, Signal Conditioning, ADC, Mixed Signal Design, I2C, Wi-Fi/BLE data collection, formal verification.',
      outcome:
        'Working prototype. Custom PCB design complete (DFT and DFM). Analog front end and power path validated. Multi-sensor acquisition live. Collecting data. Glucose ML algorithm and correlation in progress.',
    },
    sections: [
      {
        heading: 'Overview',
        body: 'Handheld device that reads breath VOCs such as acetone, which tracks glucose dynamics, as a pain-free alternative to finger-pricks. It captures the VOC signal, conditions it through a low-noise analog chain, and logs environmental context so readings normalize before classification. A research and screening prototype, not a medical device.',
      },
      {
        heading: 'Approach & Design',
        bullets: [
          'Designed the complete schematic: multi-sensor network, analog conditioning, ADC, ESP32-S3 control, I2C, mixed-voltage rails.',
          'MQ138 VOC sensor detects acetone-range compounds; BME688 and SCD-41 compensate for temperature, humidity, and CO2.',
          'A precision divider scales the 0 to 5V sensor output into the ADS1115’s ±2.048V window, buffered by an OPA333 zero-drift op-amp and filtered by an RC low-pass before the ADC.',
          'A second ADC channel monitors the 5V rail so every reading normalizes against supply drift.',
          'Power subsystem: TPS61023 boost, Li-ion charging, power-path management, LDO regulation, protection, and system-level budgeting.',
          'ESP32-S3 runs an FSM-controlled measurement cycle over I2C and streams data over Wi-Fi and BLE.',
        ],
      },
      {
        heading: 'Challenges',
        bullets: [
          'Thermal isolation: split the enclosure into a dual-chamber design, separating the heated sensor from the intake path so its thermal plume does not corrupt readings.',
          'Sensor selection: early characterization of the MQ138 metal-oxide sensor showed classic MOX limits, including baseline drift, humidity cross-sensitivity, and slow recovery. Moved toward a photolithographically-fabricated sensing element for better selectivity and stability, which introduced new drive, interface, and mounting constraints.',
          'Power under full load: the sensor heater and the Wi-Fi/BLE radio draw heavy, bursty current on one battery-backed rail. Sized the boost stage and power path to hold 5V regulation without browning out the MCU.',
        ],
      },
      {
        heading: 'Results',
        bullets: [
          'Complete schematic and full analog chain validated.',
          'Multi-sensor acquisition working over I2C.',
          'Custom Altium PCB complete; combined DFT/DFM revision in fabrication prep.',
          'Firmware brings up sensor drivers, ADC configuration, and Wi-Fi/BLE collection, producing structured VOC datasets for future ML-based glucose analysis.',
          'Preliminary bench and breath-capture tests show clean, repeatable signals; power path characterized end to end.',
          'Next: fabricate the DFT/DFM board, build the ML pipeline, run drift and repeatability characterization, then correlate against reference glucose data.',
        ],
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
    slug: 'accelerated-ai-chip',
    title: 'Accelerated AI Chip',
    blurb:
      'A custom silicon accelerator for neural-network inference, built for high throughput at low power.',
    tags: ['Silicon', 'Digital Design', 'Machine Learning', 'Verilog'],
    status: 'In the works',
    featured: true,
    summary: {
      problem:
        '[TODO: general-purpose processors spend most of their power moving data rather than computing, which caps how fast and efficiently neural networks can run at the edge.]',
      role: '[TODO: your role, e.g. RTL design, architecture, verification.]',
      stack: '[TODO: e.g. SystemVerilog, matrix-multiply unit, on-chip SRAM, FPGA prototype, synthesis flow.]',
      outcome: '[TODO: in progress — target throughput / power numbers once measured.]',
    },
    sections: [
      {
        heading: 'Overview',
        body: 'In the works. A hardware accelerator aimed at running neural-network inference far faster and more efficiently than a general-purpose CPU, by building the multiply-accumulate math directly into silicon. [TODO: expand with the motivation, target workload, and scope.]',
      },
      {
        heading: 'Approach & Design',
        body: '[TODO: describe the architecture — systolic array or MAC unit layout, memory hierarchy and dataflow, precision/quantization choices, and the clocking strategy.]',
      },
      {
        heading: 'Challenges',
        body: '[TODO: e.g. keeping the compute units fed without stalling on memory, timing closure, power budget, verification against a software reference model.]',
      },
      {
        heading: 'Current Status',
        body: 'In the works. [TODO: what is done so far, what is next, and the milestones you are aiming for.]',
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

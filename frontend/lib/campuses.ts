// Centralized data for TUT campuses shown across the home, labs, and detail pages.
// Single source of truth — keep IDs URL-safe (kebab-case) and unique.

export type CampusService = {
  name: string;
  description?: string;
};

export type Campus = {
  id: string; // URL slug
  name: string; // "Soshanguve South Campus"
  shortName: string; // "Soshanguve South"
  province: "Gauteng" | "Mpumalanga" | "Limpopo";
  city: string;
  address: string;
  building: string;
  description: string;
  services: CampusService[];
  hours: string;
  rating: number; // 0–5
  contactEmail: string; // campus-level contact (placeholder)
  contactPhone: string; // campus-level contact (placeholder)
};

export const campuses: Campus[] = [
  // Gauteng Province
  {
    id: "pretoria",
    name: "Pretoria Campus",
    shortName: "Pretoria (Main)",
    province: "Gauteng",
    city: "Pretoria West",
    address: "159 Nelson Mandela Drive, Pretoria West, 0183",
    building: "Main Campus / Pretoria West",
    description:
      "The flagship Pretoria campus — the largest and most varied computer-lab offering, including the 24/7 postgraduate research lab.",
    services: [
      { name: "Programming Lab", description: "Full software stack, 80 seats." },
      { name: "Networking Lab", description: "Cisco NetAcad and Cybersecurity lab." },
      { name: "Design Lab", description: "Adobe CC and CAD workstations." },
      { name: "Engineering Workstation", description: "GPU and high-CPU workstations." },
      { name: "Research Lab", description: "24/7 card access for postgraduates." },
      { name: "Multimedia Lab", description: "Audio/video production suite." },
    ],
    hours: "Mon–Fri 06:30–22:00, Sat 08:00–17:00, Sun 10:00–16:00",
    rating: 4.9,
    contactEmail: "labs-pretoria@tut.ac.za",
    contactPhone: "+27 12 382 5911",
  },
  {
    id: "arcadia",
    name: "Arcadia Campus",
    shortName: "Arcadia",
    province: "Gauteng",
    city: "Pretoria",
    address: "420 Steve Biko Road, Arcadia, Pretoria, 0001",
    building: "Arts & Design Building, 1st Floor",
    description:
      "Design-led campus in central Pretoria with creative-suite workstations and a dedicated media-production lab.",
    services: [
      { name: "Design Lab", description: "Adobe CC, Figma, 3D rendering rigs." },
      { name: "Multimedia Lab", description: "Sound studio, podcast booths, edit bays." },
      { name: "Programming Lab", description: "Web dev and scripting workstations." },
      { name: "Research Lab", description: "Postgraduate research desks." },
    ],
    hours: "Mon–Fri 07:30–22:00, Sat 08:00–13:00, Sun closed",
    rating: 4.8,
    contactEmail: "labs-arcadia@tut.ac.za",
    contactPhone: "+27 12 382 5900",
  },
  {
    id: "arts",
    name: "Arts Campus",
    shortName: "Arts",
    province: "Gauteng",
    city: "Pretoria Central",
    address: "Pretoria Central, Pretoria, 0002",
    building: "Arts Building, Ground Floor",
    description:
      "Central Pretoria campus focused on visual arts, design, and creative media computing workstations.",
    services: [
      { name: "Design Lab", description: "Adobe CC, illustration rigs." },
      { name: "Multimedia Lab", description: "Video & audio production." },
      { name: "Programming Lab", description: "Creative-coding workstations." },
    ],
    hours: "Mon–Fri 07:30–22:00, Sat 08:00–13:00, Sun closed",
    rating: 4.6,
    contactEmail: "labs-arts@tut.ac.za",
    contactPhone: "+27 12 382 5500",
  },
  {
    id: "ga-rankuwa",
    name: "Ga-Rankuwa Campus",
    shortName: "Ga-Rankuwa",
    province: "Gauteng",
    city: "Ga-Rankuwa",
    address: "Zone 2, Ga-Rankuwa, 0208",
    building: "Science Building, 1st Floor",
    description:
      "Science-adjacent campus with programming and research labs serving the Faculty of Science.",
    services: [
      { name: "Programming Lab", description: "Intro & intermediate programming." },
      { name: "Networking Lab", description: "CCNA-aligned lab pods." },
      { name: "Engineering Workstation", description: "SolidWorks and ANSYS." },
      { name: "Research Lab", description: "Honours & masters research desks." },
    ],
    hours: "Mon–Fri 07:30–22:00, Sat 08:00–13:00, Sun closed",
    rating: 4.5,
    contactEmail: "labs-rankuwa@tut.ac.za",
    contactPhone: "+27 12 382 9300",
  },
  {
    id: "soshanguve-north",
    name: "Soshanguve North Campus",
    shortName: "Soshanguve North",
    province: "Gauteng",
    city: "Soshanguve",
    address: "Block K, Soshanguve North, 0152",
    building: "ICT Building, Ground & 1st Floor",
    description:
      "ICT-heavy campus with the largest suite of programming and multimedia workstations in the north of Pretoria.",
    services: [
      { name: "Programming Lab", description: "General-purpose dev workstations." },
      { name: "Networking Lab", description: "Cybersecurity & network forensics bay." },
      { name: "Multimedia Lab", description: "Adobe CC, DaVinci Resolve, audio suite." },
      { name: "Engineering Workstation", description: "FPGA and embedded dev kits." },
    ],
    hours: "Mon–Fri 07:30–22:00, Sat 08:00–13:00, Sun closed",
    rating: 4.6,
    contactEmail: "labs-soshnorth@tut.ac.za",
    contactPhone: "+27 12 382 9100",
  },
  {
    id: "soshanguve-south",
    name: "Soshanguve South Campus",
    shortName: "Soshanguve South",
    province: "Gauteng",
    city: "Soshanguve",
    address: "Block B, Aubrey Matlala Street, Soshanguve, 0152",
    building: "Engineering Building, 2nd Floor",
    description:
      "Engineering-focused computer labs with dual-monitor workstations, CAD tooling, and 24/7 card access for honours students.",
    services: [
      { name: "Programming Lab", description: "Open stack: Python, Java, C++, Rust." },
      { name: "Networking Lab", description: "Cisco NetAcad routing & switching racks." },
      { name: "Design Lab", description: "AutoCAD, SolidWorks, MATLAB licenses." },
      { name: "Engineering Workstation", description: "GPU workstations for simulation work." },
      { name: "Research Lab", description: "Bookable for postgraduate research." },
    ],
    hours: "Mon–Fri 07:30–22:00, Sat 08:00–13:00, Sun closed",
    rating: 4.7,
    contactEmail: "labs-soshsouth@tut.ac.za",
    contactPhone: "+27 12 382 9000",
  },

  // Mpumalanga Province
  {
    id: "emalahleni",
    name: "eMalahleni Campus",
    shortName: "eMalahleni (Witbank)",
    province: "Mpumalanga",
    city: "eMalahleni (Witbank)",
    address: "eMalahleni, Mpumalanga",
    building: "eMalahleni Campus Building",
    description:
      "Mpumalanga campus supporting engineering and ICT students in the Highveld region.",
    services: [
      { name: "Programming Lab", description: "General-purpose dev workstations." },
      { name: "Networking Lab", description: "CCNA-aligned lab pods." },
      { name: "Engineering Workstation", description: "SolidWorks and ANSYS." },
    ],
    hours: "Mon–Fri 07:30–22:00, Sat 08:00–13:00, Sun closed",
    rating: 4.4,
    contactEmail: "labs-emalahleni@tut.ac.za",
    contactPhone: "+27 13 690 3000",
  },
  {
    id: "mbombela",
    name: "Mbombela Campus",
    shortName: "Mbombela (Nelspruit)",
    province: "Mpumalanga",
    city: "Mbombela (Nelspruit)",
    address: "Mbombela, Mpumalanga",
    building: "Mbombela Campus Building",
    description:
      "Mpumalanga campus in Nelspruit serving the Lowveld region with ICT and design workstations.",
    services: [
      { name: "Programming Lab", description: "General-purpose dev workstations." },
      { name: "Design Lab", description: "Adobe CC and CAD workstations." },
      { name: "Research Lab", description: "Postgraduate research desks." },
    ],
    hours: "Mon–Fri 07:30–22:00, Sat 08:00–13:00, Sun closed",
    rating: 4.5,
    contactEmail: "labs-mbombela@tut.ac.za",
    contactPhone: "+27 13 750 4000",
  },

  // Limpopo Province
  {
    id: "polokwane",
    name: "Polokwane Campus",
    shortName: "Polokwane",
    province: "Limpopo",
    city: "Polokwane",
    address: "Polokwane, Limpopo",
    building: "Polokwane Campus Building",
    description:
      "Limpopo campus providing ICT and engineering computer labs in Polokwane.",
    services: [
      { name: "Programming Lab", description: "General-purpose dev workstations." },
      { name: "Networking Lab", description: "CCNA-aligned lab pods." },
      { name: "Engineering Workstation", description: "SolidWorks and ANSYS." },
    ],
    hours: "Mon–Fri 07:30–22:00, Sat 08:00–13:00, Sun closed",
    rating: 4.5,
    contactEmail: "labs-polokwane@tut.ac.za",
    contactPhone: "+27 15 290 5000",
  },
  {
    id: "giyani",
    name: "Giyani Campus",
    shortName: "Giyani (Delivery Site)",
    province: "Limpopo",
    city: "Giyani",
    address: "Giyani, Limpopo",
    building: "Giyani Delivery Site",
    description:
      "Limpopo delivery site in Giyani providing access to TUT computer-lab resources closer to students in the area.",
    services: [
      { name: "Programming Lab", description: "General-purpose dev workstations." },
      { name: "Design Lab", description: "Adobe CC workstations." },
    ],
    hours: "Mon–Fri 08:00–16:00, Sat–Sun closed",
    rating: 4.3,
    contactEmail: "labs-giyani@tut.ac.za",
    contactPhone: "+27 15 810 6000",
  },
];

export function findCampus(id: string): Campus | undefined {
  return campuses.find((c) => c.id === id);
}

export const campusProvinces: Array<Campus["province"]> = [
  "Gauteng",
  "Mpumalanga",
  "Limpopo",
];

export const userVishal = {
  id: "04fecaf4-edf3-41d1-8813-bf4b25601b94",
  firstName: "Vishal",
  lastName: "G.",
};

export const userNate = {
  id: "e75dcc61-e975-45e5-a62d-375fad96e323",
  firstName: "Nate",
  lastName: "S.",
};

export const userProfile = {
  id: "9ca8e1dd-1adf-4be3-90d4-2b6c97b2a85b",
  userId: userVishal.id,
  currentWorkId: null,
};

export const companyObrizum = {
  id: "f6c55509-8d32-4496-9331-014eccc36fb8",
  title: "companyObrizum",
  description: "AI Learning Platform",
};

export const companyBreathelife = {
  id: "527e530c-bf6d-4457-83ad-a2ec07a12dcc",
  title: "Breathelife",
  description: "Insurance App",
};

export const companySofdesk = {
  id: "ba86b2c1-54f5-4f2f-a353-dac8e4f9a9c2",
  title: "Sofdesk",
  description: "App for Solar and Roofing Companies",
};

export const currentUserWorks = [
  {
    id: "2df5f6e5-bca2-46e1-b76a-f811103e28d0",
    userId: userVishal.id,
    companyId: companyObrizum.id,
    startDate: new Date("02/10/2023"),
    title: "Senior Frontend Engineer",
  },
  {
    id: "3a8b384a-d142-48c9-8d49-6275bf8156d2",
    userId: userVishal.id,
    companyId: companyBreathelife.id,
    startDate: new Date("11/10/2022"),
    endDate: new Date("12/25/2023"),
    title: "Senior Frontend Engineer",
  },
  {
    id: "30856e13-c886-42f4-9e6c-74e8b6b64eee",
    userId: userVishal.id,
    companyId: companySofdesk.id,
    startDate: new Date("09/08/2018"),
    endDate: new Date("10/16/2022"),
    title: "Senior Frontend Engineer",
  },
];

export const userProjects = [
  {
    id: "924f540b-6c90-4d20-880d-516fb6266ff7",
    userId: userVishal.id,
    startDate: Date.now(),
    title: "Mandarino",
    description: "AI based language learning platform",
  },
];

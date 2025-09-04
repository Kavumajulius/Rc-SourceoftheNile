export const pastPresidents = [
  {
    name: "John Doe",
    term: "2022-2023",
    bio: "John Doe led the club through a period of significant growth, launching the 'Literacy for All' campaign.",
    achievements: ["Launched 'Literacy for All'", "Increased membership by 20%"],
    imageUrl: "https://picsum.photos/400/400?random=10",
    aiHint: "man portrait"
  },
  {
    name: "Jane Smith",
    term: "2021-2022",
    bio: "Jane Smith focused on community health, initiating the club's annual free medical camps.",
    achievements: ["Started annual medical camps", "Secured a Global Grant for a water project"],
    imageUrl: "https://picsum.photos/400/400?random=11",
    aiHint: "woman portrait"
  },
  {
    name: "Peter Jones",
    term: "2020-2021",
    bio: "Peter Jones's presidency was marked by a strong response to the global pandemic, organizing food drives and support systems.",
    achievements: ["Led COVID-19 response efforts", "Established a partnership with the local hospital"],
    imageUrl: "https://picsum.photos/400/400?random=12",
    aiHint: "man professional"
  },
];

export const projects = [
  {
    title: "Clean Water Initiative",
    description: "Providing access to safe and clean drinking water for rural communities by constructing boreholes and water purification systems.",
    impact: "Over 5,000 people now have access to clean water, reducing waterborne diseases by 60%.",
    imageUrl: "https://picsum.photos/600/400?random=1",
    aiHint: "clean water"
  },
  {
    title: "Literacy for All",
    description: "Building libraries and providing books to primary schools in underserved areas to promote literacy and a love for reading.",
    impact: "Established 3 new school libraries, providing over 10,000 books to 2,000 students.",
    imageUrl: "https://picsum.photos/600/400?random=2",
    aiHint: "education children"
  },
  {
    title: "Community Health Camps",
    description: "Organizing free medical camps offering check-ups, basic treatments, and health education to community members.",
    impact: "Provided free healthcare services to over 3,000 individuals in the past year.",
    imageUrl: "https://picsum.photos/600/400?random=3",
    aiHint: "healthcare medical"
  },
  {
    title: "Youth Empowerment Program",
    description: "A mentorship and skills training program for young adults to equip them for the modern job market.",
    impact: "Trained 150 youths in entrepreneurship and digital skills, with 40% starting their own businesses.",
    imageUrl: "https://picsum.photos/600/400?random=4",
    aiHint: "youth empowerment"
  },
];

export const fellowshipUpdates = [
  {
    date: "Last week",
    title: "Guest Speaker on Financial Literacy",
    summary: "We had an enlightening session with a financial expert who shared valuable insights on personal finance and investment. The fellowship was vibrant, and members engaged in a lively Q&A session.",
    photos: [
      { url: "https://picsum.photos/600/400?random=20", aiHint: "people meeting" },
      { url: "https://picsum.photos/600/400?random=21", aiHint: "presentation seminar" },
      { url: "https://picsum.photos/600/400?random=22", aiHint: "group discussion" },
    ],
  },
  {
    date: "Two weeks ago",
    title: "Cultural Heritage Night",
    summary: "A colorful evening celebrating the diverse cultures within our club. Members came dressed in traditional attire, and we enjoyed a variety of cultural performances and cuisines.",
    photos: [
        { url: "https://picsum.photos/600/400?random=23", aiHint: "cultural festival" },
        { url: "https://picsum.photos/600/400?random=24", aiHint: "people dancing" },
    ],
  },
];

export interface Event {
  date: Date;
  title: string;
  summary: string;
  location: string;
}

// Event data is now generated on the client in page.tsx to avoid hydration errors
export const events: Omit<Event, 'date'>[] = [
  {
    title: "Weekly Fellowship Meeting",
    summary: "Join us for our regular weekly meeting. This week's topic: 'The Role of Technology in Community Service'.",
    location: "Grand Imperial Hotel",
  },
  {
    title: "Tree Planting Day",
    summary: "As part of our environmental conservation efforts, we will be planting 1,000 trees at the community park.",
    location: "Jinja Community Park",
  },
  {
    title: "Visit to the 'Literacy for All' Project Site",
    summary: "A field visit to one of the schools benefiting from our literacy project. Come and see the impact we're making.",
    location: "Nile Primary School",
  },
];

export const resourceLinks = [
    {
        category: "Rotary International",
        links: [
            { title: "My Rotary", url: "#" },
            { title: "Rotary Learning Center", url: "#" },
            { title: "The Rotary Foundation", url: "#" },
            { title: "End Polio Now", url: "#" },
        ]
    },
    {
        category: "District Resources",
        links: [
            { title: "District 9214 Website", url: "#" },
            { title: "District Events Calendar", url: "#" },
            { title: "District Leadership", url: "#" },
        ]
    },
    {
        category: "Club Resources",
        links: [
            { title: "Club Constitution", url: "#" },
            { title: "Membership Form", url: "#" },
        ]
    }
];

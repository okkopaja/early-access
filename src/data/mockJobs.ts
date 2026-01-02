export interface MockJob {
  id: string;
  title: string;
  company: string;
  logoUrl?: string; // Optional, can use placeholder
  postedDate: string;
  postedAt: Date; // For sorting
  salary: string;
  salaryValue: number; // For sorting (monthly equivalent)
  type: string;
  location: string;
  mode: string;
  tags: string[];
  bgColor: string;
}

const now = new Date();

export const MOCK_JOBS: MockJob[] = [
  {
    id: "1",
    title: "Commi II Chef",
    company: "Spice Kraft",
    postedDate: "4 hrs ago",
    postedAt: new Date(now.getTime() - 4 * 60 * 60 * 1000),
    salary: "₹800/shift",
    salaryValue: 800 * 25, // Assuming 25 shifts/month
    type: "Part Time",
    location: "Ballygunge",
    mode: "On-site",
    tags: ["Indian", "Tandoor", "Night Shift"],
    bgColor: "bg-orange-100",
  },
  {
    id: "2",
    title: "Barista",
    company: "Blue Tokai",
    postedDate: "1 day ago",
    postedAt: new Date(now.getTime() - 1 * 24 * 60 * 60 * 1000),
    salary: "₹12,000 / month",
    salaryValue: 12000,
    type: "Full Time",
    location: "Salt Lake",
    mode: "On-site",
    tags: ["Coffee Art", "Morning Shift"],
    bgColor: "bg-blue-100",
  },
  {
    id: "3",
    title: "Bartender",
    company: "Roxy",
    postedDate: "1 week ago",
    postedAt: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
    salary: "₹20,000 / month",
    salaryValue: 20000,
    type: "Part Time",
    location: "Park Street",
    mode: "On-site",
    tags: ["Cocktails", "Night Shift"],
    bgColor: "bg-indigo-100",
  },
  {
    id: "4",
    title: "Pastry Chef",
    company: "Flurys",
    postedDate: "2 days ago",
    postedAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000),
    salary: "₹18,000 / month",
    salaryValue: 18000,
    type: "Full Time",
    location: "Park Street",
    mode: "On-site",
    tags: ["Bakery", "Morning Shift"],
    bgColor: "bg-pink-100",
  },
  {
    id: "5",
    title: "Cafe Barista",
    company: "HungryHippo Cafe",
    postedDate: "2 days ago",
    postedAt: new Date("2025-01-01"),
    salary: "₹12,000 / month",
    salaryValue: 12000,
    type: "Full-time",
    location: "Kolkata",
    mode: "On-site",
    tags: ["Barista", "Cafe Staff", "Customer Service"],
    bgColor: "#FFF4E6",
  },
  {
    id: "6",
    title: "Kitchen Helper",
    company: "House of Dumpling",
    postedDate: "1 day ago",
    postedAt: new Date("2025-01-02"),
    salary: "₹10,000 / month",
    salaryValue: 10000,
    type: "Full-time",
    location: "Salt Lake, Kolkata",
    mode: "On-site",
    tags: ["Kitchen Staff", "Helper", "Food Prep"],
    bgColor: "#E6F7FF",
  },
  {
    id: "7",
    title: "Home-style Cook",
    company: "Mommy's Kitchen",
    postedDate: "3 days ago",
    postedAt: new Date("2024-12-31"),
    salary: "₹15,000 / month",
    salaryValue: 15000,
    type: "Full-time",
    location: "Newtown, Kolkata",
    mode: "On-site",
    tags: ["Cook", "Indian Cuisine", "Kitchen"],
    bgColor: "#F0FFF4",
  },
  {
    id: "8",
    title: "Hotel Front Office Executive",
    company: "Amar Tree Express Hotel",
    postedDate: "Today",
    postedAt: new Date("2025-01-03"),
    salary: "₹18,000 / month",
    salaryValue: 18000,
    type: "Full-time",
    location: "Rajarhat, Kolkata",
    mode: "On-site",
    tags: ["Front Office", "Hotel Staff", "Reception"],
    bgColor: "#F5F5F5",
  },
];

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
        title: "Head Waiter",
        company: "Mocambo",
        postedDate: "2 days ago",
        postedAt: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000),
        salary: "₹15,000 / month",
        salaryValue: 15000,
        type: "Full Time",
        location: "Park Street",
        mode: "On-site",
        tags: ["English Speaking", "Fine Dining"],
        bgColor: "bg-red-100",
    },
    {
        id: "3",
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
        id: "5",
        title: "Restaurant Manager",
        company: "Peter Cat",
        postedDate: "3 days ago",
        postedAt: new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000),
        salary: "₹25,000 / month",
        salaryValue: 25000,
        type: "Full Time",
        location: "Park Street",
        mode: "On-site",
        tags: ["Management", "Experience Required"],
        bgColor: "bg-purple-100",
    },
    {
        id: "6",
        title: "Housekeeping Staff",
        company: "JW Marriott",
        postedDate: "5 hrs ago",
        postedAt: new Date(now.getTime() - 5 * 60 * 60 * 1000),
        salary: "₹10,000 / month",
        salaryValue: 10000,
        type: "Full Time",
        location: "EM Bypass",
        mode: "On-site",
        tags: ["Cleaning", "Hotel"],
        bgColor: "bg-gray-100",
    },
    {
        id: "7",
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
        id: "8",
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
];

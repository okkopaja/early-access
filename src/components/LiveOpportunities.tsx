"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Clock, Building2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";

const jobs = [
    {
        id: 1,
        title: "Head Chef",
        restaurant: "Peter Cat",
        logo_bg: "bg-red-100",
        rating: 4.8,
        rate: "₹1200-1500",
        duration: "Shift (8hrs)",
        location: "Park Street",
        posted: "15 mins ago",
    },
    {
        id: 2,
        title: "Barista",
        restaurant: "Blue Tokai",
        logo_bg: "bg-blue-100",
        rating: 4.6,
        rate: "₹700-900",
        duration: "Shift (6hrs)",
        location: "Ballygunge",
        posted: "30 mins ago",
    },
    {
        id: 3,
        title: "Wait Staff",
        restaurant: "Mocambo",
        logo_bg: "bg-yellow-100",
        rating: 4.7,
        rate: "₹600-800",
        duration: "Shift (5hrs)",
        location: "Park Street",
        posted: "45 mins ago",
    },
    {
        id: 4,
        title: "Kitchen Helper",
        restaurant: "Arsalan",
        logo_bg: "bg-green-100",
        rating: 4.5,
        rate: "₹500-700",
        duration: "Shift (4hrs)",
        location: "Park Circus",
        posted: "1 hr ago",
    },
    {
        id: 5,
        title: "Delivery Partner",
        restaurant: "Dominos",
        logo_bg: "bg-blue-500",
        rating: 4.3,
        rate: "₹400-600",
        duration: "Shift (4hrs)",
        location: "Salt Lake",
        posted: "2 hrs ago",
    }
];

export function LiveOpportunities() {
    const { openModal } = useModal();

    return (
        <section className="py-24 relative bg-transparent overflow-hidden">
            {/* Dark Mode Top Transition */}
            <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-transparent to-black dark:block hidden -z-10" />
            <div className="absolute inset-x-0 bottom-0 top-80 bg-transparent dark:bg-black/90 dark:block hidden -z-20" />
            <div className="container px-6 mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-white mb-4"
                    >
                        Jobs Available Right Now in Kolkata
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#666666] dark:text-gray-400 text-lg"
                    >
                        Scroll through real jobs posted by verified restaurants and cafes.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -4, transition: { duration: 0.2 } }}
                            className="bg-white dark:bg-[#1A1A1A] rounded-xl border border-neutral-100 dark:border-white/10 p-6 hover:border-emerald-400 hover:shadow-lg ring-1 ring-inset ring-transparent hover:ring-white/50 transition-all duration-200 group cursor-pointer"
                            onClick={openModal}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-12 h-12 rounded-lg ${job.logo_bg} flex items-center justify-center text-xl font-bold text-gray-700`}>
                                        {job.restaurant.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#1A1A1A] dark:text-white text-base">
                                            {job.restaurant}
                                        </h3>
                                        <div className="flex items-center gap-1 text-xs font-semibold text-[#1A1A1A] dark:text-gray-300">
                                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                            {job.rating}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h4 className="text-lg font-bold text-[#1A1A1A] dark:text-white mb-2">{job.title}</h4>
                                <div className="flex items-center gap-3 text-sm text-[#666666] dark:text-gray-400 mb-2">
                                    <div className="px-2 py-1 bg-[#F0F7F4] dark:bg-white/5 text-[#1DBF73] rounded font-semibold text-xs">
                                        {job.rate}
                                    </div>
                                    <span className="text-xs">{job.duration}</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-[#666666] dark:text-gray-400">
                                    <MapPin className="w-3.5 h-3.5" />
                                    {job.location}
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8] dark:border-white/10">
                                <div className="flex items-center gap-1.5 text-xs text-[#999999]">
                                    <span className="w-2 h-2 rounded-full bg-[#1DBF73] animate-pulse" />
                                    {job.posted}
                                </div>
                                <button className="text-[#1DBF73] font-semibold text-sm hover:underline">
                                    Apply Now
                                </button>
                            </div>
                        </motion.div>
                    ))}

                    {/* View More Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="bg-[#F8F8F8] dark:bg-white/5 rounded-xl border border-dashed border-[#E8E8E8] dark:border-white/10 p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#F0F7F4] transition-colors group"
                        onClick={openModal}
                    >
                        <div className="w-12 h-12 rounded-full bg-white dark:bg-white/10 flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                            <Building2 className="w-6 h-6 text-[#1DBF73]" />
                        </div>
                        <h3 className="font-bold text-[#1A1A1A] dark:text-white mb-1 group-hover:text-[#1DBF73] group-hover:brightness-50 dark:group-hover:brightness-75 transition-colors">View All Jobs</h3>
                        <p className="text-xs text-[#666666] dark:text-gray-400">340+ active listings</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

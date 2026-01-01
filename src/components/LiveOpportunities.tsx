import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { JobFilterSidebar } from "./JobFilterSidebar";
import { JobSearchHeader } from "./JobSearchHeader";
import { JobCard } from "./JobCard";
import { MOCK_JOBS } from "@/data/mockJobs";

export type SortOption = "Most Relevant" | "Most Recent" | "Highest Paid" | "Lowest Paid";

export interface JobFilters {
    search: string;
    employmentType: string[];
    salaryRange: string[];
    location: string[];
    role: string[];
}

export function LiveOpportunities() {
    const [sortBy, setSortBy] = useState<SortOption>("Most Recent");
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
    const [filters, setFilters] = useState<JobFilters>({
        search: "",
        employmentType: [],
        salaryRange: [],
        location: [],
        role: [],
    });

    // Prevent scrolling when mobile filters are open
    useEffect(() => {
        if (isMobileFiltersOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [isMobileFiltersOpen]);

    const filteredAndSortedJobs = useMemo(() => {
        let jobs = [...MOCK_JOBS];

        // 1. Search Filter
        if (filters.search) {
            const query = filters.search.toLowerCase();
            jobs = jobs.filter(job =>
                job.title.toLowerCase().includes(query) ||
                job.company.toLowerCase().includes(query) ||
                job.tags.some(tag => tag.toLowerCase().includes(query))
            );
        }

        // 2. Employment Type Filter
        if (filters.employmentType.length > 0) {
            jobs = jobs.filter(job => filters.employmentType.includes(job.type));
        }

        // 3. Location Filter
        if (filters.location.length > 0) {
            jobs = jobs.filter(job => filters.location.includes(job.location));
        }

        // 4. Role Filter (checking against title and tags for now)
        if (filters.role.length > 0) {
            jobs = jobs.filter(job =>
                filters.role.some(role =>
                    job.title.toLowerCase().includes(role.toLowerCase()) ||
                    job.tags.some(tag => tag.toLowerCase().includes(role.toLowerCase()))
                )
            );
        }

        // 5. Salary Range Filter
        if (filters.salaryRange.length > 0) {
            jobs = jobs.filter(job => {
                return filters.salaryRange.some(range => {
                    if (range === "₹500 - ₹1000 / shift") return job.salary.includes("/shift");
                    if (range === "₹10k - ₹15k / month") return job.salaryValue >= 10000 && job.salaryValue <= 15000;
                    if (range === "₹15k - ₹25k / month") return job.salaryValue > 15000 && job.salaryValue <= 25000;
                    if (range === "₹25k+ / month") return job.salaryValue > 25000;
                    return true;
                });
            });
        }

        // 6. Sorting
        switch (sortBy) {
            case "Most Recent":
                return jobs.sort((a, b) => b.postedAt.getTime() - a.postedAt.getTime());
            case "Highest Paid":
                return jobs.sort((a, b) => b.salaryValue - a.salaryValue);
            case "Lowest Paid":
                return jobs.sort((a, b) => a.salaryValue - b.salaryValue);
            case "Most Relevant":
            default:
                return jobs;
        }
    }, [sortBy, filters]);

    const handleFilterChange = (key: keyof JobFilters, value: string) => {
        setFilters(prev => {
            if (key === 'search') return { ...prev, search: value };

            const current = prev[key] as string[];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];

            return { ...prev, [key]: updated };
        });
    };

    const clearFilters = () => {
        setFilters({
            search: "",
            employmentType: [],
            salaryRange: [],
            location: [],
            role: [],
        });
    };

    return (
        <section className="py-24 relative bg-transparent overflow-hidden">
            {/* Mobile Filter Sidebar Overlay */}
            <AnimatePresence>
                {isMobileFiltersOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 lg:hidden"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={() => setIsMobileFiltersOpen(false)}
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute right-0 top-0 bottom-0 w-[85%] max-w-[320px] bg-white dark:bg-[#1A1A1A] h-full overflow-y-auto shadow-2xl"
                        >
                            <JobFilterSidebar
                                filters={filters}
                                onFilterChange={handleFilterChange}
                                onClear={clearFilters}
                                onClose={() => setIsMobileFiltersOpen(false)}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                        Jobs Available Right Now
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#666666] dark:text-gray-400 text-lg"
                    >
                        Explore real opportunities from verified employers.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="hidden lg:block w-1/4 shrink-0">
                        <JobFilterSidebar
                            filters={filters}
                            onFilterChange={handleFilterChange}
                            onClear={clearFilters}
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex-1">
                        <JobSearchHeader
                            sortBy={sortBy}
                            onSortChange={setSortBy}
                            search={filters.search}
                            onSearchChange={(val) => handleFilterChange('search', val)}
                            onOpenFilters={() => setIsMobileFiltersOpen(true)}
                        />

                        <div className="flex flex-col gap-4">
                            {filteredAndSortedJobs.length > 0 ? (
                                filteredAndSortedJobs.map((job) => (
                                    <JobCard key={job.id} job={job} />
                                ))
                            ) : (
                                <div className="text-center py-20 bg-white dark:bg-[#1A1A1A] rounded-xl border border-dashed border-gray-300 dark:border-white/10">
                                    <p className="text-[#666666] dark:text-gray-400">No jobs found matching your criteria.</p>
                                    <button
                                        onClick={clearFilters}
                                        className="mt-4 text-[#1DBF73] font-semibold hover:underline"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

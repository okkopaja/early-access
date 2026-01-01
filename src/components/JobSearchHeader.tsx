"use client";

import { useState, useRef, useEffect } from "react";
import { useModal } from "@/context/ModalContext";
import { Search, ChevronDown, SlidersHorizontal, Check } from "lucide-react";
import { SortOption } from "./LiveOpportunities";
import { motion, AnimatePresence } from "framer-motion";

interface JobSearchHeaderProps {
    sortBy: SortOption;
    onSortChange: (option: SortOption) => void;
    search: string;
    onSearchChange: (value: string) => void;
    onOpenFilters?: () => void;
}

export function JobSearchHeader({ sortBy, onSortChange, search, onSearchChange, onOpenFilters }: JobSearchHeaderProps) {
    const { openModal } = useModal();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const sortOptions: SortOption[] = [
        "Most Relevant",
        "Most Recent",
        "Highest Paid",
        "Lowest Paid"
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#1DBF73] transition-colors" />
                <input
                    type="text"
                    placeholder="Search by job title, restaurant, or keywords..."
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full h-12 pl-12 pr-4 bg-white dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-white/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#1DBF73]/50 text-[#1A1A1A] dark:text-white placeholder-gray-400"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') openModal();
                    }}
                />
                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#1DBF73] text-white rounded-lg hover:bg-[#1DBF73]/90 transition-colors"
                    onClick={openModal}
                >
                    <Search className="w-4 h-4" />
                </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative" ref={dropdownRef}>
                <div
                    className="h-12 px-4 bg-white dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-white/10 rounded-xl flex items-center justify-between gap-3 cursor-pointer min-w-[200px] hover:border-[#1DBF73] transition-colors"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <span className="text-[#666666] dark:text-gray-400 text-sm">
                        Sort by: <span className="text-[#1A1A1A] dark:text-white font-semibold">{sortBy}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>

                <AnimatePresence>
                    {isDropdownOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.1 }}
                            className="absolute right-0 mt-2 w-full min-w-[200px] bg-white dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-white/10 rounded-xl shadow-xl z-50 overflow-hidden"
                        >
                            <div className="py-1">
                                {sortOptions.map((option) => (
                                    <button
                                        key={option}
                                        className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${sortBy === option ? 'text-[#1DBF73] font-medium' : 'text-[#666666] dark:text-gray-400'
                                            }`}
                                        onClick={() => {
                                            onSortChange(option);
                                            setIsDropdownOpen(false);
                                        }}
                                    >
                                        {option}
                                        {sortBy === option && <Check className="w-4 h-4" />}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Mobile Filter Toggle */}
            <button
                className="md:hidden h-12 w-12 bg-white dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-white/10 rounded-xl flex items-center justify-center text-[#1A1A1A] dark:text-white hover:border-[#1DBF73]"
                onClick={() => onOpenFilters?.()}
            >
                <SlidersHorizontal className="w-5 h-5" />
            </button>
        </div>
    );
}

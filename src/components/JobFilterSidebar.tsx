"use client";

import { useModal } from "@/context/ModalContext";
import { Check, X } from "lucide-react";
import { JobFilters } from "./LiveOpportunities";

interface JobFilterSidebarProps {
    filters: JobFilters;
    onFilterChange: (key: keyof JobFilters, value: string) => void;
    onClear: () => void;
    onClose?: () => void;
}

export function JobFilterSidebar({ filters, onFilterChange, onClear, onClose }: JobFilterSidebarProps) {
    const { openModal } = useModal();

    const FilterSection = ({
        title,
        options,
        filterKey
    }: {
        title: string;
        options: string[];
        filterKey: keyof JobFilters
    }) => (
        <div className="mb-8">
            <h3 className="font-bold text-[#1A1A1A] dark:text-white mb-4 text-sm uppercase tracking-wider">{title}</h3>
            <div className="space-y-3">
                {options.map((option) => {
                    const isChecked = Array.isArray(filters[filterKey])
                        ? (filters[filterKey] as string[]).includes(option)
                        : filters[filterKey] === option;

                    return (
                        <div
                            key={option}
                            className="flex items-center gap-3 cursor-pointer group"
                            onClick={() => onFilterChange(filterKey, option)}
                        >
                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${isChecked
                                ? "bg-[#1DBF73] border-[#1DBF73]"
                                : "border-[#E8E8E8] dark:border-white/20 bg-white dark:bg-white/5 group-hover:border-[#1DBF73]"
                                }`}>
                                {isChecked && <Check className="w-3.5 h-3.5 text-white" />}
                            </div>
                            <span className={`text-sm transition-colors ${isChecked
                                ? "text-[#1DBF73] font-medium"
                                : "text-[#666666] dark:text-gray-400 group-hover:text-[#1DBF73]"
                                }`}>
                                {option}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    return (
        <div className="w-full">
            <div className={`bg-white dark:bg-[#1A1A1A] rounded-xl border border-[#E8E8E8] dark:border-white/10 p-6 ${onClose ? 'h-full border-none rounded-none' : 'sticky top-24'}`}>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <h2 className="font-bold text-lg text-[#1A1A1A] dark:text-white">Filters</h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onClear}
                            className="text-xs text-[#1DBF73] font-semibold hover:underline"
                        >
                            Clear all
                        </button>
                        {onClose && (
                            <button
                                onClick={onClose}
                                className="p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-[#1A1A1A] dark:text-white" />
                            </button>
                        )}
                    </div>
                </div>

                <FilterSection
                    title="Employment Type"
                    filterKey="employmentType"
                    options={["Full Time", "Part Time", "Contract", "Internship"]}
                />
                <FilterSection
                    title="Salary Range"
                    filterKey="salaryRange"
                    options={["₹500 - ₹1000 / shift", "₹10k - ₹15k / month", "₹15k - ₹25k / month", "₹25k+ / month"]}
                />
                <FilterSection
                    title="Location"
                    filterKey="location"
                    options={["Park Street", "Salt Lake", "New Town", "Ballygunge", "EM Bypass"]}
                />
                <FilterSection
                    title="Job Role"
                    filterKey="role"
                    options={["Chef", "Waiter", "Bartender", "Manager", "Barista", "Housekeeping"]}
                />
            </div>
        </div>
    );
}

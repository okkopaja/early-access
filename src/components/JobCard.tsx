"use client";

import { useModal } from "@/context/ModalContext";
import { MockJob } from "@/data/mockJobs";

import { MapPin, Clock, CheckCircle2, Bookmark } from "lucide-react";

interface JobCardProps {
    job: MockJob;
}

export function JobCard({ job }: JobCardProps) {
    const { openModal } = useModal();

    return (
        <div
            className="group bg-white dark:bg-[#1A1A1A] rounded-xl border border-[#E8E8E8] dark:border-white/10 p-5 hover:border-[#1DBF73] hover:shadow-lg transition-all duration-200 cursor-pointer relative"
            onClick={openModal}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex gap-4">
                    {/* Logo / Placeholder */}
                    <div className={`w-14 h-14 rounded-lg ${job.bgColor} flex items-center justify-center text-xl font-bold text-gray-700 shrink-0`}>
                        {job.company.charAt(0)}
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-[#1A1A1A] dark:text-white group-hover:text-[#1DBF73] transition-colors line-clamp-1">
                            {job.title}
                        </h3>
                        <div className="flex items-center gap-1.5 text-sm text-[#666666] dark:text-gray-400">
                            <span className="font-medium">{job.company}</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#1DBF73] fill-white dark:fill-transparent" />
                        </div>
                    </div>
                </div>

                {/* Bookmark Icon */}
                <button className="text-gray-300 hover:text-[#1DBF73] transition-colors">
                    <Bookmark className="w-5 h-5" />
                </button>
            </div>

            {/* Tags / Info */}
            <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-1 text-xs font-medium text-[#666666] dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-[#666666] dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded">
                    <Clock className="w-3 h-3" />
                    {job.postedDate}
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-[#1DBF73] bg-[#1DBF73]/10 px-2 py-1 rounded">
                    Rs. {job.salary}
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-[#E8E8E8] dark:border-white/10">
                <div className="flex gap-2">
                    {job.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-500 border border-gray-200 dark:border-gray-700 px-2 py-0.5 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <button className="text-sm font-bold text-[#1DBF73] hover:underline">
                    Apply Now
                </button>
            </div>
        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useModal } from "@/context/ModalContext";

const plans = [
  {
    name: "Basic",
    subtext: "Free forever",
    price: "₹0",
    period: "",
    features: [
      "Basic profile with photo",
      "Access to all job listings",
      "Standard job alerts",
      "Email support",
      "Get paid by next morning",
    ],
    button: "Sign Up Free",
    popular: false,
    highlight: false,
  },
  {
    name: "Verified Pro",
    subtext: "Trusted by restaurants",
    price: "₹199",
    period: "/month",
    features: [
      "Verified Pro badge",
      "See jobs 30 mins early",
      "Unlimited job alerts + SMS",
      "Priority in matches (3x callbacks)",
      "Get paid same day",
      "24/7 priority support",
      "₹5,000 on-shift insurance",
    ],
    button: "Upgrade Now",
    popular: true,
    highlight: true,
  },
  {
    name: "For Teams/Agencies",
    subtext: "Custom bulk hiring",
    price: "Custom", // Display logic for "Custom Pricing" is needed or string substitution
    displayPrice: "Custom Pricing",
    period: "",
    features: [
      "Bulk hire 5+ workers per shift",
      "Agency workspace",
      "Dedicated account manager",
      "Custom contract terms",
      "Priority support + SLA guarantees",
      "API access",
      "Advanced reporting",
    ],
    button: "Contact Sales",
    popular: false,
    highlight: false,
  },
];

export function Pricing() {
  const { openModal } = useModal();

  return (
    <section className="py-24 bg-transparent overflow-hidden relative">
      {/* Smooth Background Transition */}
      <div className="absolute inset-x-0 top-80 bottom-80 bg-[#F8F8F8] dark:bg-black/20 -z-10" />
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-transparent via-[#F8F8F8]/80 to-[#F8F8F8] dark:via-black/10 dark:to-black/20 -z-10 backdrop-blur-[2px]" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-transparent via-[#F8F8F8]/80 to-[#F8F8F8] dark:via-black/10 dark:to-black/20 -z-10" />

      <div className="container px-6 mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#1DBF73] font-semibold text-xs tracking-[1px] mb-2 uppercase brightness-55 dark:brightness-100"
          >
            MEMBERSHIP
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-white mb-4"
          >
            Work More. Earn More.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#666666] dark:text-gray-400 max-w-lg mx-auto leading-relaxed"
          >
            Our verified members get hired 3x faster and access premium shifts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={cn(
                "rounded-xl p-8 relative flex flex-col h-full transition-transform duration-300",
                plan.highlight
                  ? "bg-[#1DBF73] text-white shadow-[0_8px_24px_rgba(29,191,115,0.2)] md:-translate-y-4 md:scale-105 z-10 border-2 border-[#1DBF73]"
                  : "bg-white dark:bg-[#1A1A1A] border border-[#E8E8E8] dark:border-white/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 -mt-3 -mr-3 md:mt-4 md:mr-4 bg-white/20 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={cn("text-lg font-semibold mb-1", plan.highlight ? "text-white" : "text-[#1A1A1A] dark:text-white")}>
                  {plan.name}
                </h3>
                <p className={cn("text-sm", plan.highlight ? "text-white/80" : "text-[#666666] dark:text-gray-400")}>
                  {plan.subtext}
                </p>
              </div>

              <div className="mb-8">
                {plan.displayPrice ? (
                  <span className={cn("text-2xl font-bold", plan.highlight ? "text-white" : "text-[#1A1A1A] dark:text-white")}>
                    {plan.displayPrice}
                  </span>
                ) : (
                  <>
                    <span className={cn("text-4xl font-bold", plan.highlight ? "text-white" : "text-[#1DBF73]")}>
                      {plan.price}
                    </span>
                    <span className={cn("text-sm font-medium", plan.highlight ? "text-white/80" : "text-[#666666] dark:text-gray-400")}>
                      {plan.period}
                    </span>
                  </>
                )}
              </div>

              <button
                onClick={openModal}
                className={cn(
                  "w-full py-3 rounded-lg font-semibold mb-8 transition-colors text-sm",
                  plan.highlight
                    ? "bg-white text-[#1DBF73] hover:shadow-lg"
                    : "bg-transparent border-2 border-[#404145] dark:border-gray-500 text-[#404145] dark:text-gray-200 hover:bg-[#F8F8F8] dark:hover:bg-white/5",
                  plan.name.includes("Teams") && "border-[#1DBF73] text-[#1DBF73] hover:bg-[#F0F7F4] dark:hover:bg-[#1DBF73]/10"
                )}
              >
                {plan.button}
              </button>

              <ul className="space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className={cn(
                        "w-5 h-5 shrink-0",
                        plan.highlight ? "text-white" : "text-[#1DBF73]"
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm leading-snug",
                        plan.highlight ? "text-white" : "text-[#666666] dark:text-gray-400"
                      )}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

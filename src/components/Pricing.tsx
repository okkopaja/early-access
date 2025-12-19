"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useModal } from "@/context/ModalContext";

const plans = [
  {
    name: "Starter",
    price: "₹0",
    period: "/month",
    label: "Perfect for trying out the platform",
    features: [
      "Weekly Payouts",
      "Basic Web Profile",
      "Standard Visibility",
      "5% Commission",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹199",
    period: "/month",
    label: "For serious freelancers",
    features: [
      "Instant Daily UPI Payouts",
      "Smart Profile with Video Intro & More",
      "Get Hired 3x Faster with Boosts",
      "0% Commission on Repeat Clients",
      "Priority Job Alerts",
    ],
    button: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise - For Agencies & Event Companies",
    price: "Custom",
    period: "",
    label: "High-volume hiring, guaranteed crews, and deep integrations for serious operators.",
    features: [
      "Volume-based commission with custom contracts",
      "Bulk booking for large events and recurring shifts",
      "Multi-user agency workspace & advanced analytics",
      "ATS / HR system integrations (API & webhooks)",
      "Dedicated account manager, 24/7 priority support & fill-rate SLAs",
      "Ideal for staffing agencies, hotel groups, and event management companies running 100+ shifts/month."
    ],
    button: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const { openModal } = useModal();

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[var(--color-primary)]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl px-6 mx-auto relative text-center">
        <div className="mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto"
          >
            Choose the plan that fits your needs. No hidden fees.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.4,
                ease: "easeOut"
              }}
              className={cn(
                "glass p-6 rounded-3xl relative flex flex-col h-full group transition-[box-shadow,border-color,background-color] duration-300",
                "hover:!shadow-[0_20px_40px_-15px_rgba(0,100,255,0.15)] dark:hover:!shadow-[0_20px_40px_-15px_rgba(0,255,136,0.5)]",
                plan.popular
                  ? "order-first lg:order-none border-[var(--color-primary)]/40 bg-[var(--color-primary)]/[0.08] shadow-popular z-20 hover:!border-cyan-500 dark:hover:!border-[#00ff88]"
                  : "border-white/5 hover:border-[var(--color-primary)]/30 z-10",
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-black font-bold px-3 py-1 rounded-full text-[11px] shadow-lg tracking-wider uppercase">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold mb-1.5 leading-tight">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {plan.label}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-black tracking-tight">
                  {plan.price}
                </span>
                <span className="text-muted-foreground ml-1 font-medium text-sm">
                  {plan.period}
                </span>
              </div>

              <button
                onClick={openModal}
                className={cn(
                  "w-full py-2.5 rounded-xl font-bold mb-8 transition-all text-sm",
                  plan.popular
                    ? "bg-[var(--color-primary)] text-black hover:scale-[1.02] shadow-l3 hover:shadow-l4 active:shadow-l2"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 shadow-l2 hover:shadow-l3 active:shadow-l1",
                )}
              >
                {plan.button}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className={cn(
                        "w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                        plan.popular
                          ? "bg-[var(--color-primary)] text-black"
                          : "bg-[var(--color-primary)]/20",
                      )}
                    >
                      <Check
                        className={cn(
                          "w-3 h-3",
                          plan.popular
                            ? "text-black"
                            : "text-[var(--color-primary)]",
                        )}
                      />
                    </div>
                    <span
                      className={cn(
                        "text-sm leading-snug",
                        plan.popular
                          ? "text-foreground font-medium"
                          : "text-muted-foreground",
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

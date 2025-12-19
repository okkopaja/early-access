"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Loader2, User, Building2, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useModal } from "@/context/ModalContext";
import { cn } from "@/lib/utils";

type Role = "talent" | "partner";

export function EarlyAccessModal() {
  const { isOpen, closeModal } = useModal();
  const [role, setRole] = useState<Role | null>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setRole(null);
      setEmail("");
      setStatus("idle");
      setErrorMessage("");
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeModal]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!role) {
      setErrorMessage("Please select a role first");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const table = role === "talent" ? "talent_waitlist" : "partner_waitlist";
      const { error } = await supabase
        .from(table)
        .insert([{ email, source: "landing_page" }]);

      if (error) {
        if (error.code === "23505") {
          // Unique violation
          // Check if we can treat this as success or specific error
          // PRD says: "This email is already on the waitlist!"
          throw new Error("This email is already on the waitlist!");
        }
        throw error;
      }

      setStatus("success");
      setTimeout(() => {
        closeModal();
      }, 1500);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="w-full max-w-[480px] bg-white/95 dark:bg-[#141414]/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl overflow-hidden pointer-events-auto"
            >
              {/* Close Button */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 sm:p-10">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-2">
                    Get Early Access to Fastcrew
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Join the waitlist for early access
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Role Selection */}
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setRole("talent");
                        setErrorMessage("");
                      }}
                      className={cn(
                        "flex items-center justify-center gap-2 py-3 px-4 rounded-xl border transition-all duration-200",
                        role === "talent"
                          ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-black shadow-lg scale-[1.02]"
                          : "bg-transparent border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
                      )}
                    >
                      <User className="w-5 h-5" />
                      <span className="font-semibold">Talent</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setRole("partner");
                        setErrorMessage("");
                      }}
                      className={cn(
                        "flex items-center justify-center gap-2 py-3 px-4 rounded-xl border transition-all duration-200",
                        role === "partner"
                          ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-black shadow-lg scale-[1.02]"
                          : "bg-transparent border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
                      )}
                    >
                      <Building2 className="w-5 h-5" />
                      <span className="font-semibold">Partner</span>
                    </button>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrorMessage("");
                        }}
                        disabled={status === "loading" || status === "success"}
                        className={cn(
                          "w-full px-4 py-3.5 rounded-xl bg-neutral-50 dark:bg-white/5 border outline-none transition-all duration-200",
                          errorMessage && !email
                            ? "border-red-500 focus:border-red-500"
                            : "border-neutral-200 dark:border-white/10 focus:border-[var(--color-primary)]",
                        )}
                      />
                      {validateEmail(email) && !errorMessage && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-green-500"
                        >
                          <Check className="w-5 h-5" />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Error Message */}
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-red-500 text-sm justify-center"
                    >
                      <AlertCircle className="w-4 h-4" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className={cn(
                      "w-full py-3.5 rounded-xl font-bold text-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2",
                      status === "success"
                        ? "bg-green-500 text-white cursor-default"
                        : "bg-[var(--color-primary)] text-black hover:brightness-110 active:scale-[0.98]",
                    )}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : status === "success" ? (
                      <>
                        <Check className="w-5 h-5" />
                        <span>You're on the list!</span>
                      </>
                    ) : (
                      "Get Early Access"
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

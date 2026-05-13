"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has visited before
    const hasVisited = localStorage.getItem("dervision_has_visited");
    
    if (!hasVisited) {
      // Show modal after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("dervision_has_visited", "true");
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border border-outline-variant/20"
          >
            {/* Minimal aesthetic gradient top bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary via-accent to-secondary" />
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              
              <h2 className="text-2xl font-semibold text-primary tracking-tight mb-3">
                Welcome to Dervision
              </h2>
              
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                Discover our AI-powered skin disease detection system. A project by Team Innoventures aimed at making dermatological analysis accessible offline.
              </p>
              
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 px-4 bg-primary text-white rounded-xl font-medium text-sm hover:bg-primary-container transition-colors duration-200 ambient-shadow"
              >
                Explore the Project
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

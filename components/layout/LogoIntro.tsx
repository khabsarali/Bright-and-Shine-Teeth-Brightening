"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";

/**
 * Opening flourish: the Bright & Shine logo "pops" in on first load, then the
 * overlay lifts to reveal the hero. Shows once per session and is skipped
 * entirely when the user prefers reduced motion.
 */
export function LogoIntro() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    if (sessionStorage.getItem("bs-intro-seen")) return;
    setVisible(true);
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("bs-intro-seen", "1");
      document.body.style.overflow = "";
    }, 2200);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ivory"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.6, ease: "easeInOut", times: [0, 0.5, 1] }}
            >
              <Logo variant="dark" showWordmark className="scale-125" asStatic />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

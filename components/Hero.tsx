"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const smoothEase = [0.4, 0, 0.2, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

export default function Hero() {
  return (
    <section className="relative flex flex-1 items-center justify-center px-6 py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-px w-3/4 max-w-2xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />
        <div className="absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-3xl" />
      </div>

      <motion.div
        className="relative mx-auto max-w-3xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-slate-400"
        >
          Кадастровые услуги
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.1]"
        >
          New World Cadastre
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl"
        >
          Профессиональные кадастровые решения с точностью, прозрачностью и
          вниманием к каждой детали вашего проекта.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10">
          <motion.div
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.25, ease: smoothEase }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="h-12 px-8 text-base font-semibold bg-white text-slate-900 shadow-lg shadow-black/25 hover:bg-slate-100 hover:shadow-xl hover:shadow-black/30"
            >
              Получить консультацию
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

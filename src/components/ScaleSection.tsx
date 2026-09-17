import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, type ReactNode } from 'react';

interface ScaleSectionProps {
  children: ReactNode;
  className?: string;
}

export function ScaleSection({ children, className }: ScaleSectionProps) {
  const ref = useRef<HTMLElement>(null);

  // progress = 0 when the section enters from the bottom,
  // 1 when it exits at the top
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // 0.8 offscreen -> 1.2 at the middle of that pass -> 0.8 offscreen again
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);

  return (
    <motion.section ref={ref} style={{ scale }} className={className}>
      {children}
    </motion.section>
  );
}

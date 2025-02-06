import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

interface InfiniteScrollProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export default function InfiniteScroll({
  children,
  direction = 'left',
  speed = 20,
  className = ''
}: InfiniteScrollProps) {
  const [ref, { width }] = useMeasure();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = React.useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const onMouseUp = () => {
      setIsDragging(false);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden cursor-grab ${className} ${isDragging ? 'cursor-grabbing' : ''}`}
    >
      <motion.div
        ref={ref}
        animate={{
          x: direction === 'left' ? [-width, 0] : [0, -width]
        }}
        transition={{
          duration: width / speed,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop'
        }}
        className="flex"
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
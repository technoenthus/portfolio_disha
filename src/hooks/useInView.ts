import { useEffect, useState, useRef } from 'react';

export const useInView = (options: { threshold?: number; triggerOnce?: boolean } = {}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.triggerOnce) {
            observer.disconnect();
          }
        } else if (!options.triggerOnce) {
          setInView(false);
        }
      },
      { threshold: options.threshold || 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.triggerOnce]);

  return [ref, inView] as const;
};
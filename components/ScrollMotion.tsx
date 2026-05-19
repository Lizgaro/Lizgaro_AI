"use client";

import { useEffect } from "react";

export function ScrollMotion() {
  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-motion-reveal]"));
    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt-card]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));

    const cleanups = tiltItems.map((item) => {
      const handleMove = (event: PointerEvent) => {
        const rect = item.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 7;
        const rotateX = ((y / rect.height) - 0.5) * -7;

        item.style.setProperty("--cursor-x", `${x}px`);
        item.style.setProperty("--cursor-y", `${y}px`);
        item.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
        item.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
      };

      const handleLeave = () => {
        item.style.setProperty("--tilt-x", "0deg");
        item.style.setProperty("--tilt-y", "0deg");
      };

      item.addEventListener("pointermove", handleMove);
      item.addEventListener("pointerleave", handleLeave);

      return () => {
        item.removeEventListener("pointermove", handleMove);
        item.removeEventListener("pointerleave", handleLeave);
      };
    });

    return () => {
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}

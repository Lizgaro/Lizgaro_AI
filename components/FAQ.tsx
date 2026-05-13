"use client";

import { useState } from "react";
import { faq } from "@/data/faq";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="faq"
          label="08 / FAQ"
          title="Вопросы перед первым разговором"
          description="Коротко снимаю основные сомнения: с чем приходить, что будет на выходе и почему сайт - только часть системы."
        />

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-surface">
          {faq.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={item.question} className="border-b border-white/10 last:border-b-0">
                <button
                  type="button"
                  className="grid w-full grid-cols-[1fr_28px] gap-4 px-5 py-6 text-left transition hover:bg-white/[0.03] sm:px-8"
                  aria-expanded={isActive}
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                >
                  <span className="text-lg font-semibold text-text sm:text-xl">{item.question}</span>
                  <span className="text-2xl text-lime">{isActive ? "-" : "+"}</span>
                </button>
                {isActive ? (
                  <p className="max-w-4xl px-5 pb-7 text-base leading-7 text-muted sm:px-8">{item.answer}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

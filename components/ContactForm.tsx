"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";

const goalOptions = [
  "Разобрать проект",
  "Сайт или лендинг",
  "Бот / AI-сценарий",
  "Оффер и путь клиента",
  "Просто обсудить идею"
];

const stageOptions = ["Пока только идея", "Уже есть продукт", "Есть сайт/соцсети", "Заявки теряются"];

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [goals, setGoals] = useState<string[]>(["Разобрать проект"]);
  const [stage, setStage] = useState(stageOptions[0]);
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  function toggleGoal(goal: string) {
    setGoals((current) => (current.includes(goal) ? current.filter((item) => item !== goal) : [...current, goal]));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setState("loading");
    setError("");

    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") || ""),
      contact: String(form.get("contact") || ""),
      message: String(form.get("message") || ""),
      website: String(form.get("website") || ""),
      goals,
      stage
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Не получилось отправить заявку.");
      }

      formElement.reset();
      setGoals(["Разобрать проект"]);
      setStage(stageOptions[0]);
      setState("success");
    } catch (caughtError) {
      setState("error");
      setError(caughtError instanceof Error ? caughtError.message : "Не получилось отправить заявку.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-ink/15 bg-ink/5 p-5 shadow-[0_24px_90px_rgba(11,13,12,0.12)] sm:p-6">
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <p className="font-mono text-xs uppercase text-ink/60">Короткий старт диалога</p>
      <h3 className="mt-3 font-display text-3xl font-black uppercase leading-none text-ink sm:text-4xl">
        Напиши как есть
      </h3>
      <p className="mt-3 text-sm leading-6 text-ink/70">
        Не нужен идеальный бриф. Достаточно пары строк: что есть сейчас, где затык и какой результат нужен.
      </p>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-ink">Как к тебе обращаться</span>
          <input
            name="name"
            placeholder="Имя или как удобно"
            className="min-h-12 rounded-2xl border border-ink/15 bg-ink/5 px-4 text-sm text-ink placeholder:text-ink/45 outline-none transition focus:border-ink focus:bg-text/70 focus:shadow-[0_0_0_4px_rgba(11,13,12,0.08)]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-ink">Telegram или email</span>
          <input
            name="contact"
            required
            placeholder="@telegram или email"
            className="min-h-12 rounded-2xl border border-ink/15 bg-ink/5 px-4 text-sm text-ink placeholder:text-ink/45 outline-none transition focus:border-ink focus:bg-text/70 focus:shadow-[0_0_0_4px_rgba(11,13,12,0.08)]"
          />
        </label>

        <div>
          <span className="text-sm font-semibold text-ink">Что есть сейчас?</span>
          <p className="mt-1 text-xs leading-5 text-ink/55">Можно выбрать несколько вариантов.</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {goalOptions.map((goal) => {
              const isActive = goals.includes(goal);
              return (
                <button
                  key={goal}
                  type="button"
                  onClick={() => toggleGoal(goal)}
                  className={`interactive-link rounded-full border px-3 py-2 text-xs font-semibold ${
                    isActive ? "border-ink bg-ink text-text shadow-[0_12px_32px_rgba(11,13,12,0.14)]" : "border-ink/15 bg-text/20 text-ink/70 hover:border-ink/40 hover:bg-text/35"
                  }`}
                >
                  {goal}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold text-ink">Где сейчас затык?</span>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {stageOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setStage(option)}
                className={`interactive-link rounded-2xl border px-3 py-3 text-left text-xs font-semibold ${
                  stage === option ? "border-ink bg-ink text-text shadow-[0_12px_32px_rgba(11,13,12,0.14)]" : "border-ink/15 bg-text/20 text-ink/70 hover:border-ink/40 hover:bg-text/35"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-ink">Какой результат нужен?</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Например: есть проект и переходы из соцсетей, но люди не оставляют заявки. Хочу понять, что чинить первым."
            className="resize-none rounded-2xl border border-ink/15 bg-ink/5 px-4 py-3 text-sm leading-6 text-ink placeholder:text-ink/45 outline-none transition focus:border-ink focus:bg-text/70 focus:shadow-[0_0_0_4px_rgba(11,13,12,0.08)]"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="interactive-link mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-ink bg-ink px-5 py-3 text-sm font-semibold text-text shadow-[0_18px_46px_rgba(11,13,12,0.18)] hover:bg-surface disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "loading" ? "Отправляю..." : "Заполнить короткую анкету"}
      </button>

      {state === "success" ? (
        <p className="mt-3 rounded-2xl border border-ink/15 bg-text/25 p-3 text-sm leading-6 text-ink/75">
          Спасибо. Я посмотрю и вернусь с первым вопросом или предложением, с чего начать.
        </p>
      ) : null}
      {state === "error" ? (
        <p className="mt-3 rounded-2xl border border-ink/15 bg-text/25 p-3 text-sm leading-6 text-ink/75">
          {error} Если форма капризничает, напиши напрямую:{" "}
          <a href={siteConfig.contacts.telegram} className="font-semibold underline">
            Telegram
          </a>{" "}
          или{" "}
          <a href={`mailto:${siteConfig.contacts.email}`} className="font-semibold underline">
            {siteConfig.contacts.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}

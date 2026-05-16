"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";

const goalOptions = [
  "Разбор монетизации",
  "Сайт / лендинг",
  "Telegram-бот / AI-инструмент",
  "Воронка / контент",
  "Другое"
];

const stageOptions = ["Пока идея", "Есть проект", "Нужно улучшить", "Не знаю, с чего начать"];

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [goals, setGoals] = useState<string[]>(["Разбор монетизации"]);
  const [stage, setStage] = useState(stageOptions[0]);
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  function toggleGoal(goal: string) {
    setGoals((current) => (current.includes(goal) ? current.filter((item) => item !== goal) : [...current, goal]));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    setError("");

    const form = new FormData(event.currentTarget);
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

      event.currentTarget.reset();
      setGoals(["Разбор монетизации"]);
      setStage(stageOptions[0]);
      setState("success");
    } catch (caughtError) {
      setState("error");
      setError(caughtError instanceof Error ? caughtError.message : "Не получилось отправить заявку.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-ink/15 bg-ink/5 p-5 sm:p-6">
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <p className="font-mono text-xs uppercase text-ink/60">Короткая анкета</p>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-ink">Как к тебе обращаться</span>
          <input
            name="name"
            placeholder="Имя"
            className="min-h-12 rounded-2xl border border-ink/15 bg-ink/5 px-4 text-sm text-ink placeholder:text-ink/45 outline-none transition focus:border-ink/50"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-ink">Куда ответить</span>
          <input
            name="contact"
            required
            placeholder="@telegram или email"
            className="min-h-12 rounded-2xl border border-ink/15 bg-ink/5 px-4 text-sm text-ink placeholder:text-ink/45 outline-none transition focus:border-ink/50"
          />
        </label>

        <div>
          <span className="text-sm font-semibold text-ink">Что нужно</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {goalOptions.map((goal) => {
              const isActive = goals.includes(goal);
              return (
                <button
                  key={goal}
                  type="button"
                  onClick={() => toggleGoal(goal)}
                  className={`interactive-link rounded-full border px-3 py-2 text-xs font-semibold ${
                    isActive ? "border-ink bg-ink text-text" : "border-ink/15 bg-transparent text-ink/70 hover:border-ink/40"
                  }`}
                >
                  {goal}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold text-ink">Стадия</span>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {stageOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setStage(option)}
                className={`interactive-link rounded-2xl border px-3 py-3 text-left text-xs font-semibold ${
                  stage === option ? "border-ink bg-ink text-text" : "border-ink/15 bg-transparent text-ink/70 hover:border-ink/40"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-ink">Коротко о задаче</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Например: есть канал, хочу понять, что продавать и нужен ли сайт/бот."
            className="rounded-2xl border border-ink/15 bg-ink/5 px-4 py-3 text-sm leading-6 text-ink placeholder:text-ink/45 outline-none transition focus:border-ink/50"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={state === "loading"}
        className="interactive-link mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full border border-ink bg-ink px-5 py-3 text-sm font-semibold text-text hover:bg-surface disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "loading" ? "Отправляю..." : "Отправить заявку"}
      </button>

      {state === "success" ? (
        <p className="mt-3 text-sm leading-6 text-ink/70">Заявка отправлена. Я отвечу в Telegram или на почту.</p>
      ) : null}
      {state === "error" ? (
        <p className="mt-3 text-sm leading-6 text-ink/70">
          {error} Можно написать напрямую:{" "}
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

import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  contact?: string;
  goals?: string[];
  stage?: string;
  message?: string;
  website?: string;
};

function cleanText(value: unknown, maxLength = 1200) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

function formatMessage(payload: ContactPayload) {
  const goals = Array.isArray(payload.goals) ? payload.goals.map((item) => cleanText(item, 80)).filter(Boolean) : [];

  return [
    "Новая заявка с сайта",
    "",
    `Имя: ${cleanText(payload.name, 120) || "не указано"}`,
    `Контакт: ${cleanText(payload.contact, 180) || "не указан"}`,
    `Что нужно: ${goals.length ? goals.join(", ") : "не выбрано"}`,
    `Стадия: ${cleanText(payload.stage, 120) || "не указана"}`,
    "",
    "Комментарий:",
    cleanText(payload.message, 1200) || "без комментария"
  ].join("\n");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Некорректный формат заявки." }, { status: 400 });
  }

  if (payload.website) {
    return NextResponse.json({ ok: true });
  }

  const contact = cleanText(payload.contact, 180);
  const message = cleanText(payload.message, 1200);
  const goals = Array.isArray(payload.goals) ? payload.goals.filter(Boolean) : [];

  if (!contact || (!message && !goals.length)) {
    return NextResponse.json(
      { ok: false, error: "Укажи контакт и выбери задачу или коротко опиши проект." },
      { status: 400 }
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      {
        ok: false,
        error: "Форма готова, но Telegram-отправка ещё не настроена на сервере."
      },
      { status: 503 }
    );
  }

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: formatMessage(payload),
      disable_web_page_preview: true
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, error: "Telegram не принял заявку. Можно написать напрямую в Telegram или на почту." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

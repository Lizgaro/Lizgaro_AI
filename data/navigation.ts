export const navigation = [
  { label: "Подход", href: "/#diagnosis" },
  { label: "Решения", href: "/#solutions" },
  { label: "Кейсы", href: "/#cases" },
  { label: "Процесс", href: "/#process" },
  { label: "Проекты", href: "/#proof" },
  { label: "Блог", href: "/blog" },
  { label: "Соцсети", href: "/#socials" },
  { label: "Контакт", href: "/#contact" }
];

export type NavigationItem = (typeof navigation)[number];

export const navigation = [
  { label: "Обо мне", href: "/#about" },
  { label: "Проекты", href: "/#projects" },
  { label: "Услуги", href: "/#services" },
  { label: "Блог", href: "/blog" },
  { label: "Фазы", href: "/journal" },
  { label: "Контакт", href: "/#contact" }
];

export type NavigationItem = (typeof navigation)[number];

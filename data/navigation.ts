export const navigation = [
  { label: "Обо мне", href: "/#about" },
  { label: "Услуги", href: "/#services" },
  { label: "Проекты", href: "/#projects" },
  { label: "Блог", href: "/blog" },
  { label: "Контакт", href: "/#contact" }
];

export type NavigationItem = (typeof navigation)[number];

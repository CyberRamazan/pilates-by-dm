export type Trainer = {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  experience?: string;
  highlights: string[];
  education?: string[];
  courses?: string[];
  quote?: string;
  instagram?: string;
  featured?: boolean;
};

export const TRAINERS: Trainer[] = [
  {
    id: "diana-muratova",
    name: "Муратова Диана",
    role: "Основатель · инструктор Pilates",
    image: "/trainers/diana-muratova.png",
    imageAlt: "Муратова Диана — основатель Pilates Center DM, инструктор Polestar Pilates",
    featured: true,
    experience: "Опыт в сфере движения с 2016 года",
    highlights: [
      "Основатель Pilates Center DM в г. Актау",
      "Ментор, сертифицированный инструктор по Pilates Mat",
      "Инструктор по Pilates на большом оборудовании GWS 1, 2, 3 (Polestar Pilates)",
      "Специалист по движению · сертифицированный инструктор Animal Flow (2023)",
    ],
    education: [
      "Международная школа Polestar Pilates",
      "Школа Art of Motion",
      "Школа Practica Center",
      "Школа Fitness Pro",
      "Kaz Fitness Academy",
    ],
    courses: [
      "Школа Елены Волковой",
      "Центр доктора Лабунца",
      "Kinesio Pro",
      "Центр «Анатомия» Александры Кибзий",
    ],
  },
  {
    id: "marzhan-bisenova",
    name: "Бисенова Маржан",
    role: "Инструктор Pilates Mat и большого оборудования",
    image: "/trainers/marzhan-bisenova.png",
    imageAlt: "Бисенова Маржан — инструктор Polestar Pilates",
    experience: "Опыт в сфере движения с 2020 года",
    highlights: [],
    education: ["Международная школа Polestar Pilates", "Школа Fitness Pro"],
    courses: [
      "Принципы движения Polestar Pilates",
      "Pilates Mat 1, 2, 3 (Polestar Pilates)",
      "Инструктор групповых программ (Fitness Pro)",
      "Pilates на большом оборудовании (Gateway Studio, Polestar Pilates)",
      "Стретчинг в групповом и персональном тренингах (Fitness Pro)",
    ],
  },
  {
    id: "marina-kiryushchenko",
    name: "Кирющенко Марина",
    role: "Преподаватель хатха-йоги",
    image: "/trainers/marina-kiryushchenko.png",
    imageAlt: "Кирющенко Марина — преподаватель хатха-йоги",
    instagram: "marinayogastyle",
    highlights: [
      "Кандидат в мастера спорта по художественной гимнастике",
      "Дипломированный преподаватель хатха-йоги",
    ],
    education: [
      "Академия Йоги Сергея Литау — диплом о профессиональной переподготовке",
    ],
    courses: [
      "Сертификат 475 ч., рус. яз., с правом преподавания",
      "Сертификат 475 ч., англ. яз., с правом преподавания",
      "Сертификат Yoga Alliance 200 ч., англ. яз., с правом преподавания",
    ],
    quote: "Через йогу к фигуре мечты",
  },
];

// Facts only from veon/client.json and audit/notes/business.md (ids B-F… in comments).
export const clinic = {
  name: "Dermline",
  phone: { display: "+380 93 93 66 446", href: "tel:+380939366446" }, // company.contacts.phones
  telegram: "https://t.me/dermlinecentre", // company.contacts.messengers
  viber: "viber://chat?number=%2B380939366446",
  email: "dermlinecentre@gmail.com", // company.contacts.emails
  address: "вул. Тернопільська 15, Львів", // B-F003
  map: "https://maps.app.goo.gl/3jUijCiCRzb4bnjh8", // B-F003
  hours: [
    { days: "Пн–Сб", time: "9:00–21:00" },
    { days: "Нд", time: "11:00–18:00" },
  ], // B-F004
  socials: [
    { name: "Instagram", href: "https://www.instagram.com/dermlinecentre/" },
    { name: "Facebook", href: "https://www.facebook.com/dermlinecentre/" },
    { name: "TikTok", href: "https://www.tiktok.com/@dermlinecentre" },
  ], // socials, status confirmed
} as const;

export const nav = [
  { label: "Послуги", href: "#concerns" },
  { label: "Акції", href: "#offer" },
  { label: "Лікарі", href: "#doctors" },
  { label: "Клініка", href: "#clinic" },
  { label: "Ціни", future: true },
  { label: "Контакти", href: "#contacts" },
] as const;

export interface Concern { problem: string; procedures: string; }
export interface ConcernGroup { id: string; label: string; layers: [string, string, string]; items: Concern[]; }

// B-F005, B-F006, company.products_services. Order: from the surface down (to be confirmed by the clinic).
export const concerns: ConcernGroup[] = [
  {
    id: "face", label: "Обличчя", layers: ["поверхня", "дерма", "SMAS"],
    items: [
      { problem: "Тьмяність, забиті пори", procedures: "Hydrafacial, чистка обличчя, догляди GUINOT, Casmara, DMK" },
      { problem: "Пігментація, тату і татуаж", procedures: "PicoSure" },
      { problem: "Судини", procedures: "ClearV, IPL-фототерапія" },
      { problem: "Рельєф, рубці", procedures: "CO2 фракційне шліфування, HALO" },
      { problem: "Зморшки, об'єм", procedures: "Ботулінотерапія, контурна пластика" },
      { problem: "Овал, пружність", procedures: "Ultraformer SMAS-ліфтинг, нитки APTOS" },
    ],
  },
  {
    id: "body", label: "Тіло", layers: ["поверхня", "дерма", "клітковина"],
    items: [
      { problem: "Небажане волосся", procedures: "Лазерна епіляція" },
      { problem: "Тонус шкіри тіла", procedures: "Ендосфера-терапія, масаж, обгортання" },
      { problem: "Локальні жирові відкладення", procedures: "Кріоліполіз Crio T-Shok, лазерна ліпосакція" },
    ],
  },
  {
    id: "hair", label: "Волосся", layers: ["поверхня", "дерма", "фолікул"],
    items: [
      { problem: "Стан шкіри голови і волосся", procedures: "Консультація трихолога" },
      { problem: "Волосся і шкіра голови у дитини", procedures: "Дитячий дерматолог-трихолог" },
      { problem: "Небажане волосся на обличчі й тілі", procedures: "Лазерна епіляція" },
    ],
  },
  {
    id: "skin", label: "Шкіра і новоутворення", layers: ["поверхня", "дерма", "глибше"],
    items: [
      { problem: "Стан шкіри, висипання", procedures: "Консультація дерматолога, діагностика VISIA" },
      { problem: "Родимки і новоутворення", procedures: "Дерматоскопія" },
      { problem: "Рубці", procedures: "Лікування рубців, CO2 фракційне шліфування" },
      { problem: "Видалення новоутворів", procedures: "Консультація пластичного хірурга, хірурга-онколога" },
    ],
  },
];

// B-F006: equipment by depth of action.
export const equipment = [
  { layer: "Поверхня і діагностика", devices: [{ name: "VISIA", use: "діагностика стану шкіри перед вибором процедури" }] },
  { layer: "Епідерміс", devices: [{ name: "Hydrafacial", use: "апаратне очищення і догляд за шкірою обличчя" }] },
  { layer: "Епідерміс і дерма", devices: [
    { name: "PicoSure", use: "пігментація, видалення тату і татуажу" },
    { name: "HALO", use: "оновлення рельєфу шкіри" },
    { name: "CO2", use: "фракційне шліфування, рубці" },
  ] },
  { layer: "Судини дерми", devices: [{ name: "ClearV", use: "судини" }] },
  { layer: "Підшкірна клітковина", devices: [
    { name: "Crio T-Shok", use: "кріоліполіз" },
    { name: "Ендосфера", use: "ендосфера-терапія тіла" },
  ] },
  { layer: "SMAS", devices: [{ name: "Ultraformer", use: "SMAS-ліфтинг" }] },
] as const;

export const preparations = ["Jalupro", "Fillmed", "PB Serum", "ENDORET", "APTOS"] as const;

export const futurePages = ["Ціни", "Про нас", "Магазин FILLMED", "Подарункові сертифікати", "Блог", "Політика конфіденційності"] as const;

export const NOTE = "Розділ у розробці";

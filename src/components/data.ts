export const TABS = [
  { id: "status", label: "Статус работ", icon: "Wrench" },
  { id: "orders", label: "Мои заказы", icon: "ClipboardList" },
  { id: "history", label: "История", icon: "History" },
  { id: "gallery", label: "Галерея", icon: "Images" },
  { id: "tips", label: "Советы", icon: "Lightbulb" },
  { id: "notifications", label: "Уведомления", icon: "Bell" },
  { id: "contacts", label: "Контакты", icon: "Phone" },
];

export const STAGES = [
  { id: 1, label: "Приёмка и диагностика", done: true, active: false },
  { id: 2, label: "Демонтаж поражённых элементов", done: true, active: false },
  { id: 3, label: "Сварочные работы", done: true, active: true },
  { id: 4, label: "Антикоррозийная обработка", done: false, active: false },
  { id: 5, label: "Шпатлёвка и грунтовка", done: false, active: false },
  { id: 6, label: "Покраска и лакировка", done: false, active: false },
  { id: 7, label: "Финальная проверка и выдача", done: false, active: false },
];

export const ORDERS = [
  {
    id: "КМ-2847",
    car: "Toyota Camry 2019",
    work: "Замена порогов + антикор",
    status: "В работе",
    progress: 43,
    startDate: "12 февр. 2026",
    endDate: "24 февр. 2026",
    master: "Алексей Воронов",
  },
  {
    id: "КМ-2801",
    car: "Kia Sportage 2017",
    work: "Ремонт арки заднего крыла",
    status: "Завершён",
    progress: 100,
    startDate: "20 янв. 2026",
    endDate: "28 янв. 2026",
    master: "Дмитрий Ларин",
  },
];

export const HISTORY = [
  {
    id: "КМ-2801",
    date: "28 янв. 2026",
    car: "Kia Sportage 2017",
    work: "Ремонт арки заднего крыла",
    cost: "18 500 ₽",
  },
  {
    id: "КМ-2644",
    date: "05 окт. 2025",
    car: "Toyota Camry 2019",
    work: "Сварка и покраска порога левого",
    cost: "12 000 ₽",
  },
  {
    id: "КМ-2519",
    date: "14 июл. 2025",
    car: "Toyota Camry 2019",
    work: "Антикоррозийная обработка днища",
    cost: "9 800 ₽",
  },
];

export const GALLERY = [
  {
    id: 1,
    before: "https://cdn.poehali.dev/projects/d8132bd5-3b20-410b-820e-3901d43115f3/files/fcc58d69-f3ac-4294-aa0c-d32157d39277.jpg",
    after: "https://cdn.poehali.dev/projects/d8132bd5-3b20-410b-820e-3901d43115f3/files/fa442551-8aa2-4b49-8dc3-1143448f0049.jpg",
    title: "Замена порога Toyota Camry",
    desc: "Полная замена левого порога, сварка, антикор, покраска в цвет",
  },
  {
    id: 2,
    before: "https://cdn.poehali.dev/projects/d8132bd5-3b20-410b-820e-3901d43115f3/files/fcc58d69-f3ac-4294-aa0c-d32157d39277.jpg",
    after: "https://cdn.poehali.dev/projects/d8132bd5-3b20-410b-820e-3901d43115f3/files/fa442551-8aa2-4b49-8dc3-1143448f0049.jpg",
    title: "Ремонт арки Kia Sportage",
    desc: "Восстановление арки заднего крыла, обработка скрытых полостей",
  },
  {
    id: 3,
    before: "https://cdn.poehali.dev/projects/d8132bd5-3b20-410b-820e-3901d43115f3/files/fcc58d69-f3ac-4294-aa0c-d32157d39277.jpg",
    after: "https://cdn.poehali.dev/projects/d8132bd5-3b20-410b-820e-3901d43115f3/files/fa442551-8aa2-4b49-8dc3-1143448f0049.jpg",
    title: "Замена порогов Hyundai Tucson",
    desc: "Замена обоих порогов, грунтовка, покраска, защитный лак",
  },
];

export const TIPS = [
  {
    icon: "Droplets",
    title: "Мойка после покраски",
    text: "Первые 2 недели после покраски используйте только ручную мойку без щёток. Воск и полироли — не ранее чем через 3 месяца.",
    tag: "Покраска",
  },
  {
    icon: "Thermometer",
    title: "Антикор в зимний период",
    text: "Раз в год, до наступления зимы, обновляйте антикоррозийное покрытие скрытых полостей. Это продлит кузов на 5–7 лет.",
    tag: "Антикор",
  },
  {
    icon: "AlertTriangle",
    title: "Проверка сварных швов",
    text: "Осматривайте сварные швы каждую весну после схода дорожных реагентов. Появление ржавчины — сигнал к немедленной обработке.",
    tag: "Техобслуживание",
  },
  {
    icon: "Wind",
    title: "Уход за порогами",
    text: "Регулярно очищайте пороги от грязи и соли. После зимних поездок сразу промывайте колёсные арки и пороги снизу.",
    tag: "Уход",
  },
];

export const NOTIFICATIONS = [
  {
    id: 1,
    type: "progress",
    icon: "Wrench",
    title: "Сварочные работы завершены",
    text: "По заказу КМ-2847. Автомобиль переходит на этап антикоррозийной обработки.",
    time: "Сегодня, 11:32",
    unread: true,
  },
  {
    id: 2,
    type: "info",
    icon: "Bell",
    title: "Плановый срок выдачи — 24 февраля",
    text: "Toyota Camry по заказу КМ-2847 будет готова в срок. Мастер: Алексей Воронов.",
    time: "Вчера, 15:10",
    unread: true,
  },
  {
    id: 3,
    type: "tip",
    icon: "Lightbulb",
    title: "Совет по уходу",
    text: "После получения автомобиля избегайте автомоек-автоматов в течение 2 недель.",
    time: "12 февр., 09:00",
    unread: false,
  },
  {
    id: 4,
    type: "done",
    icon: "CheckCircle",
    title: "Заказ КМ-2801 завершён",
    text: "Kia Sportage готова к выдаче. Работа выполнена в срок.",
    time: "28 янв., 17:45",
    unread: false,
  },
];

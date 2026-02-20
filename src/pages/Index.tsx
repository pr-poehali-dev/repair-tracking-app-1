import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const TABS = [
  { id: "status", label: "Статус работ", icon: "Wrench" },
  { id: "orders", label: "Мои заказы", icon: "ClipboardList" },
  { id: "history", label: "История", icon: "History" },
  { id: "gallery", label: "Галерея", icon: "Images" },
  { id: "tips", label: "Советы", icon: "Lightbulb" },
  { id: "notifications", label: "Уведомления", icon: "Bell" },
  { id: "contacts", label: "Контакты", icon: "Phone" },
];

const STAGES = [
  { id: 1, label: "Приёмка и диагностика", done: true, active: false },
  { id: 2, label: "Демонтаж поражённых элементов", done: true, active: false },
  { id: 3, label: "Сварочные работы", done: true, active: true },
  { id: 4, label: "Антикоррозийная обработка", done: false, active: false },
  { id: 5, label: "Шпатлёвка и грунтовка", done: false, active: false },
  { id: 6, label: "Покраска и лакировка", done: false, active: false },
  { id: 7, label: "Финальная проверка и выдача", done: false, active: false },
];

const ORDERS = [
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

const HISTORY = [
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

const GALLERY = [
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

const TIPS = [
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

const NOTIFICATIONS = [
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

export default function Index() {
  const [activeTab, setActiveTab] = useState("status");
  const [galleryView, setGalleryView] = useState<{ [key: number]: "before" | "after" }>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleGalleryView = (id: number) => {
    setGalleryView((prev) => ({
      ...prev,
      [id]: prev[id] === "after" ? "before" : "after",
    }));
  };

  const unreadCount = NOTIFICATIONS.filter((n) => n.unread).length;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded flex items-center justify-center">
              <Icon name="Wrench" size={18} className="text-primary-foreground" />
            </div>
            <div>
              <div className="font-heading text-lg font-bold tracking-wider text-foreground leading-none">
                КУЗОВ<span className="text-primary">МАСТЕР</span>
              </div>
              <div className="text-xs text-muted-foreground font-light tracking-widest uppercase">
                Кузовной центр
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-3 py-2 text-xs font-medium tracking-wide uppercase transition-all rounded ${
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon name={tab.icon} size={13} />
                {tab.label}
                {tab.id === "notifications" && unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-primary-foreground text-[9px] font-bold rounded-full flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card animate-fade-in">
            <div className="max-w-6xl mx-auto px-4 py-2 grid grid-cols-2 gap-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setMobileMenuOpen(false); }}
                  className={`relative flex items-center gap-2 px-3 py-2.5 text-xs font-medium tracking-wide uppercase rounded transition-all ${
                    activeTab === tab.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  <Icon name={tab.icon} size={14} />
                  {tab.label}
                  {tab.id === "notifications" && unreadCount > 0 && (
                    <span className="ml-auto w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">

        {/* STATUS */}
        {activeTab === "status" && (
          <div className="animate-fade-in space-y-6">
            <div>
              <h1 className="font-heading text-3xl font-bold tracking-wide text-foreground">
                СТАТУС РЕМОНТА
              </h1>
              <p className="text-muted-foreground text-sm mt-1">Актуальное состояние по вашему заказу</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Заказ</div>
                  <div className="font-heading text-2xl font-bold text-primary tracking-wider">КМ-2847</div>
                  <div className="text-foreground font-medium mt-1">Toyota Camry 2019</div>
                  <div className="text-muted-foreground text-sm">Замена порогов + антикоррозийная обработка</div>
                </div>
                <div className="text-right">
                  <Badge className="bg-primary/15 text-primary border-primary/30 text-xs font-medium px-3 py-1 uppercase tracking-wide">
                    В работе
                  </Badge>
                  <div className="text-xs text-muted-foreground mt-2">Мастер: Алексей Воронов</div>
                  <div className="text-xs text-muted-foreground">Готовность: <span className="text-foreground font-medium">24 февраля</span></div>
                </div>
              </div>

              <div className="mb-2 flex justify-between items-center">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Прогресс</span>
                <span className="text-primary font-bold font-heading text-lg">43%</span>
              </div>
              <Progress value={43} className="h-2 mb-8" />

              <div className="space-y-0">
                {STAGES.map((stage, i) => (
                  <div key={stage.id} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        stage.done && !stage.active
                          ? "bg-primary border-primary"
                          : stage.active
                          ? "border-primary bg-primary/15 animate-pulse"
                          : "border-border bg-secondary"
                      }`}>
                        {stage.done && !stage.active ? (
                          <Icon name="Check" size={14} className="text-primary-foreground" />
                        ) : stage.active ? (
                          <Icon name="Wrench" size={13} className="text-primary" />
                        ) : (
                          <span className="text-xs text-muted-foreground font-medium">{stage.id}</span>
                        )}
                      </div>
                      {i < STAGES.length - 1 && (
                        <div className={`w-0.5 h-8 mt-0.5 ${stage.done ? "bg-primary/40" : "bg-border"}`} />
                      )}
                    </div>
                    <div className="pb-4 pt-1">
                      <div className={`text-sm font-medium ${
                        stage.active ? "text-primary" : stage.done ? "text-foreground" : "text-muted-foreground"
                      }`}>
                        {stage.label}
                      </div>
                      {stage.active && (
                        <div className="text-xs text-muted-foreground mt-0.5">
                          Выполняется сейчас
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-primary/20 rounded-lg p-5 flex gap-4 items-start">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                <Icon name="MessageSquare" size={18} className="text-primary" />
              </div>
              <div>
                <div className="font-semibold text-sm text-foreground mb-1">Сообщение от мастера</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Сварочные работы по правому порогу завершены, приступаем к левому. Всё идёт по плану, сдадим в срок. При необходимости свяжусь дополнительно.
                </p>
                <div className="text-xs text-muted-foreground mt-2">Сегодня, 11:30</div>
              </div>
            </div>
          </div>
        )}

        {/* ORDERS */}
        {activeTab === "orders" && (
          <div className="animate-fade-in space-y-6">
            <div>
              <h1 className="font-heading text-3xl font-bold tracking-wide text-foreground">МОИ ЗАКАЗЫ</h1>
              <p className="text-muted-foreground text-sm mt-1">Все ваши активные и недавние заказы</p>
            </div>
            <div className="space-y-4">
              {ORDERS.map((order) => (
                <div key={order.id} className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all">
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-heading text-lg font-bold text-primary tracking-wider">{order.id}</span>
                        <Badge className={order.status === "В работе"
                          ? "bg-primary/15 text-primary border-primary/30 text-xs uppercase tracking-wide"
                          : "bg-green-500/10 text-green-400 border-green-500/20 text-xs uppercase tracking-wide"
                        }>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="font-medium text-foreground">{order.car}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{order.work}</div>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div>{order.startDate} — {order.endDate}</div>
                      <div className="mt-0.5">Мастер: {order.master}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={order.progress} className="h-1.5 flex-1" />
                    <span className="text-primary font-bold font-heading text-sm w-10 text-right">{order.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HISTORY */}
        {activeTab === "history" && (
          <div className="animate-fade-in space-y-6">
            <div>
              <h1 className="font-heading text-3xl font-bold tracking-wide text-foreground">ИСТОРИЯ РЕМОНТОВ</h1>
              <p className="text-muted-foreground text-sm mt-1">Все выполненные работы по вашим автомобилям</p>
            </div>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <div className="hidden sm:grid grid-cols-5 px-5 py-3 border-b border-border text-xs text-muted-foreground uppercase tracking-wider font-medium">
                <div>Заказ</div>
                <div>Дата</div>
                <div>Автомобиль</div>
                <div className="col-span-2">Работы</div>
              </div>
              {HISTORY.map((item, i) => (
                <div key={item.id} className={`px-5 py-4 ${i < HISTORY.length - 1 ? "border-b border-border" : ""} hover:bg-secondary/30 transition-colors`}>
                  <div className="sm:grid sm:grid-cols-5 gap-2 items-center">
                    <div className="font-heading font-bold text-primary tracking-wider text-sm">{item.id}</div>
                    <div className="text-sm text-muted-foreground">{item.date}</div>
                    <div className="text-sm text-foreground">{item.car}</div>
                    <div className="text-sm text-muted-foreground col-span-2 flex justify-between items-center">
                      <span>{item.work}</span>
                      <span className="font-semibold text-foreground ml-4 flex-shrink-0">{item.cost}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GALLERY */}
        {activeTab === "gallery" && (
          <div className="animate-fade-in space-y-6">
            <div>
              <h1 className="font-heading text-3xl font-bold tracking-wide text-foreground">ГАЛЕРЕЯ РАБОТ</h1>
              <p className="text-muted-foreground text-sm mt-1">Нажмите на кнопку, чтобы увидеть результат до и после</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {GALLERY.map((item) => (
                <div key={item.id} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all group">
                  <div className="relative overflow-hidden">
                    <img
                      src={galleryView[item.id] === "after" ? item.after : item.before}
                      alt={item.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={`text-xs font-semibold uppercase tracking-wide px-2 py-0.5 ${
                        galleryView[item.id] === "after"
                          ? "bg-green-500/80 text-white border-0"
                          : "bg-black/60 text-white border-0"
                      }`}>
                        {galleryView[item.id] === "after" ? "После" : "До"}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="font-semibold text-sm text-foreground mb-1">{item.title}</div>
                    <div className="text-xs text-muted-foreground mb-3 leading-relaxed">{item.desc}</div>
                    <button
                      onClick={() => toggleGalleryView(item.id)}
                      className="w-full py-2 text-xs font-medium uppercase tracking-wider border border-primary/30 text-primary rounded hover:bg-primary/10 transition-all"
                    >
                      Показать {galleryView[item.id] === "after" ? "до" : "после"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TIPS */}
        {activeTab === "tips" && (
          <div className="animate-fade-in space-y-6">
            <div>
              <h1 className="font-heading text-3xl font-bold tracking-wide text-foreground">СОВЕТЫ ПО УХОДУ</h1>
              <p className="text-muted-foreground text-sm mt-1">Рекомендации от мастеров КузовМастер</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {TIPS.map((tip, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <Icon name={tip.icon} size={18} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="font-semibold text-sm text-foreground">{tip.title}</div>
                        <Badge className="text-[10px] bg-secondary text-muted-foreground border-0 px-2 py-0.5">{tip.tag}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tip.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NOTIFICATIONS */}
        {activeTab === "notifications" && (
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-heading text-3xl font-bold tracking-wide text-foreground">УВЕДОМЛЕНИЯ</h1>
                <p className="text-muted-foreground text-sm mt-1">Информация о ходе работ и советы</p>
              </div>
              {unreadCount > 0 && (
                <Badge className="bg-primary/15 text-primary border-primary/30 text-xs px-3 py-1">
                  {unreadCount} новых
                </Badge>
              )}
            </div>
            <div className="space-y-3">
              {NOTIFICATIONS.map((n) => (
                <div key={n.id} className={`bg-card border rounded-lg p-5 flex gap-4 items-start transition-all ${
                  n.unread ? "border-primary/25" : "border-border opacity-70"
                }`}>
                  <div className={`w-9 h-9 rounded flex items-center justify-center flex-shrink-0 ${
                    n.type === "progress" ? "bg-primary/15" :
                    n.type === "done" ? "bg-green-500/10" :
                    "bg-secondary"
                  }`}>
                    <Icon name={n.icon} size={16} className={
                      n.type === "progress" ? "text-primary" :
                      n.type === "done" ? "text-green-400" :
                      "text-muted-foreground"
                    } />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-semibold text-sm text-foreground">{n.title}</div>
                      {n.unread && <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5" />}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{n.text}</p>
                    <div className="text-xs text-muted-foreground mt-2">{n.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACTS */}
        {activeTab === "contacts" && (
          <div className="animate-fade-in space-y-6">
            <div>
              <h1 className="font-heading text-3xl font-bold tracking-wide text-foreground">КОНТАКТЫ</h1>
              <p className="text-muted-foreground text-sm mt-1">Мы всегда на связи</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (495) 000-00-00", sub: "Пн–Сб: 9:00 – 19:00" },
                { icon: "MessageCircle", label: "WhatsApp / Telegram", value: "+7 (495) 000-00-00", sub: "Быстрый ответ в мессенджерах" },
                { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Примерная, 42", sub: "Удобная парковка на территории" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Сб: 9:00 – 19:00", sub: "Воскресенье — выходной" },
              ].map((c, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-5 flex gap-4 items-start hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon} size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{c.label}</div>
                    <div className="font-semibold text-foreground text-sm">{c.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/d8132bd5-3b20-410b-820e-3901d43115f3/files/e247f060-60f8-4b97-8a41-3b252a89456f.jpg"
                alt="Кузовной центр КузовМастер"
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <div className="font-heading text-lg font-bold tracking-wide text-foreground mb-1">КУЗОВНОЙ ЦЕНТР «КУЗОВМАСТЕР»</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Специализируемся на ремонте и замене порогов, восстановлении арок и смежных элементов кузова. Профессиональная покраска и антикоррозийная обработка сварных швов и скрытых полостей. Более 12 лет опыта.
                </p>
              </div>
            </div>
          </div>
        )}

      </main>

      <footer className="border-t border-border mt-16 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="font-heading tracking-wider">КУЗОВ<span className="text-primary">МАСТЕР</span> © 2026</div>
          <div>Кузовной центр — ремонт порогов, арок, покраска, антикор</div>
        </div>
      </footer>
    </div>
  );
}

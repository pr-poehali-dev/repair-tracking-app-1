import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { GALLERY, TIPS, NOTIFICATIONS } from "@/components/data";

interface TabContentProps {
  activeTab: string;
  galleryView: { [key: number]: "before" | "after" };
  toggleGalleryView: (id: number) => void;
  unreadCount: number;
}

export default function TabContent({
  activeTab,
  galleryView,
  toggleGalleryView,
  unreadCount,
}: TabContentProps) {
  return (
    <>
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
    </>
  );
}

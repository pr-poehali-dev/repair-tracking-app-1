import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { STAGES, ORDERS, HISTORY } from "@/components/data";

interface TabStatusProps {
  activeTab: string;
}

export default function TabStatus({ activeTab }: TabStatusProps) {
  return (
    <>
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
    </>
  );
}

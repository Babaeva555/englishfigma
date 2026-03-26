import {
  Plane,
  Hotel,
  UtensilsCrossed,
  MapPin,
  AlertCircle,
  Ticket,
  MessageCircle,
  FileText,
} from "lucide-react";

export function ProgramSection() {
  const modules = [
    {
      title: "Аэропорт без стресса",
      description:
        "Регистрация, паспортный контроль, вопросы на таможне — всё на английском.",
      benefit: "Уверенность уже в первые часы за границей.",
      icon: Plane,
      color: "#ff8844",
    },
    {
      title: "В отеле: заселение и помощь",
      description:
        "Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.",
      benefit: "Практика вежливых фраз и повседневной лексики.",
      icon: Hotel,
      color: "#14b8a6",
    },
    {
      title: "Кафе и рестораны",
      description: "Заказ еды, вопросы про аллергены, счёт и чаевые.",
      benefit: "Развитие гастрономического словаря и уверенности в общении.",
      icon: UtensilsCrossed,
      color: "#fbbf24",
    },
    {
      title: "На улице: ориентирование и просьбы",
      description: "Как спросить дорогу, вызвать такси или найти аптеку.",
      benefit: "Понимание устной речи и произношения в реальных ситуациях.",
      icon: MapPin,
      color: "#ff8844",
    },
    {
      title: "Экстренные случаи",
      description:
        "Потеря вещей, болезнь, помощь полиции — всё это на английском.",
      benefit: "Важные фразы, которые могут спасти отпуск.",
      icon: AlertCircle,
      color: "#ef4444",
    },
    {
      title: "Туризм и развлечения",
      description:
        "Покупка билетов, экскурсии, общение с гидами, музеи и парки.",
      benefit: "Погружение в культурный контекст через язык.",
      icon: Ticket,
      color: "#14b8a6",
    },
    {
      title: "Дружба в путешествиях",
      description:
        "Как познакомиться с другими детьми или подростками за границей.",
      benefit: "Игровая практика диалогов и неформального общения.",
      icon: MessageCircle,
      color: "#fbbf24",
    },
    {
      title: "Дипломный проект: «Мой идеальный отпуск»",
      description:
        "Ребёнок планирует воображаемое путешествие и представляет его на английском.",
      benefit: "Развитие связной речи и творческого самовыражения.",
      icon: FileText,
      color: "#8b5cf6",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0e1a] relative">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-[#ff8844]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-[#14b8a6]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fbbf24]/10 border border-[#fbbf24]/30 mb-6">
            <span className="text-sm text-[#fbbf24]">Программа курса</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Что будем изучать
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            8 модулей с практическими ситуациями из реальной жизни
            путешественника
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#131827] border border-[#ff8844]/20 rounded-xl p-6 hover:border-[#ff8844]/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="absolute top-4 right-4 text-xs font-bold text-gray-600">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4"
                  style={{ backgroundColor: `${module.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: module.color }} />
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {module.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  {module.description}
                </p>
                <div className="pt-3 border-t border-[#ff8844]/10">
                  <p className="text-sm text-[#14b8a6] flex items-start gap-2">
                    <span className="text-lg">👉</span>
                    <span>{module.benefit}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

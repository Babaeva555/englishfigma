import { Monitor, Headphones, Wifi, Video } from "lucide-react";

export function RequirementsSection() {
  const requirements = [
    {
      title: "Компьютер или ноутбук",
      description: "Стационарный компьютер или ноутбук",
      icon: Monitor,
      color: "#ff8844",
    },
    {
      title: "Гарнитура",
      description: "Наушники и микрофон для комфортного общения",
      icon: Headphones,
      color: "#14b8a6",
    },
    {
      title: "Стабильный интернет",
      description: "Для качественной видеосвязи",
      icon: Wifi,
      color: "#fbbf24",
    },
    {
      title: "Zoom",
      description: "Все занятия проходят через Zoom",
      icon: Video,
      color: "#8b5cf6",
    },
  ];

  const schedule = [
    {
      day: "Четверг",
      time: "15:00 (МСК)",
      group: "группа 4–5 класс",
      color: "#ff8844",
    },
    {
      day: "Пятница",
      time: "15:30 (МСК)",
      group: "группа 6–8 класс",
      color: "#14b8a6",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto">
        {/* Requirements */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/30 mb-6">
              <span className="text-sm text-[#14b8a6]">Что потребуется</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Технические требования
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req, index) => {
              const Icon = req.icon;
              return (
                <div
                  key={index}
                  className="bg-[#131827] border border-[#ff8844]/20 rounded-xl p-6 text-center hover:border-[#ff8844]/40 transition-all duration-300"
                >
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 mx-auto"
                    style={{ backgroundColor: `${req.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: req.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {req.title}
                  </h3>
                  <p className="text-sm text-gray-400">{req.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Schedule */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fbbf24]/10 border border-[#fbbf24]/30 mb-6">
              <span className="text-sm text-[#fbbf24]">Расписание</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Когда проходят занятия
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-[#131827] border border-[#ff8844]/20 rounded-2xl p-8 hover:border-[#ff8844]/40 transition-all duration-300">
                  <div className="text-center">
                    <div
                      className="inline-block px-4 py-2 rounded-lg mb-6"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <span
                        className="text-sm font-bold"
                        style={{ color: item.color }}
                      >
                        {item.day}
                      </span>
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-[#ff8844] to-[#fbbf24] bg-clip-text text-transparent mb-4">
                      {item.time}
                    </div>
                    <p className="text-gray-400">{item.group}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

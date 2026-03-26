import { Sparkles, MessageSquare, Target, TrendingUp } from "lucide-react";

export function WhySpecial() {
  const features = [
    {
      title: "Акцент на практическую, живую речь",
      description: "Грамматика ради грамматики? Нет! Только то, что нужно в реальных разговорах.",
      icon: MessageSquare,
      color: "#ff8844",
    },
    {
      title: "Все ситуации — из реальной жизни",
      description: "Каждый урок основан на типичных сценариях, с которыми сталкиваются путешественники.",
      icon: Target,
      color: "#14b8a6",
    },
    {
      title: "Интерактивные задания",
      description: "Ролевые игры, аудиоситуации, мини-квесты — обучение через игру и вовлечение.",
      icon: Sparkles,
      color: "#fbbf24",
    },
    {
      title: "Рост до уровня A2–B1",
      description: "Ребёнок выходит на уровень Pre-Intermediate за курс и уверенно общается.",
      icon: TrendingUp,
      color: "#8b5cf6",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0e1a] to-[#131827]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff8844]/10 border border-[#ff8844]/30 mb-6">
            <Sparkles className="w-4 h-4 text-[#ff8844]" />
            <span className="text-sm text-[#ff8844]">Наши преимущества</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Почему этот курс особенный?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-[#131827] border border-[#ff8844]/20 rounded-2xl p-8 hover:border-[#ff8844]/40 transition-all duration-300">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
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

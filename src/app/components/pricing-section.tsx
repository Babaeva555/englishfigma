import { CreditCard, Calendar, Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Полный курс",
      price: "12 000",
      period: "10 уроков",
      description: "Экономьте, покупая весь курс сразу",
      features: [
        "10 практических занятий",
        "Доступ к материалам курса",
        "Сертификат по окончании",
        "Поддержка преподавателя",
      ],
      badge: "Выгодно",
      color: "#ff8844",
      popular: true,
    },
    {
      name: "Абонемент",
      price: "1 300",
      period: "за урок",
      description: "Оплачивайте занятия по мере необходимости",
      features: [
        "Гибкая оплата",
        "Доступ к материалам урока",
        "Без долгосрочных обязательств",
        "Поддержка преподавателя",
      ],
      badge: "Гибко",
      color: "#14b8a6",
      popular: false,
    },
  ];

  const scrollToCTA = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0e1a] to-[#131827]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff8844]/10 border border-[#ff8844]/30 mb-6">
            <CreditCard className="w-4 h-4 text-[#ff8844]" />
            <span className="text-sm text-[#ff8844]">Стоимость</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Выберите подходящий вариант
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Места ограничены! Группы маленькие — максимум 6 детей, чтобы каждый
            получил внимание.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative group ${
                plan.popular ? "md:scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div
                    className="px-4 py-1 rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: plan.color }}
                  >
                    Популярно
                  </div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>

              <div
                className={`relative bg-[#131827] rounded-2xl p-8 transition-all duration-300 ${
                  plan.popular
                    ? "border-2 border-[#ff8844]"
                    : "border border-[#ff8844]/20 hover:border-[#ff8844]/40"
                }`}
              >
                <div
                  className="inline-block px-3 py-1 rounded-lg mb-6"
                  style={{ backgroundColor: `${plan.color}20` }}
                >
                  <span className="text-sm font-bold" style={{ color: plan.color }}>
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-[#ff8844] to-[#fbbf24] bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">руб</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: `${plan.color}20` }}
                      >
                        <Check className="w-3 h-3" style={{ color: plan.color }} />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToCTA}
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#ff8844] to-[#ff6b3d] text-white hover:shadow-xl hover:shadow-[#ff8844]/30"
                      : "bg-[#1e293b] text-white hover:bg-[#2d3f5c]"
                  }`}
                >
                  Выбрать план
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/30">
            <span className="text-2xl">📢</span>
            <span className="text-[#14b8a6] font-bold">Набор открыт!</span>
          </div>
        </div>
      </div>
    </section>
  );
}

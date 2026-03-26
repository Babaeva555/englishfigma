import { Users, GraduationCap } from "lucide-react";

export function TargetAudience() {
  const groups = [
    {
      title: "Первая группа",
      grade: "4–5 класс",
      icon: Users,
      color: "#ff8844",
    },
    {
      title: "Вторая группа",
      grade: "6–8 класс",
      icon: GraduationCap,
      color: "#14b8a6",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0e1a] to-[#131827]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14b8a6]/10 border border-[#14b8a6]/30 mb-6">
            <span className="text-sm text-[#14b8a6]">Для кого курс</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Выберите группу для вашего ребёнка
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative bg-[#131827] border border-[#ff8844]/20 rounded-2xl p-8 hover:border-[#ff8844]/40 transition-all duration-300">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6"
                    style={{ backgroundColor: `${group.color}20` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: group.color }} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{group.title}</h3>
                  <p className="text-4xl font-bold bg-gradient-to-r from-[#ff8844] to-[#fbbf24] bg-clip-text text-transparent">
                    {group.grade}
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

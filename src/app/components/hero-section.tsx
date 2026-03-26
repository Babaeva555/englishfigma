import { Plane, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const scrollToCTA = () => {
    document.getElementById("cta-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#1e293b] to-[#0f172a]">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1627670276798-0c4751b1beac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwbGFuZSUyMHdpbmRvdyUyMHN1bnNldHxlbnwxfHx8fDE3NzQ1MzIwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Travel background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#ff8844]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#14b8a6]/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff8844]/10 border border-[#ff8844]/30 mb-8">
          <Plane className="w-4 h-4 text-[#ff8844]" />
          <span className="text-sm text-[#ff8844]">Курс для юных путешественников</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#ff8844] via-[#fbbf24] to-[#14b8a6] bg-clip-text text-transparent leading-tight">
          Английский для путешествий
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана?
        </p>

        <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
        </p>

        <button
          onClick={scrollToCTA}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff8844] to-[#ff6b3d] text-white rounded-full hover:shadow-xl hover:shadow-[#ff8844]/30 transition-all duration-300 transform hover:scale-105"
        >
          <span className="text-lg">Записаться на курс</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#14b8a6]"></div>
            <span>Максимум 6 детей в группе</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
            <span>Практические ситуации</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#ff8844]"></div>
            <span>Онлайн через Zoom</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e1a] to-transparent"></div>
    </section>
  );
}

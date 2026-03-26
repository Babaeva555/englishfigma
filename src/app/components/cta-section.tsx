import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function CTASection() {
  return (
    <section id="cta-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0e1a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff8844]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#14b8a6]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#fbbf24]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="relative bg-gradient-to-br from-[#131827] to-[#1e293b] rounded-3xl overflow-hidden border border-[#ff8844]/30">
          {/* Image overlay */}
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1657358845938-2e96ebd29598?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXNzcG9ydCUyMGFpcnBvcnQlMjBib2FyZGluZyUyMHBhc3N8ZW58MXx8fHwxNzc0NTMyMDExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Travel background"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative p-8 sm:p-12 lg:p-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fbbf24]/10 border border-[#fbbf24]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#fbbf24]" />
              <span className="text-sm text-[#fbbf24]">Последний шаг</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
              Запишитесь сейчас — и следующее путешествие станет первым, где
              ваш ребёнок заговорит по-английски без страха!
            </h2>

            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Места ограничены! Не упустите возможность подарить вашему ребёнку
              уверенность в общении на английском языке.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#ff8844] to-[#ff6b3d] text-white rounded-full hover:shadow-2xl hover:shadow-[#ff8844]/40 transition-all duration-300 transform hover:scale-105 text-lg font-bold">
                <span>Записаться на курс</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-10 py-5 bg-[#1e293b] text-white rounded-full hover:bg-[#2d3f5c] transition-all duration-300 text-lg">
                Задать вопрос
              </button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#14b8a6]"></div>
                <span>Быстрая регистрация</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#fbbf24]"></div>
                <span>Первый урок — знакомство</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#ff8844]"></div>
                <span>Гарантия качества</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

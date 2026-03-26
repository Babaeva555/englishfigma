import { Plane, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0e1a] border-t border-[#ff8844]/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff8844] to-[#ff6b3d] flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                English Travel
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Курс английского языка для путешествий — помогаем детям говорить
              уверенно в любой стране мира.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff8844] transition-colors"
                >
                  О курсе
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff8844] transition-colors"
                >
                  Программа
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff8844] transition-colors"
                >
                  Расписание
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff8844] transition-colors"
                >
                  Цены
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#ff8844]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-[#ff8844]" />
                </div>
                <a
                  href="mailto:info@englishtravel.ru"
                  className="text-gray-400 hover:text-[#ff8844] transition-colors"
                >
                  info@englishtravel.ru
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#14b8a6]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#14b8a6]" />
                </div>
                <a
                  href="tel:+79999999999"
                  className="text-gray-400 hover:text-[#14b8a6] transition-colors"
                >
                  +7 (999) 999-99-99
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#ff8844]/10 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 English Travel. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}

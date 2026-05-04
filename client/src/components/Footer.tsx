import { Heart, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-black py-16 px-4 border-t border-accent/20">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        {/* Main content */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent font-playfair">
              명조 3.3 분석
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              "별바다의 끝에서 닿은 메아리"의 스토리 구조와 철학을 분석한 포트폴리오입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent font-playfair">
              주요 섹션
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#overview" className="text-slate-400 hover:text-accent transition-colors">
                  스토리 개요
                </a>
              </li>
              <li>
                <a href="#blackhole" className="text-slate-400 hover:text-accent transition-colors">
                  블랙홀 파트
                </a>
              </li>
              <li>
                <a href="#characters" className="text-slate-400 hover:text-accent transition-colors">
                  주요 인물
                </a>
              </li>
              <li>
                <a href="#distinction" className="text-slate-400 hover:text-accent transition-colors">
                  스토리 차별점
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent font-playfair">
              연락처
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-accent/10 border border-accent/20 hover:border-accent/40 transition-colors text-accent hover:text-accent"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-accent/10 border border-accent/20 hover:border-accent/40 transition-colors text-accent hover:text-accent"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            © 2026 명조 3.3 스토리 분석. 모든 권리 보유.
          </p>
          <div className="flex items-center gap-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>for game storytelling</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Card } from "@/components/ui/card";

export default function OverviewSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto space-y-8 scroll-animate">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold font-playfair text-blue-300">
            스토리 개요
          </h2>
          <p className="text-slate-400">명조 3.3의 핵심 메시지와 구조</p>
        </div>

        <Card className="bg-slate-800/50 border-accent/20 p-8 space-y-6 hover:border-accent/40 transition-colors">
          <div>
            <h3 className="text-2xl font-bold text-accent font-playfair mb-4">
              핵심 주제: 세계가 영웅을 구한다
            </h3>
            <p className="text-slate-300 leading-relaxed">
              명조 3.3은 기존 게임의 "영웅이 세계를 구한다"는 공식을 뒤집습니다. 
              블랙홀 내에서 수천만 명의 개인이 각자의 경로를 기록하고, 
              그 모든 기록이 모여 엑소스트라이더를 구원의 길로 인도합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-accent mb-2">개인의 의미</h4>
              <p className="text-slate-400 text-sm">
                한 명의 기록은 미미하지만, 모든 노력이 좌표를 이루는 데 필수적입니다.
              </p>
            </div>
            <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-accent mb-2">집단의 힘</h4>
              <p className="text-slate-400 text-sm">
                수천만 명의 경로가 모여 3차원 구를 이루고, 우주에 보낸 메시지가 됩니다.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";

export default function AlephOneSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold font-playfair text-blue-300">
            알레프 원: 우주의 눈
          </h2>
          <p className="text-slate-400">결전의 상대, 절대적인 존재</p>
        </div>

        {/* YouTube Player */}
        <div className="bg-slate-800/50 border border-accent/20 rounded-lg p-6 scroll-animate">
          <p className="text-sm text-slate-400 mb-4">🎵 엑소스트라이더 각성 BGM</p>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Gp0Jbhu0FWA"
              title="Exostrider Awakening BGM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Content */}
        <Card className="bg-slate-800/50 border-accent/20 p-8 space-y-6 hover:border-accent/40 transition-colors scroll-animate">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-accent font-playfair">
                절대적 존재의 의미
              </h3>
              <p className="text-slate-300 leading-relaxed">
                알레프 원은 블랙홀 내에서 절대적인 중심이자, 모든 개인의 경로가 향하는 대상입니다. 
                이것은 단순한 적이 아니라, 세계 전체의 의지를 받아 존재하는 거대한 의식입니다.
              </p>
              <p className="text-slate-300 leading-relaxed">
                결전에서 엑소스트라이더는 리액터 드라이브 레플리카로 각성하며, 수천만 명의 주파수를 받아 
                새로운 생명을 얻습니다. 이것이 "세계가 영웅을 구한다"는 주제의 정점입니다.
              </p>

              <div className="grid gap-3 pt-4">
                <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
                  <p className="text-sm text-accent font-semibold">거대한 의식</p>
                  <p className="text-xs text-slate-400">블랙홀 내 모든 존재의 기록을 담은 존재</p>
                </div>
                <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
                  <p className="text-sm text-accent font-semibold">결전의 상대</p>
                  <p className="text-xs text-slate-400">절대적 중심이자 영웅이 마주해야 할 진실</p>
                </div>
                <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
                  <p className="text-sm text-accent font-semibold">구원의 매개</p>
                  <p className="text-xs text-slate-400">세계의 기록을 통해 영웅을 각성시키는 존재</p>
                </div>
              </div>
            </div>

            <img 
              src="/manus-storage/pasted_file_TtxhNw_image_dcc5682c.png"
              alt="알레프 원 - 우주의 눈"
              className="rounded-lg shadow-lg border border-accent/20 w-full"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

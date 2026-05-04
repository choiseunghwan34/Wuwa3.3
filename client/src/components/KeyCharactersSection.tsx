import { Card } from "@/components/ui/card";

interface Character {
  name: string;
  role: string;
  description: string;
  significance: string;
}

export default function KeyCharactersSection() {
  const characters: Character[] = [
    {
      name: "방랑자",
      role: "주인공",
      description: "블랙홀 내에서 중심을 향해 나아가는 개인. 모든 개인의 상징이며, 수천만 명의 경로 중 하나입니다.",
      significance: "개인의 의지와 노력의 상징",
    },
    {
      name: "에이메스",
      role: "동료",
      description: "방랑자와 함께 여정을 떠나는 캐릭터. 개인적 목표와 집단의 목표 사이의 갈등을 대표합니다.",
      significance: "개인과 집단의 연결고리",
    },
    {
      name: "히유키",
      role: "조력자",
      description: "블랙홀 내에서 방랑자를 돕는 존재. 과거의 기록과 현재의 행동을 잇는 역할을 합니다.",
      significance: "기억과 행동의 매개",
    },
    {
      name: "엑소스트라이더",
      role: "최종 형태",
      description: "방랑자가 리액터 드라이브 레플리카로 각성한 형태. 수천만 명의 주파수를 받아 새로운 생명을 얻습니다.",
      significance: "세계가 구한 영웅",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold font-playfair text-blue-300">
            주요 인물
          </h2>
          <p className="text-slate-400">스토리를 이끌어가는 핵심 캐릭터들</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {characters.map((character, idx) => (
            <Card
              key={idx}
              className="bg-slate-800/50 border-accent/20 p-6 hover:border-accent/40 transition-all hover:shadow-lg scroll-animate"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-accent font-playfair">
                    {character.name}
                  </h3>
                  <p className="text-sm text-blue-400">{character.role}</p>
                </div>

                <p className="text-slate-300 leading-relaxed text-sm">
                  {character.description}
                </p>

                <div className="bg-accent/10 p-3 rounded-lg border border-accent/20">
                  <p className="text-xs text-accent font-semibold mb-1">의미</p>
                  <p className="text-xs text-slate-400">
                    {character.significance}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

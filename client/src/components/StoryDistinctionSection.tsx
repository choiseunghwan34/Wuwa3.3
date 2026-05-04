import { Card } from "@/components/ui/card";

interface Distinction {
  aspect: string;
  traditional: string;
  mingjo33: string;
}

export default function StoryDistinctionSection() {
  const distinctions: Distinction[] = [
    {
      aspect: "주제",
      traditional: "영웅이 세계를 구한다",
      mingjo33: "세계가 영웅을 구한다",
    },
    {
      aspect: "개인의 역할",
      traditional: "주인공의 활약이 중심",
      mingjo33: "모든 개인의 노력이 의미를 가짐",
    },
    {
      aspect: "데이터의 의미",
      traditional: "정보 수집의 수단",
      mingjo33: "개인의 의지와 기록의 축적",
    },
    {
      aspect: "결말",
      traditional: "영웅의 승리",
      mingjo33: "세계와 영웅의 상호 구원",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold font-playfair text-blue-300">
            스토리의 차별점
          </h2>
          <p className="text-slate-400">기존 게임과의 차이점</p>
        </div>

        <div className="space-y-4">
          {distinctions.map((distinction, idx) => (
            <Card
              key={idx}
              className="bg-slate-800/50 border-accent/20 p-6 hover:border-accent/40 transition-all hover:shadow-lg scroll-animate"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-slate-400 mb-2">측면</p>
                  <p className="font-bold text-accent text-lg">
                    {distinction.aspect}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">기존 게임</p>
                  <p className="text-slate-300">{distinction.traditional}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">명조 3.3</p>
                  <p className="text-blue-300 font-semibold">
                    {distinction.mingjo33}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-accent/20 to-blue-500/20 border-accent/40 p-8 scroll-animate">
          <h3 className="text-xl font-bold text-accent font-playfair mb-4">
            핵심 메시지
          </h3>
          <p className="text-slate-200 leading-relaxed text-lg">
            명조 3.3은 게임의 주제를 뒤집음으로써, 개인의 작은 노력들이 모여 
            거대한 변화를 만들 수 있다는 메시지를 전달합니다. 
            한 명의 기록은 미미하지만, 수천만 명의 기록이 모이면 
            우주에 보낼 수 있는 메시지가 되고, 영웅을 구하는 길이 됩니다.
          </p>
        </Card>
      </div>
    </section>
  );
}

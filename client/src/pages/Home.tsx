import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Cosmic Mystery & Structural Elegance
 * - Dark navy/purple background representing the vast universe
 * - Playfair Display for grand, elegant titles
 * - Inter for clear, readable body text
 * - Smooth scroll-based animations and transitions
 * - Card-based sections for information hierarchy
 */

interface ScrollRevealElement {
  id: string;
  isVisible: boolean;
}

export default function Home() {
  const [visibleElements, setVisibleElements] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    document.querySelectorAll("[data-reveal]").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663610674087/S95DyMAVW3t8ozUjmMqgqM/hero-background-Hr4xtozqwKWE2F5quBHpDj.webp')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1
            className="text-6xl md:text-7xl font-bold mb-6 font-playfair"
            style={{
              background:
                "linear-gradient(135deg, #a8d8ff 0%, #d8a8ff 50%, #a8d8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            명조 3.3
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-slate-300 font-playfair font-light">
            별바다의 끝에서 닿은 메아리
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            세계가 영웅을 구한다는 이야기
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              분석 읽기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              더 알아보기
            </Button>
          </div>

          <div className="flex justify-center animate-bounce">
            <ChevronDown className="w-8 h-8 text-accent" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-background to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="intro"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["intro"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent">
              스토리 개요
            </h2>

            <div className="space-y-8">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  핵심 주제: 세계가 영웅을 구한다
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  명조 3.3의 가장 중요한 메시지는 "세계가 영웅을 구한다"는 것입니다.
                  이것은 전통적인 영웅 서사를 뒤집는 개념입니다. 보통의 이야기에서
                  영웅은 세상을 구하기 위해 혼자 싸웁니다. 하지만 3.3에서는 수많은
                  사람들의 기록과 의지가 모여 하나의 영웅을 결전의 자리까지 데려갑니다.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  방랑자는 세상의 영웅이 아니라, 세상이 만든 영웅입니다. 그가 알레프
                  원과 싸울 수 있었던 것은 자신의 힘 때문이 아니라, 세계 전체가 그를
                  위해 길을 만들어주었기 때문입니다.
                </p>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  희생이 구조가 되다
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  여기서 중요한 점은, 스토리가 실패를 무의미하게 처리하지
                  않는다는 것입니다. 보통 서사에서 실패한 사람들은 '희생자'로
                  남습니다. 그들의 죽음은 주인공의 감정을 자극하거나, 상황의
                  비극성을 강조하는 장치로 쓰입니다.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  그러나 3.3에서는 실패한 사람들조차 결과를 만듭니다. 도달하지
                  못한 사람도 좌표의 일부가 되고, 사라진 사람도 길의 일부가
                  되며, 끝까지 가지 못한 사람도 방랑자가 나아갈 수 있게 만드는
                  데이터가 됩니다. 이것이 이번 스토리의 강점입니다. 희생은 단순히
                  슬픈 장면으로 끝나지 않습니다. 희생은 구조가 되고, 기록이 되며,
                  좌표가 되고, 길이 됩니다.
                </p>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  좌표의 전달
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  블랙홀 파트에서 생성된 좌표는 에이메스에게 전달됩니다. 에이메스는
                  이 거대한 정보를 카세트 테이프라는 물리적 형태로 변환합니다.
                  카세트 테이프는 단순한 저장 매체가 아닙니다. 그것은 수천만 명의
                  기록, 희망, 그리고 의지를 담은 유물입니다. 이 기록은 결국
                  방랑자에게 전달되어, 그가 엑소스트라이더를 찾고 결전에 나설 수
                  있게 만듭니다.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="relative py-12 px-4">
        <div
          className="max-w-6xl mx-auto h-32 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663610674087/S95DyMAVW3t8ozUjmMqgqM/section-divider-MEyavTT2mkvSj4VHcgrq9K.webp')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </section>

      {/* Detailed Black Hole Explanation Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-background to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="blackhole-detailed"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["blackhole-detailed"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent">
              블랙홀 파트: 좌표 형성의 구조
            </h2>

            <div className="space-y-8">
              {/* Black Hole BGM Player */}
              <Card className="bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur border-accent/30 p-6 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-lg font-bold mb-4 text-accent font-playfair flex items-center gap-2">
                  <span>🎵</span> 이 섹션의 배경음악
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/7nwzaBOmiYc"
                    title="Black Hole BGM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-slate-400 text-sm mt-4">
                  블랙홀 파트에 진입하면서 나오는 우주적 신비로움을 담은 배경음악입니다.
                </p>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  기본 개념: 점과 빛
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  블랙홀 내부에서 일어나는 현상을 기하학적으로 이해하면, 모든 것이 명확해집니다.
                  각 개인은 '점'으로 표현되고, 엑소스트라이더의 빛은 희망과 구원의 상징입니다.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="text-lg font-bold text-accent mb-2">점(점들)</h4>
                    <p className="text-slate-400 text-sm">
                      블랙홀에 삼켜진 개별 인물들. 각자가 하나의 데이터 포인트가 됩니다.
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="text-lg font-bold text-accent mb-2">빛나는 부분</h4>
                    <p className="text-slate-400 text-sm">
                      엑소스트라이더의 빛. 모든 사람이 향하는 중심이자 희망의 상징입니다.
                    </p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <h4 className="text-lg font-bold text-accent mb-2">운동</h4>
                    <p className="text-slate-400 text-sm">
                      각 개인이 엑소스트라이더의 빛을 향해 걸어가는 행위. 이것이 기록됩니다.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  좌표 형성의 기하학적 구조
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-accent mb-4">1단계: 중심점과 개인</h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      블랙홀 내에서 엑소스트라이더의 빛은 절대적인 중심(★)이 됩니다. 각 개인은 이 중심을 향해 나아가며, 자신이 걸어간 거리와 각도를 기록합니다. 이것이 좌표의 기초가 됩니다.
                    </p>
                    <img src="/manus-storage/diagram_center_point_360be00e.webp" alt="중심점과 개인" className="rounded-lg mb-4 w-full max-w-md" />
                    <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                      <p className="text-slate-400 text-xs italic">
                        "중심을 향해 나아가는 각 개인의 경로 = 거리 + 각도 + 주파수"
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-accent mb-4">2단계: 경로의 데이터화</h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      도중에 실패하거나 사라지더라도, 그들이 걸어간 경로는 사라지지 않습니다. 각자의 이동 궤적이 데이터로 기록되며, 이는 "주파수"라는 형태로 저장됩니다. 실패한 시도도 완전한 좌표계를 만드는 데 필수적인 정보가 됩니다.
                    </p>
                    <img src="/manus-storage/diagram_path_data_6f544b40.webp" alt="경로의 데이터화" className="rounded-lg mb-4 w-full max-w-md" />
                    <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                      <p className="text-slate-400 text-xs italic">
                        "실패한 경로도 좌표의 일부 = 모든 노력이 의미를 가짐"
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-accent mb-4">3단계: 집단 데이터의 축적 - 구 형태의 형성</h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      한 명의 기록은 미미하지만, 수백만, 수천만 명의 기록이 모이면 놀라운 일이 일어납니다. 모든 사람이 같은 중심(엑소스트라이더의 빛)을 향해 나아갔기 때문에, 각각의 경로들이 모여 3차원 구(Sphere) 형태를 이룹니다.
                    </p>                    <img src="/manus-storage/diagram_sphere_formation_a3bdb03d.webp" alt="구 형태의 형성" className="rounded-lg mb-4 w-full max-w-2xl" />
                    <ul className="space-y-2 text-slate-300 text-sm">
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span><strong>희소한 점들</strong>: 초기 상태 - 개별 경로들이 흩어져 있음</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span><strong>촘촘한 구</strong>: 최종 상태 - 수천만 명의 경로가 모여 완전한 구를 형성</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span><strong>방사형 구조</strong>: 모든 경로가 중심을 향하므로 자연스럽게 구 형태가 됨</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-accent mb-4">4단계: 좌표의 완성과 활용 - 보이저호의 메시지</h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      이렇게 완성된 3차원 구 형태의 좌표는 단순한 데이터가 아닙니다. 이것은 수천만 명의 의지, 희망, 그리고 마지막 순간의 선택이 응축된 "지도"입니다. 마치 보이저호가 우주에 인류의 메시지를 담아 보낸 것처럼, 이 좌표는 모든 사람의 기록을 담은 우주의 메시지가 됩니다.
                    </p>
                    <img src="/manus-storage/voyager_coordinate_system_cec9301b.webp" alt="보이저호 같은 좌표" className="rounded-lg mb-4 w-full max-w-2xl" />
                    <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
                      <p className="text-slate-400 text-xs italic">
                        "구 형태의 좌표 = 수천만 명이 함께 만든 길 = 우주에 보낸 인류의 메시지"
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Characters Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative z-10 bg-gradient-to-b from-background via-background/95 to-background py-24">
          <div className="max-w-6xl mx-auto">
            <div
              id="characters"
              data-reveal
              className={`transition-all duration-1000 ${
                visibleElements["characters"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent">
                주요 인물 및 요소의 역할
              </h2>

              <div className="space-y-8">
                <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                    보이드에 삼켜진 사람들의 기록
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    스토리에서 보이드에 삼켜진 사람들은 단순히 희생자로 남지
                    않습니다. 그들의 이동 기록은 엑소스트라이더의 빛을 향해 쌓여
                    '좌표'를 형성합니다. 이 좌표는 방랑자가 엑소스트라이더를 찾고
                    결전에 나설 수 있는 물리적 기반이 됩니다. 이는 실패와 희생이
                    무의미하게 사라지는 것이 아니라, 새로운 가능성을 만드는
                    데이터이자 구조가 됨을 보여줍니다.
                  </p>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                    에이메스의 역할
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    에이메스는 단순한 구출 대상이 아닙니다. 겉으로는 방랑자가
                    에이메스를 구하러 가는 이야기처럼 보이지만, 실제로는 에이메스
                    역시 방랑자를 구하는 역할을 합니다.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    에이메스는 보이드 너머의 기록을 받아내고, 그것을 전달 가능한
                    형태로 변환합니다. 그녀는 수천만 명의 기록을 카세트 테이프라는
                    형태로 현실에 연결합니다. 또한 결전에서는 리액터 드라이브
                    레플리카를 통해 엑소스트라이더를 복구하는 데 중요한 역할을
                    합니다.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    즉, 에이메스는 단순히 '구원받는 인물'이 아닙니다. 그녀는
                    세계의 기록을 방랑자에게 전달하는 매개자이며, 결전을 가능하게
                    만든 또 하나의 주체입니다. 방랑자는 에이메스를 구하려고 했지만,
                    결국 방랑자가 알레프 원과 싸울 수 있었던 것도 에이메스
                    덕분입니다. 구하는 자와 구원받는 자의 관계가 일방향이 아니라
                    서로 얽혀 있습니다.
                  </p>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                    히유키와 시라토리의 역할
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    블랙홀 파트에서 좌표가 생성되었다고 해서 모든 문제가 해결되는
                    것은 아닙니다. 좌표가 있다고 해서 누구나 그곳에 갈 수 있는
                    것은 아닙니다. 왜냐하면 게이트 너머의 공간은 여전히 왜곡되어
                    있고, 이동 경로는 안정적이지 않기 때문입니다.
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    여기서 히유키의 역할이 중요해집니다. 히유키는 단순히 방랑자를
                    돕는 조력자에 머물지 않습니다. 그녀의 시라토리는 왜곡된 공간에서
                    방향성과 경로를 보정하는 역할을 합니다. 즉, 집단의 기록이
                    좌표를 만들었다면, 히유키는 그 좌표를 실제로 사용할 수 있게
                    만드는 존재입니다.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    히유키와의 대화를 통해 방랑자는 자신이 혼자 모든 것을 해결하는
                    '구세주'가 아니라, 세계와 함께 움직이는 영웅임을 재확인합니다.
                  </p>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                    엑소스트라이더와 리액터 드라이브 레플리카
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    엑소스트라이더는 이미 죽었습니다. 하지만 세계는 그를 다시
                    일으킵니다. 리액터 드라이브 레플리카는 단순한 기술적 장비가
                    아니라, 인류가 엑소스트라이더에게 바친 새로운 심장입니다.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    이것은 스토리의 핵심을 상징합니다. 엑소스트라이더는 혼자가
                    아닙니다. 그는 세계의 의지를 담아 다시 일어나고, 방랑자와
                    함께 알레프 원과 맞섭니다. 결전은 엑소스트라이더 개인의 전투가
                    아니라, 세계 전체가 만들어낸 승리입니다.
                  </p>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                    결전까지의 흐름
                  </h3>
                  <ol className="space-y-3 text-slate-300 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-accent font-bold min-w-fit">1단계:</span>
                      <span>
                        보이드에 삼켜진 사람들이 엑소스트라이더의 빛을 향해 이동했다.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold min-w-fit">2단계:</span>
                      <span>그 이동 기록이 쌓여 좌표가 되었다.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold min-w-fit">3단계:</span>
                      <span>에이메스가 그 좌표를 카세트 테이프로 전달했다.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold min-w-fit">4단계:</span>
                      <span>
                        방랑자가 좌표를 해석하고 다시 게이트 너머로 향했다.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold min-w-fit">5단계:</span>
                      <span>히유키의 시라토리가 경로를 안정화했다.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold min-w-fit">6단계:</span>
                      <span>리액터 드라이브 레플리카가 엑소스트라이더를 복구했다.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent font-bold min-w-fit">7단계:</span>
                      <span>방랑자와 에이메스가 함께 알레프 원과 맞섰다.</span>
                    </li>
                  </ol>
                </Card>

                <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                    구조적 필연성
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    이 과정에서 어느 하나라도 빠졌다면 결전은 성립하지 않습니다.
                    각 요소가 얼마나 필수적인지 살펴봅시다:
                  </p>
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex gap-3">
                      <span className="text-accent">•</span>
                      <span>
                        좌표가 없었다면 방랑자는 엑소스트라이더를 찾을 수 없었다.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">•</span>
                      <span>에이메스가 없었다면 기록은 전달되지 못했다.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">•</span>
                      <span>히유키가 없었다면 경로는 안정되지 못했다.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">•</span>
                      <span>레플리카가 없었다면 엑소스트라이더는 싸울 수 없었다.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-accent">•</span>
                      <span>방랑자가 없었다면 마지막 결전을 수행할 존재가 없었다.</span>
                    </li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    따라서 결전은 단순한 마지막 전투가 아니라, 세계 전체가 축적해온
                    선택들이 하나의 순간으로 모이는 장면입니다.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Distinction Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="relative z-10 bg-gradient-to-b from-background/90 via-background to-background py-24">
          <div className="max-w-6xl mx-auto">
            <div
              id="distinction"
              data-reveal
              className={`transition-all duration-1000 ${
                visibleElements["distinction"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent">
                스토리의 차별점
              </h2>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  감정, 설정, 구조의 유기적 결합
                </h3>

                <p className="text-slate-300 leading-relaxed mb-6">
                  이번 3.3 스토리가 강하게 느껴지는 이유는 단순히 연출이 좋기
                  때문만은 아닙니다. 가장 큰 차별점은 감정, 설정, 구조가 서로
                  분리되어 있지 않다는 점입니다.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="border-l-2 border-accent pl-6">
                    <h4 className="text-lg font-bold text-accent mb-3">
                      희생의 의미
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      보통 감동적인 장면은 감정 연출로만 소비되는 경우가 많습니다.
                      누군가 희생하고, 주인공이 분노하거나 각성하며, 적을 쓰러뜨리는
                      방식입니다. 하지만 3.3은 희생을 단순한 감정 장치로 쓰지
                      않습니다. 희생은 데이터가 되고, 데이터는 좌표가 되며, 좌표는
                      길이 되어 결전을 가능하게 합니다.
                    </p>
                  </div>

                  <div className="border-l-2 border-accent pl-6">
                    <h4 className="text-lg font-bold text-accent mb-3">
                      카세트 테이프의 역할
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      카세트 테이프는 추억의 상징이면서 동시에 좌표 데이터의 저장
                      장치입니다. 수많은 사람들이 걸어간 길은 감동적인 장면이면서
                      동시에 실제로 엑소스트라이더를 찾게 만드는 논리적 장치입니다.
                    </p>
                  </div>

                  <div className="border-l-2 border-accent pl-6">
                    <h4 className="text-lg font-bold text-accent mb-3">
                      리액터 드라이브 레플리카
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      리액터 드라이브 레플리카는 기술적 장비이면서 동시에 인류가
                      엑소스트라이더에게 바친 새로운 심장입니다. 하나의 물체가
                      감정, 설정, 주제를 동시에 담당합니다.
                    </p>
                  </div>

                  <div className="border-l-2 border-accent pl-6">
                    <h4 className="text-lg font-bold text-accent mb-3">
                      구조적 완성도
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      이런 식으로 하나의 장면이 감정, 설정, 주제를 동시에 담당하기
                      때문에 3.3 스토리는 완성도가 높게 느껴집니다. 스토리 구조
                      자체가 메시지를 전달하는 형태가 됩니다.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  최종 결론
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg mb-6">
                  명조 3.3 스토리는 단순한 세계 구원 서사가 아닙니다. 이 이야기는
                  영웅 한 명이 모든 것을 해결하는 구조를 거부합니다. 방랑자는 마지막
                  전투를 수행하는 중요한 존재이지만, 그가 결전에 도달할 수 있었던
                  이유는 세계가 먼저 그를 위해 길을 만들어주었기 때문입니다.
                </p>

                <div className="space-y-3 text-slate-300 mb-6">
                  <p className="flex gap-3">
                    <span className="text-accent">•</span>
                    <span>
                      보이드에 삼켜진 사람들은 사라졌지만, 그들의 기록은 좌표가
                      되었다.
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-accent">•</span>
                    <span>에이메스는 그 기록을 카세트 테이프에 담아 전달했다.</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-accent">•</span>
                    <span>
                      히유키는 방랑자가 그 좌표를 따라갈 수 있도록 경로를 열어주었다.
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-accent">•</span>
                    <span>
                      콜렉티브와 라하이 로이 사람들은 리액터 드라이브 레플리카를
                      완성했다.
                    </span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-accent">•</span>
                    <span>엑소스트라이더는 인류가 건넨 새로운 심장으로 다시 일어났다.</span>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-accent">•</span>
                    <span>
                      그리고 방랑자는 그 모든 것의 끝에서 알레프 원과 맞섰다.
                    </span>
                  </p>
                </div>

                <p className="text-slate-300 leading-relaxed text-lg italic border-l-2 border-accent pl-6">
                  "세계가 길을 만들었고, 영웅은 그 길의 끝에서 싸웠다. 그리고 더
                  정확히 말하면, 영웅이 세계를 구한 것이 아니라, 세계가 영웅을
                  구할 수 있게 만들었다."
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Aleph One Section */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-background via-slate-950 to-background overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div
            id="aleph-one"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["aleph-one"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent text-center">
              알레프 원: 세계의 위협
            </h2>

            {/* Exostrider Awakening BGM Player */}
            <div className="mb-12">
              <Card className="bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur border-accent/30 p-6 hover:border-accent/50 transition-all duration-300 mb-8">
                <h3 className="text-lg font-bold mb-4 text-accent font-playfair flex items-center gap-2">
                  <span>🎵</span> 이 섹션의 배경음악
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/Gp0Jbhu0FWA"
                    title="Exostrider Awakening BGM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-slate-400 text-sm mt-4">
                  엑소스트라이더가 패배 위기에 있다가 리액터 드라이브 레플리카가 삽입되면서 각성하는 순간의 장대한 배경음악입니다.
                </p>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/5 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-300" />
                <img
                  src="/manus-storage/pasted_file_TtxhNw_image_b89f9f61.png"
                  alt="알레프 원"
                  className="relative w-full h-auto rounded-lg shadow-2xl border border-accent/30 group-hover:border-accent/60 transition-all duration-300 transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-6">
                <Card className="bg-card/50 backdrop-blur border-border/50 p-6 hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                    거대한 눈
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    알레프 원은 단순한 적이 아닙니다. 그것은 우주 자체의 일부이며, 무한한 허무와 부정성을 상징합니다.
                    거대한 눈 형태로 표현되는 알레프 원은 세계를 응시하고, 모든 것을 집어삼키려 합니다.
                  </p>
                </Card>
                <Card className="bg-card/50 backdrop-blur border-border/50 p-6 hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                    불완전한 승리
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    방랑자와 엑소스트라이더는 알레프 원을 완전히 소멸시키지 못합니다. 대신, 그것을 라하이 로이에서
                    멀리 밀어내고 당장의 위협을 제거합니다. 이것은 완전한 종결이 아니라, 세계가 계속 존재할 수 있는
                    기회를 얻은 것입니다.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One Line Summary */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-background to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="summary"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["summary"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur border-accent/50 p-12 hover:border-accent transition-all duration-300">
              <h2 className="text-3xl md:text-4xl font-bold text-center font-playfair text-accent mb-4">
                한 줄 요약
              </h2>
              <p className="text-center text-xl text-slate-200 leading-relaxed">
                명조 3.3은 한 명의 영웅이 세상을 구한 이야기가 아니라, 수많은
                사람들의 기록과 의지가 영웅을 결전의 자리까지 데려간 이야기다.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-border/30 bg-gradient-to-b from-background via-slate-950 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 font-playfair text-accent">
            명조 3.3: 별바다의 끝에서 닿은 메아리
          </h3>
          <p className="text-slate-300 text-base mb-2">
            세계가 영웅을 구한다는 이야기의 구조적 의미
          </p>
          <p className="text-slate-500 text-xs mt-4">
            수천만 명의 기록이 모여 만든 길 위에서, 영웅은 세계와 함께 싸운다.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Cosmic Mystery & Structural Elegance
 * - Dark navy/purple background representing the vast universe
 * - Playfair Display for grand, elegant titles
 * - Inter for clear, readable body text
 * - Smooth scroll-based animations and transitions
 * - Card-based sections for information hierarchy
 * - Parallax effects and staggered animations for depth
 */

interface ScrollRevealElement {
  id: string;
  isVisible: boolean;
}

export default function Home() {
  const [visibleElements, setVisibleElements] = useState<
    Record<string, boolean>
  >({});
  const [scrollY, setScrollY] = useState(0);

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

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
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
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1
            className="text-6xl md:text-7xl font-bold mb-6 font-playfair animate-fade-in"
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
          <h2 className="text-2xl md:text-3xl mb-8 text-slate-300 font-playfair font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            별바다의 끝에서 닿은 메아리
          </h2>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            세계가 영웅을 구한다는 이야기
          </p>

          <div className="flex justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
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
      <section className="relative py-24 px-4 bg-gradient-to-b from-background to-background">
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
            <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-playfair text-accent">
                스토리 개요
              </h2>
              <div className="space-y-6 text-slate-300">
                <p className="text-lg leading-relaxed">
                  명조 3.3 「별바다의 끝에서 닿은 메아리」는 게임 내 가장 완성도 높은 스토리 중 하나입니다.
                  이 스토리는 단순한 세계 구원 서사를 넘어, 집단의 의지가 어떻게 한 명의 영웅을 만드는지를
                  보여줍니다.
                </p>
                <p className="text-lg leading-relaxed">
                  핵심은 이것입니다: <strong className="text-accent">영웅이 세계를 구한 것이 아니라,
                  세계가 영웅을 구할 수 있게 만들었다</strong>는 것입니다.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Black Hole Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="blackhole"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["blackhole"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent">
              블랙홀 파트: 좌표 형성의 구조
            </h2>

            <div className="space-y-8">
              {/* Black Hole BGM Player */}
              <Card className="bg-gradient-to-r from-accent/10 to-accent/5 backdrop-blur border-accent/30 p-6 hover:border-accent/50 transition-all duration-300 mb-8 animate-fade-in">
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

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
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

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  좌표 형성의 기하학적 구조
                </h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-accent mb-4">1단계: 중심점과 개인</h4>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      블랙홀 내에서 엑소스트라이더의 빛은 절대적인 중심(★)이 됩니다. 각 개인은 이 중심을 향해 나아가며, 자신이 걸어간 거리와 각도를 기록합니다. 이것이 좌표의 기초가 됩니다.
                    </p>
                    <img src="/manus-storage/diagram_center_point_360be00e.webp" alt="중심점과 개인" className="rounded-lg mb-4 w-full max-w-2xl mx-auto hover:scale-105 transition-transform duration-300" />
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
                    <img src="/manus-storage/diagram_path_data_6f544b40.webp" alt="경로의 데이터화" className="rounded-lg mb-4 w-full max-w-2xl mx-auto hover:scale-105 transition-transform duration-300" />
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
                    </p>
                    <img src="/manus-storage/diagram_sphere_formation_a3bdb03d.webp" alt="구 형태의 형성" className="rounded-lg mb-4 w-full max-w-3xl mx-auto hover:scale-105 transition-transform duration-300" />
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
                    <img src="/manus-storage/voyager_coordinate_system_cec9301b.webp" alt="보이저호 같은 좌표" className="rounded-lg mb-4 w-full max-w-3xl mx-auto hover:scale-105 transition-transform duration-300" />
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

      {/* Detailed Analysis Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/50 to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="detailed-analysis"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["detailed-analysis"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent">
              블랙홀 파트 상세 분석
            </h2>

            <div className="space-y-12">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  블랙홀 안에서 좌표를 찾을 수 있던 방법
                </h3>
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    블랙홀 안에서의 좌표 형성은 다음과 같은 원리로 작동합니다. 블랙홀 내에서 점이 개인을 의미하고, 
                    빛나는 부분이 엑소스트라이더의 빛이라고 생각하면, 각 개인은 그 빛을 향해 걸어가면서 거리를 재는 방식입니다.
                  </p>
                  <p>
                    물론 언제 닿을 수 있을지, 영원히 도달할 수 없을지도 모르는 거리입니다. 도중에 실패해서 사라지는 사람도 있었고, 
                    그럼에도 불구하고 자신의 주파수를 사용하며 엑소스트라이더에게 나아갔습니다.
                  </p>
                  <p className="font-semibold text-accent">
                    핵심: 방향(각도) + 거리
                  </p>
                  <p>
                    도착하면 방향(각도)과 거리를 알게 됩니다. 이를 한 명 한 명이 남은 주파수로 기록한 것입니다. 
                    하지만 이것이 한 명이 아니라 수백, 수천만 명이 한다면?
                  </p>
                  <p className="border-l-4 border-accent pl-4 py-2 italic">
                    "이런 구(Sphere) 형태의 지도가 완성되는 것입니다."
                  </p>
                  <p>
                    사람이 많을수록 이 구가 더욱 촘촘해집니다. 각자가 걸어간 각도와 거리를 입력하면, 
                    보이저호처럼 위치가 계산 가능해지는 것입니다.
                  </p>
                  <p>
                    특히 이 좌표를 사용하는 방랑자와 히유키의 시라토리(미래를 태우는 술법)까지 합해지니, 
                    이렇게 찾을 수 있었던 것입니다.
                  </p>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  단계별 좌표 형성 프로세스
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-accent pl-6 py-2">
                    <h4 className="text-lg font-bold text-accent mb-2">1단계: 중심점의 설정</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      블랙홀 내에서 엑소스트라이더의 빛(★)이 절대적인 중심이 됩니다. 이것은 모든 개인이 향해야 할
                      방향을 제시합니다. 각 개인은 이 중심을 기준으로 자신의 위치와 이동 거리를 기록합니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-6 py-2">
                    <h4 className="text-lg font-bold text-accent mb-2">2단계: 개인 경로의 데이터화</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      각 개인이 중심을 향해 걸어간 경로는 "주파수"라는 형태로 기록됩니다. 성공한 경로뿐 아니라
                      실패한 경로도 모두 데이터가 되며, 이는 완전한 좌표계를 만드는 데 필수적입니다.
                      "모든 노력이 의미를 가진다"는 메시지가 여기에 담겨 있습니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-6 py-2">
                    <h4 className="text-lg font-bold text-accent mb-2">3단계: 집단 데이터의 축적</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      한 명의 기록은 미미하지만, 수백만, 수천만 명의 기록이 모이면 놀라운 일이 일어납니다.
                      모든 사람이 같은 중심을 향해 나아갔기 때문에, 각각의 경로들이 모여 3차원 구(Sphere) 형태를
                      이룹니다. 희소한 점들이 촘촘한 구로 변환되는 과정입니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-6 py-2">
                    <h4 className="text-lg font-bold text-accent mb-2">4단계: 좌표의 완성과 활용</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      완성된 3차원 구 형태의 좌표는 보이저호의 메시지처럼, 수천만 명의 의지와 희망이 응축된
                      "우주의 메시지"가 됩니다. 이것은 단순한 데이터가 아니라, 모든 사람의 기록을 담은 길이 되어
                      엑소스트라이더를 결전의 자리까지 인도합니다.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-r from-accent/15 to-accent/5 backdrop-blur border-accent/40 p-8 hover:border-accent/60 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  핵심 메시지
                </h3>
                <div className="space-y-3">
                  <p className="text-slate-200 leading-relaxed italic">
                    "블랙홀 파트는 단순한 절망의 장면이 아닙니다. 그것은 희생이 어떻게 의미 있는 데이터로 변환되고,
                    그 데이터들이 모여 길이 되며, 그 길 위에서 영웅이 세계를 구할 수 있게 만드는 과정을 보여줍니다."
                  </p>
                  <p className="text-slate-300 text-sm">
                    이것이 명조 3.3이 다른 스토리와 다른 이유입니다. 감정과 논리가 완벽하게 결합되어,
                    하나의 장면이 감정, 설정, 주제를 동시에 담당합니다.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Characters Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/20 to-background">
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
              주요 인물들의 역할
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">방랑자</h3>
                <p className="text-slate-300 leading-relaxed">
                  최종 전투를 치르는 주인공. 하지만 그의 활약은 수천만 명의 기록 위에 세워진 것입니다. 
                  방랑자는 결전의 주체이면서 동시에 세계의 의지를 대표하는 상징입니다.
                </p>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">에이메스</h3>
                <p className="text-slate-300 leading-relaxed">
                  보이드에 삼켜진 사람들의 기록을 카세트 테이프에 담아 전달합니다. 
                  그녀는 희생자들의 기록을 좌표로 변환하는 중개자 역할을 합니다.
                </p>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">히유키</h3>
                <p className="text-slate-300 leading-relaxed">
                  시라토리(미래를 태우는 술법)로 방랑자가 좌표를 따라갈 수 있는 경로를 열어줍니다. 
                  그녀의 능력은 추상적인 좌표를 실제 행동으로 변환합니다.
                </p>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">엑소스트라이더</h3>
                <p className="text-slate-300 leading-relaxed">
                  패배 위기에서 리액터 드라이브 레플리카로 다시 일어나 알레프 원과 맞섭니다. 
                  그의 각성은 인류의 집단 의지가 물리적 현실로 변환되는 순간입니다.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Aleph One Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/40 to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="aleph"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["aleph"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent text-center">
              알레프 원: 세계의 위협
            </h2>

            {/* Exostrider Awakening BGM Player */}
            <div className="mb-12 animate-fade-in">
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
              <div className="relative group animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/5 rounded-lg blur-2xl group-hover:blur-3xl transition-all duration-300" />
                <img
                  src="/manus-storage/pasted_file_TtxhNw_image_b89f9f61.png"
                  alt="알레프 원"
                  className="relative w-full h-auto rounded-lg shadow-2xl border border-accent/30 group-hover:border-accent/60 transition-all duration-300 transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
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

      {/* Story Distinction Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/30 to-background">
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
              이 스토리의 차별점
            </h2>

            <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 mb-8 animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                감정과 논리의 완벽한 결합
              </h3>
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
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

                <div className="border-l-2 border-accent pl-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <h4 className="text-lg font-bold text-accent mb-3">
                    카세트 테이프의 역할
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    카세트 테이프는 추억의 상징이면서 동시에 좌표 데이터의 저장
                    장치입니다. 수많은 사람들이 걸어간 길은 감동적인 장면이면서
                    동시에 실제로 엑소스트라이더를 찾게 만드는 논리적 장치입니다.
                  </p>
                </div>

                <div className="border-l-2 border-accent pl-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <h4 className="text-lg font-bold text-accent mb-3">
                    리액터 드라이브 레플리카
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    리액터 드라이브 레플리카는 기술적 장비이면서 동시에 인류가
                    엑소스트라이더에게 바친 새로운 심장입니다. 하나의 물체가
                    감정, 설정, 주제를 동시에 담당합니다.
                  </p>
                </div>

                <div className="border-l-2 border-accent pl-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
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

            <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: "0.5s" }}>
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
                <p className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                  <span className="text-accent">•</span>
                  <span>
                    보이드에 삼켜진 사람들은 사라졌지만, 그들의 기록은 좌표가
                    되었다.
                  </span>
                </p>
                <p className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <span className="text-accent">•</span>
                  <span>에이메스는 그 기록을 카세트 테이프에 담아 전달했다.</span>
                </p>
                <p className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                  <span className="text-accent">•</span>
                  <span>
                    히유키는 방랑자가 그 좌표를 따라갈 수 있도록 경로를 열어주었다.
                  </span>
                </p>
                <p className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                  <span className="text-accent">•</span>
                  <span>
                    콜렉티브와 라하이 로이 사람들은 리액터 드라이브 레플리카를
                    완성했다.
                  </span>
                </p>
                <p className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                  <span className="text-accent">•</span>
                  <span>엑소스트라이더는 인류가 건넨 새로운 심장으로 다시 일어났다.</span>
                </p>
                <p className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                  <span className="text-accent">•</span>
                  <span>
                    그리고 방랑자는 그 모든 것의 끝에서 알레프 원과 맞섰다.
                  </span>
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed text-lg italic border-l-2 border-accent pl-6 animate-fade-in" style={{ animationDelay: "0.7s" }}>
                "세계가 길을 만들었고, 영웅은 그 길의 끝에서 싸웠다. 그리고 더
                정확히 말하면, 영웅이 세계를 구한 것이 아니라, 세계가 영웅을
                구할 수 있게 만들었다."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* One Line Summary */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-background via-slate-950/50 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div
            id="summary"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["summary"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="bg-gradient-to-br from-accent/25 via-accent/15 to-accent/5 backdrop-blur border-accent/60 p-16 hover:border-accent transition-all duration-300 shadow-2xl hover:shadow-accent/30">
              <h2 className="text-4xl md:text-5xl font-bold text-center font-playfair text-accent mb-8">
                한 줄 요약
              </h2>
              <p className="text-center text-2xl text-slate-100 leading-relaxed font-light">
                명조 3.3은 한 명의 영웅이 세상을 구한 이야기가 아니라, <span className="text-accent font-semibold">수많은 사람들의 기록과 의지가 영웅을 결전의 자리까지 데려간 이야기</span>다.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-4 border-t border-border/30 bg-gradient-to-b from-background via-slate-950 to-slate-950/80 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-3 font-playfair text-accent">
                명조 3.3
              </h3>
              <p className="text-slate-400 text-sm">
                별바다의 끝에서 닿은 메아리
              </p>
            </div>
            <div className="text-center">
              <p className="text-slate-300 text-base mb-2">
                세계가 영웅을 구한다는 이야기의 구조적 의미
              </p>
              <p className="text-slate-500 text-xs">
                수천만 명의 기록이 모여 만든 길
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm">
                포트폴리오 분석
              </p>
              <p className="text-slate-500 text-xs mt-2">
                2026 © 명조 3.3 스토리 분석
              </p>
            </div>
          </div>
          <div className="border-t border-border/20 pt-8 text-center">
            <p className="text-slate-500 text-xs">
              영웅이 세계를 구한 것이 아니라, 세계가 영웅을 구할 수 있게 만들었다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

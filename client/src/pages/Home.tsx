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

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    document.querySelectorAll("[data-reveal]").forEach(el => {
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
    <div className="story-preserve-page min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/0.jpg')",
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
              fontSize: "clamp(3rem, 8vw, 6.7rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: "22px",
              textShadow: "0 6px 20px rgba(0,0,0,.55)",
              background:
                "linear-gradient(135deg, #a8d8ff 0%, #d8a8ff 50%, #a8d8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            명조 3.3
          </h1>
          <h2
            className="text-2xl md:text-3xl mb-8 text-slate-300 font-playfair font-light animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            별바다의 끝에서 닿은 메아리
          </h2>
          <p
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "0.4s" }}
          >
            세계가 영웅을 구한다는 이야기
          </p>

          <div
            className="flex justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          ></div>

          <div className="animate-bounce" style={{ animationDelay: "0.8s" }}>
            <ChevronDown className="w-8 h-8 mx-auto text-accent" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="overview"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["overview"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent text-center">
              명조 3.3의 핵심 주제
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  세계가 영웅을 구한다
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  전통적인 영웅담의 반전. 영웅이 세계를 구하는 것이 아니라,
                  세계의 모든 사람이 함께 영웅을 구성하고, 그들의 노력이 영웅을
                  만든다는 철학적 메시지.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  희생의 의미화
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  블랙홀 파트에서 수천만 명이 희생되지만, 그들의 희생은 단순한
                  죽음이 아니라 데이터로 변환되어 좌표를 이루고, 그 좌표가 길이
                  되어 영웅을 인도한다.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  집단의 힘
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  개인의 노력은 미미하지만, 수천만 명이 함께 나아갈 때 그것은
                  우주의 메시지가 되고, 절대 불가능해 보이는 것도 가능하게
                  만든다.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Summary Section - Added without reducing existing content */}
      <section className="relative py-28 px-4 story-chronicle-section">
        <div className="max-w-6xl mx-auto">
          <div
            id="story-chronicle"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["story-chronicle"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="section-kicker">STORY SUMMARY</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-accent text-center">
              3.3 스토리 정리: 별바다의 끝에서 다시 이어진 길
            </h2>
            <p className="text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-14">
              기존 블랙홀 좌표 분석이 결전의 원리를 설명했다면, 이 파트는 그
              결전까지 이어지는 사건의 흐름을 정리한다. 엑소스트라이더 가동
              승인, 체이스와의 협상, 카세트 테이프 좌표, 로야 룬, 히유키와
              데니아, 보이드 스페이스의 탐구자들, 그리고 알레프 원과의 결전까지
              이어지는 전체 구조다.
            </p>

            <div className="story-roadmap">
              <Card className="story-node bg-card/50 backdrop-blur border-border/50 p-8">
                <span className="story-index">01</span>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  엑소스트라이더 가동을 위한 협상
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  에이메스를 구하고 명식의 위협을 해결하기 위해 방랑자는
                  엑소스트라이더를 가동해야 했다. 그러나 아직 정식 조종자가
                  아니었기 때문에 스페이스트랙 콜렉티브의 승인이 필요했고,
                  방랑자는 총책임자 체이스와 직접 협상하게 된다. 체이스는 명식
                  해결을 우선시했지만, 방랑자는 에이메스 구출 역시 포기하지
                  않겠다고 선언한다.
                </p>
              </Card>

              <Card className="story-node bg-card/50 backdrop-blur border-border/50 p-8">
                <span className="story-index">02</span>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  리액터 드라이브 레플리카와 10분의 조건
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  체이스는 엑소스트라이더를 완전히 복구하기 위해 리액터 드라이브
                  레플리카를 제작 중이라고 밝힌다. 다만 완성에는 고농도
                  보이드매터와 명식 내부 환경 데이터가 필요했다. 그래서 방랑자의
                  출격은 허가되지만, 에이메스를 찾는 일에는 단 10분만 사용할 수
                  있다는 조건이 붙는다.
                </p>
              </Card>

              <Card className="story-node bg-card/50 backdrop-blur border-border/50 p-8">
                <span className="story-index">03</span>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  적격자 테스트와 「에이메스」의 신호
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  방랑자는 동기화율 테스트를 통해 엑소스트라이더의 적격자 자격을
                  인정받는다. 이 과정에서 태양의 정령이 구현한 「에이메스」가
                  다시 등장하고, 그녀는 카세트 테이프라는 말을 남긴다. 이 말은
                  이후 보이드 스페이스에서 좌표를 전달하는 핵심 장치로 이어진다.
                </p>
              </Card>

              <Card className="story-node bg-card/50 backdrop-blur border-border/50 p-8">
                <span className="story-index">04</span>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  어둠의 평원과 첫 번째 실패
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  방랑자는 히유키와 루실라의 도움을 받아 스트라이더 게이트로
                  향한다. 그러나 게이트 너머의 공간은 알레프 원의 내부와
                  연결되어 있었고, 에이메스의 주파수에 손을 뻗는 순간 검은
                  손아귀가 방랑자를 붙잡는다. 결국 방랑자는 블랙홀 속으로
                  떨어지고, 엑소스트라이더는 알레프 원의 뱃속에 남겨진다.
                </p>
              </Card>

              <Card className="story-node bg-card/50 backdrop-blur border-border/50 p-8">
                <span className="story-index">05</span>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  카세트 테이프와 로야 룬 좌표
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  방랑자는 명식 내부에서 얻어낸 카세트 테이프를 연구소에
                  전달한다. 테이프에는 수천만 명에 이르는 막대한 기록이 담겨
                  있었고, 그것은 알레프 원 자체가 아니라 라하이 로이의 로야 룬
                  좌표를 가리키고 있었다. 로야 룬은 보이드 스페이스 안에 남겨진
                  엑소스트라이더의 위치를 복원하는 단서가 된다.
                </p>
              </Card>

              <Card className="story-node bg-card/50 backdrop-blur border-border/50 p-8">
                <span className="story-index">06</span>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  히유키, 데니아, 잔성회의 개입
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  어둠의 평원에서는 데니아와 잔성회의 개입이 드러난다. 데니아는
                  알레프 원의 힘에 잠식되어 있었고, 잔성회장은 데니아와 히유키를
                  이용해 명식의 힘을 장악하려 했다. 히유키는 자신의 미래
                  가능성을 소모해 봉인을 해제하고, 방랑자가 다시 게이트 너머로
                  향할 길을 열어준다.
                </p>
              </Card>

              <Card className="story-node bg-card/50 backdrop-blur border-border/50 p-8">
                <span className="story-index">07</span>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  보이드 스페이스의 탐구자들
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  보이드 스페이스 안에서 에이메스는 엑소스트라이더를 발견하지만,
                  압도적인 허무 속에서 제대로 움직이지 못한다. 그때 과거 보이드
                  스톰에 휘말린 사람들의 사념이 에이메스를 향해 다가온다. 그들은
                  사라져가면서도 엑소스트라이더의 빛을 향해 걸어가고, 각자의
                  주파수를 남겨 원점으로 향하는 좌표를 만든다.
                </p>
              </Card>

              <Card className="story-node bg-card/50 backdrop-blur border-border/50 p-8">
                <span className="story-index">08</span>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  세계가 영웅을 구한 이야기
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  좌표는 에이메스 혼자 만든 것이 아니었다. 보이드매터에 삼켜진
                  탐구자들과 라하이 로이에 남은 사람들이 함께 만든 길이었다.
                  에이메스는 그 좌표를 카세트 테이프에 담아 방랑자에게 전달했고,
                  연구소의 사람들은 이를 해독해 엑소스트라이더를 되찾을 방법을
                  찾아낸다. 이 지점에서 3.3의 핵심 주제인 “세계가 영웅을
                  구한다”가 완성된다.
                </p>
              </Card>

              <Card className="story-node bg-card/50 backdrop-blur border-border/50 p-8">
                <span className="story-index">09</span>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  알레프 원 결전과 엑소스트라이더의 부활
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  게이트 저편에서 방랑자와 에이메스는 재회하고, 방랑자는
                  엑소스트라이더를 기동해 알레프 원의 형상과 싸운다. 핵심 코어가
                  없는 엑소스트라이더는 점차 밀리지만, 모니에와 연구팀이 리액터
                  드라이브 레플리카를 완성하고 에이메스가 이를 작동시키며
                  엑소스트라이더는 다시 부활한다. 두 사람은 각성한
                  엑소스트라이더로 알레프 원의 형상을 물리친다.
                </p>
              </Card>

              <Card className="story-node bg-card/50 backdrop-blur border-border/50 p-8">
                <span className="story-index">10</span>
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  엑소스트라이더의 선택과 별바다의 울림
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  알레프 원은 완전히 소멸한 것이 아니라 먼 곳으로 추방된다.
                  엑소스트라이더는 인간의 희망으로 다시 태어난 존재가 되었고,
                  인류를 지키기 위해 그곳에 남기로 한다. 대신 에이메스에게 힘의
                  일부를 전해 수호신의 공명자로 만들고, 방랑자에게는 ‘멀리 보는
                  자’의 정보를 담은 테이프를 남긴다. 마지막에는 과거 탐구자들이
                  먼 별바다에서 보낸 울림이 확인되며, 라하이 로이의 여정은 끝이
                  아니라 다음 탐사의 시작으로 정리된다.
                </p>
              </Card>
            </div>

            <div className="story-analysis-grid mt-14">
              <Card className="analysis-panel bg-card/50 backdrop-blur border-border/50 p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  분석 1: 영웅 서사의 반전
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  3.3은 방랑자가 혼자 문제를 해결하는 이야기가 아니다. 방랑자가
                  마지막에 도달할 수 있었던 이유는 카세트 테이프를 남긴
                  에이메스, 좌표를 만든 탐구자들, 룬을 해석한 로야족, 레플리카를
                  완성한 연구팀, 길을 연 히유키가 모두 있었기 때문이다. 그래서
                  결론은 “영웅이 세계를 구했다”가 아니라 “세계가 영웅을 구하게
                  만들었다”에 가깝다.
                </p>
              </Card>

              <Card className="analysis-panel bg-card/50 backdrop-blur border-border/50 p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  분석 2: 실패를 좌표로 바꾸는 구조
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  첫 번째 게이트 진입은 실패처럼 보인다. 엑소스트라이더도 잃고,
                  에이메스도 바로 구하지 못한다. 하지만 그 과정에서 얻은 카세트
                  테이프가 로야 룬의 좌표로 이어지고, 다시 엑소스트라이더의
                  위치를 찾는 길이 된다. 즉 실패한 시도조차 다음 성공을 위한
                  데이터로 전환된다.
                </p>
              </Card>

              <Card className="analysis-panel bg-card/50 backdrop-blur border-border/50 p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  분석 3: 엑소스트라이더의 재정의
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  엑소스트라이더는 단순한 병기가 아니라, 인류가 다시 심장을
                  부여한 존재로 재정의된다. 리액터 드라이브 레플리카는 기술
                  장치이면서 동시에 문명의 의지다. 그렇기 때문에
                  엑소스트라이더의 각성은 메카닉 강화가 아니라, 인간이 미지에
                  맞서기 위해 만든 희망의 형상화로 읽힌다.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Black Hole Section - 4 Stages */}
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
              좌표 형성의 기하학적 구조
            </h2>

            <div className="space-y-12">
              {/* Stage 1: Center Point */}
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  1단계: 중심점과 개인
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      블랙홀 내에서 엑소스트라이더의 빛은 절대적인 중심(★)이
                      됩니다. 각 개인은 이 중심을 향해 나아가며, 자신이 걸어간
                      거리와 각도를 기록합니다. 이것이 좌표의 기초가 됩니다.
                    </p>
                    <p className="border-l-4 border-accent pl-4 py-2 italic text-accent">
                      "중심을 향해 나아가는 각 개인의 경로 = 거리 + 각도 +
                      주파수"
                    </p>
                  </div>
                  <img
                    src="/image/1.webp"
                    alt="1단계: 중심점과 개인"
                    className="rounded-lg shadow-lg border border-accent/20 w-full"
                  />
                </div>
              </Card>

              {/* Stage 2: Path Data */}
              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  2단계: 경로의 데이터화
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <img
                    src="/image/2.webp"
                    alt="2단계: 경로의 데이터화"
                    className="rounded-lg shadow-lg border border-accent/20 w-full"
                  />
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      도중에 실패하거나 사라지더라도, 그들이 걸어간 경로는
                      사라지지 않습니다. 각자의 이동 궤적이 데이터로 기록되며,
                      이는 "주파수"라는 형태로 저장됩니다. 실패한 시도도 완전한
                      좌표계를 만드는 데 필수적인 정보가 됩니다.
                    </p>
                    <p className="border-l-4 border-accent pl-4 py-2 italic text-accent">
                      "실패한 경로도 좌표의 일부 = 모든 노력이 의미를 가짐"
                    </p>
                  </div>
                </div>
              </Card>

              {/* Stage 3: Sphere Formation */}
              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  3단계: 집단 데이터의 축적 - 구 형태의 형성
                </h3>
                <div className="space-y-6">
                  <div className="text-slate-300 leading-relaxed">
                    <p className="mb-4">
                      한 명의 기록은 미미하지만, 수백만, 수천만 명의 기록이
                      모이면 놀라운 일이 일어납니다. 모든 사람이 같은
                      중심(엑소스트라이더의 빛)을 향해 나아갔기 때문에, 각각의
                      경로들이 모여 3차원 구(Sphere) 형태를 이룹니다.
                    </p>
                  </div>
                  <img
                    src="/image/3.webp"
                    alt="3단계: 구 형태의 형성"
                    className="rounded-lg shadow-lg border border-accent/20 w-full max-w-2xl mx-auto"
                  />
                  <div className="grid md:grid-cols-3 gap-4 text-slate-300 text-sm">
                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                      <p className="font-semibold text-accent mb-2">
                        희소한 점들
                      </p>
                      <p>초기 상태 - 개별 경로들이 흩어져 있음</p>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                      <p className="font-semibold text-accent mb-2">
                        촘촘한 구
                      </p>
                      <p>
                        최종 상태 - 수천만 명의 경로가 모여 완전한 구를 형성
                      </p>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                      <p className="font-semibold text-accent mb-2">
                        방사형 구조
                      </p>
                      <p>모든 경로가 중심을 향하므로 자연스럽게 구 형태가 됨</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Stage 4: Voyager Coordinate */}
              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  4단계: 좌표의 완성과 활용 - 보이저호의 메시지
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      이렇게 완성된 3차원 구 형태의 좌표는 단순한 데이터가
                      아닙니다. 이것은 수천만 명의 의지, 희망, 그리고 마지막
                      순간의 선택이 응축된 "지도"입니다. 마치 보이저호가 우주에
                      인류의 메시지를 담아 보낸 것처럼, 이 좌표는 모든 사람의
                      기록을 담은 우주의 메시지가 됩니다.
                    </p>
                    <p className="border-l-4 border-accent pl-4 py-2 italic text-accent">
                      "구 형태의 좌표 = 수천만 명이 함께 만든 길 = 우주에 보낸
                      인류의 메시지"
                    </p>
                  </div>
                  <img
                    src="/image/4.webp"
                    alt="4단계: 보이저호 같은 좌표"
                    className="rounded-lg shadow-lg border border-accent/20 w-full"
                  />
                </div>
              </Card>

              {/* Black Hole Method */}
              <Card
                className="bg-gradient-to-r from-accent/15 to-accent/5 backdrop-blur border-accent/40 p-8 hover:border-accent/60 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  블랙홀 안에서 좌표를 찾을 수 있던 방법
                </h3>
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    블랙홀 안에서의 좌표 형성은 다음과 같은 원리로 작동합니다.
                    블랙홀 내에서 점이 개인을 의미하고, 빛나는 부분이
                    엑소스트라이더의 빛이라고 생각하면, 각 개인은 그 빛을 향해
                    걸어가면서 거리를 재는 방식입니다.
                  </p>
                  <p>
                    물론 언제 닿을 수 있을지, 영원히 도달할 수 없을지도 모르는
                    거리입니다. 도중에 실패해서 사라지는 사람도 있었고, 그럼에도
                    불구하고 자신의 주파수를 사용하며 엑소스트라이더에게
                    나아갔습니다.
                  </p>
                  <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                    <p className="font-semibold text-accent mb-2">
                      핵심: 방향(각도) + 거리
                    </p>
                    <p>
                      도착하면 방향(각도)과 거리를 알게 됩니다. 이를 한 명 한
                      명이 남은 주파수로 기록한 것입니다. 하지만 이것이 한 명이
                      아니라 수백, 수천만 명이 한다면?
                    </p>
                  </div>
                  <p className="border-l-4 border-accent pl-4 py-2 italic">
                    "이런 구(Sphere) 형태의 지도가 완성되는 것입니다."
                  </p>
                  <p>
                    사람이 많을수록 이 구가 더욱 촘촘해집니다. 각자가 걸어간
                    각도와 거리를 입력하면, 보이저호처럼 위치가 계산 가능해지는
                    것입니다.
                  </p>
                  <p>
                    특히 이 좌표를 사용하는 방랑자와 히유키의 시라토리(미래를
                    태우는 술법)까지 합해지니, 이렇게 찾을 수 있었던 것입니다.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Aleph One Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-purple-950/20 to-background">
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
              알레프 원 - 우주의 눈
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  알레프 원은 블랙홀과 닮아있지만 완전히 동일한 성질은 아닙니다.
                  그것은 우주의 의지를 담은 거대한 눈이자, 모든 것을 관찰하고
                  판단하는 절대적 존재입니다.
                </p>
                <p>
                  블랙홀 파트에서 수천만 명이 만든 좌표는 결국 알레프 원을
                  향하고 있었습니다. 엑소스트라이더가 그 좌표를 따라 나아갈 때,
                  알레프 원은 이미 그것을 알고 있었던 것입니다.
                </p>
                <p>
                  결전에서 엑소스트라이더는 리액터 드라이브 레플리카로 각성하며,
                  수천만 명의 주파수를 받아 새로운 생명을 얻습니다. 이것이
                  "세계가 영웅을 구한다"는 주제의 정점입니다.
                </p>
              </div>
              <img
                src="/image/5.webp"
                alt="알레프 원 - 우주의 눈"
                className="rounded-lg shadow-lg border border-accent/20 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Characters Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/40 to-background">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent text-center">
              주요 인물들의 역할
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  방랑자
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  블랙홀 파트의 중심 인물. 수천만 명의 좌표를 따라 나아가는
                  존재. 개인의 선택과 결정이 집단의 의지와 어떻게 연결되는지를
                  보여주는 캐릭터. 절망 속에서도 앞으로 나아가는 의지의 화신.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  에이메스
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  방랑자를 지키고 함께하는 존재. 개인의 희생이 어떻게 의미 있는
                  데이터로 변환되는지를 몸소 보여줍니다. 희생과 헌신의 의미를
                  구체적으로 실현하는 캐릭터.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  히유키
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  시라토리(미래를 태우는 술법)를 통해 좌표를 읽고 해석하는
                  능력을 가진 인물. 블랙홀에서 형성된 구 형태의 좌표를 최단
                  경로로 변환하여 방랑자를 인도한다. 지혜와 직관의 화신.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  엑소스트라이더
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  블랙홀 내에서 모든 사람이 향하는 절대적 중심. 리액터 드라이브
                  레플리카의 삽입으로 각성하며, 수천만 명의 주파수를 받아 새로운
                  생명을 얻는다. 희생이 어떻게 힘으로 변환되는지를 보여주는
                  존재.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Distinction Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/50 to-background">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent text-center">
              명조 3.3의 차별점
            </h2>

            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  감정과 논리의 완벽한 결합
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  명조 3.3은 단순한 감정적 스토리가 아닙니다. 블랙홀 파트의
                  기하학적 구조, 좌표 형성의 논리, 그리고 수천만 명의 희생이라는
                  감정적 무게가 완벽하게 결합되어 있습니다. 한 장면이 감정,
                  설정, 주제를 모두 담당합니다.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  철학적 깊이
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  "세계가 영웅을 구한다"는 주제는 단순한 설정이 아닙니다. 이것은
                  개인과 집단, 희생과 보상, 절망과 희망에 대한 깊은 철학적
                  질문을 담고 있습니다. 각 캐릭터의 선택과 행동이 이 주제를
                  구체적으로 실현합니다.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  시각적 표현의 혁신
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  블랙홀 파트에서 추상적인 개념(좌표, 주파수, 구 형태)을
                  시각적으로 표현하는 방식은 게임 스토리텔링의 새로운 기준을
                  제시합니다. 추상과 구체, 과학과 감정이 시각적으로 어떻게
                  표현될 수 있는지를 보여줍니다.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* BGM Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-purple-950/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="bgm"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["bgm"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent text-center">
              스토리를 담은 음악
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  블랙홀 파트 BGM
                </h3>
                <div className="mb-4">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/7nwzaBOmiYc"
                    title="Black Hole BGM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="text-slate-300 text-sm">
                  우주적 신비로움과 웅장함을 표현하는 음악. 수천만 명이 좌표를
                  형성하는 장면의 감정을 완벽하게 담아냅니다.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  엑소스트라이더 각성 BGM
                </h3>
                <div className="mb-4">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/Gp0Jbhu0FWA"
                    title="Exostrider Awakening BGM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="text-slate-300 text-sm">
                  절망에서 희망으로 변하는 감정, 리액터 드라이브 레플리카
                  삽입으로 새로운 생명을 얻는 순간의 장대함을 표현합니다.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/40 to-background">
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
            <Card className="bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur border-accent/50 p-12 hover:border-accent/70 transition-all duration-300 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-playfair text-accent text-center">
                결론
              </h2>
              <div className="space-y-6 text-slate-200 leading-relaxed text-lg">
                <p>
                  명조 3.3 「별바다의 끝에서 닿은 메아리」는 단순한 게임
                  스토리를 넘어, 철학적 메시지를 담은 예술 작품입니다.
                </p>
                <p>
                  블랙홀 파트에서 보여주는 "세계가 영웅을 구한다"는 주제는,
                  개인의 희생이 어떻게 의미 있는 데이터로 변환되고, 그
                  데이터들이 모여 길이 되며, 그 길 위에서 영웅이 세계를 구할 수
                  있게 만드는 과정을 보여줍니다.
                </p>
                <p>
                  감정과 논리, 추상과 구체, 과학과 철학이 완벽하게 결합된 이
                  스토리는, 게임 스토리텔링의 새로운 기준을 제시하며,
                  플레이어에게 깊은 감동과 함께 오래 남는 인상을 남깁니다.
                </p>
                <p className="border-l-4 border-accent pl-6 py-2 italic text-accent text-xl font-semibold">
                  "모든 노력이 의미를 가지며, 집단의 힘은 불가능을 가능하게
                  만든다."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 bg-gradient-to-b from-background to-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-4">
            <p className="text-slate-400">
              명조 3.3 「별바다의 끝에서 닿은 메아리」 스토리 분석
            </p>
            <p className="text-slate-500 text-sm">
              © 2026 Wuthering Waves Story Analysis | 모든 이미지와 음악은
              원작자의 저작권에 따릅니다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

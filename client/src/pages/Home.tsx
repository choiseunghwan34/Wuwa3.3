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

      {/* Core Theme Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-background to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="theme-intro"
            data-reveal
            className={`mb-16 transition-all duration-1000 ${
              visibleElements["theme-intro"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-playfair text-accent">
              핵심 주제
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  세계가 영웅을 구한다
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  명조 3.3 스토리는 한 명의 영웅이 모든 것을 해결하는 전형적인
                  서사 구조를 거부합니다. 대신, 수많은 존재들의 기록과 의지가
                  결합되어 영웅이 최종 결전에 도달할 수 있는 '길'을 만들었다는
                  점을 강조합니다.
                </p>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  희생이 구조가 된다
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  보이드에 삼켜진 사람들은 단순한 희생자로 남지 않습니다. 그들의
                  기록은 좌표가 되고, 그 좌표는 길이 되어 결전을 가능하게 합니다.
                  희생은 감정적 장치가 아니라 구조적 기능을 수행합니다.
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

      {/* Key Characters Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-background to-background">
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
              주요 인물의 역할
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  방랑자
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  전형적인 절대적 영웅이 아닙니다. 방랑자는 세계가 만들어준 길
                  위에서 싸우는 존재입니다. 그의 힘은 개인적인 것이 아니라,
                  수많은 사람들의 의지와 기록 위에 세워진 것입니다.
                </p>
                <div className="text-sm text-slate-400">
                  역할: 최종 결전의 수행자
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  에이메스
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  단순한 구출 대상이 아닙니다. 그녀는 보이드 너머의 기록을
                  받아내어 카세트 테이프로 변환하고 전달하는 매개자입니다. 결전에서는
                  리액터 드라이브 레플리카를 통해 엑소스트라이더를 복구합니다.
                </p>
                <div className="text-sm text-slate-400">
                  역할: 기록의 전달자이자 구원의 주체
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  히유키
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  방랑자의 단순한 조력자를 넘어섭니다. 그녀의 시라토리는 왜곡된
                  공간에서 이동 경로를 보정하고 안정화합니다. 방랑자가 좌표를
                  실제로 사용할 수 있도록 만드는 존재입니다.
                </p>
                <div className="text-sm text-slate-400">
                  역할: 경로의 안정화자
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  엑소스트라이더
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  과거 인류를 지켜온 기체이지만, 혼자 완성된 존재가 아닙니다.
                  인류가 만든 리액터 드라이브 레플리카라는 새로운 심장을 통해
                  다시 싸울 수 있게 됩니다.
                </p>
                <div className="text-sm text-slate-400">
                  역할: 세계에게 구원받는 영웅
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final Battle Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-background to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="battle"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["battle"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent">
              알레프 원과의 결전
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="md:col-span-2">
                <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                    집단적 승리의 의미
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    알레프 원과의 결전은 단순한 최종 전투가 아닙니다. 이는 앞선
                    모든 과정의 결과이자, '세계가 만든 길'의 최종 증명입니다.
                    방랑자와 엑소스트라이더는 알레프 원을 완전히 소멸시키지 못하지만,
                    라하이 로이에서 멀리 밀어내어 당장의 위협을 제거합니다.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    이 승리는 방랑자 개인의 힘이 아닌, 보이드에 삼켜진 사람들의
                    기록, 에이메스의 전달, 히유키의 지원, 콜렉티브의 기술, 라하이
                    로이 사람들의 의지가 모두 결합된 '집단적 승리'입니다.
                  </p>
                </Card>
              </div>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-accent font-playfair">
                  결전까지의 흐름
                </h3>
                <ol className="space-y-3 text-slate-300 text-sm">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">1.</span>
                    <span>보이드에 삼켜진 사람들이 엑소스트라이더의 빛을 향해 이동</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">2.</span>
                    <span>그 이동 기록이 쌓여 좌표가 됨</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">3.</span>
                    <span>에이메스가 그 좌표를 카세트 테이프로 전달</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">4.</span>
                    <span>방랑자가 좌표를 해석하고 다시 게이트 너머로 향함</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">5.</span>
                    <span>히유키의 시라토리가 경로를 안정화</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">6.</span>
                    <span>리액터 드라이브 레플리카가 엑소스트라이더를 복구</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">7.</span>
                    <span>방랑자와 에이메스가 함께 알레프 원과 맞섬</span>
                  </li>
                </ol>
              </Card>

              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 text-accent font-playfair">
                  구조적 의미
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  이 과정에서 어느 하나라도 빠졌다면 결전은 성립하지 않습니다.
                </p>
                <ul className="space-y-2 text-slate-400 text-sm">
                  <li>• 좌표가 없었다면 방랑자는 엑소스트라이더를 찾을 수 없었음</li>
                  <li>• 에이메스가 없었다면 기록은 전달되지 못했음</li>
                  <li>• 히유키가 없었다면 경로는 안정되지 못했음</li>
                  <li>• 레플리카가 없었다면 엑소스트라이더는 싸울 수 없었음</li>
                  <li>• 방랑자가 없었다면 마지막 결전을 수행할 존재가 없었음</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Distinction Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-background to-background">
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

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border-l-2 border-accent pl-6">
                  <h4 className="text-lg font-bold text-accent mb-3">
                    희생의 의미
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    희생은 단순한 감정적 장치가 아니라, 데이터가 되고 좌표가 되어
                    결전을 가능하게 하는 논리적 기능을 수행합니다.
                  </p>
                </div>

                <div className="border-l-2 border-accent pl-6">
                  <h4 className="text-lg font-bold text-accent mb-3">
                    카세트 테이프의 역할
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    추억의 상징이면서 동시에 좌표 데이터 저장 장치입니다. 하나의
                    물체가 감정과 설정을 동시에 담당합니다.
                  </p>
                </div>

                <div className="border-l-2 border-accent pl-6">
                  <h4 className="text-lg font-bold text-accent mb-3">
                    리액터 드라이브 레플리카
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    기술적 장비이면서 동시에 인류가 엑소스트라이더에게 바친 새로운
                    심장입니다.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-accent font-playfair">
                최종 결론
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg italic">
                "명조 3.3은 한 명의 영웅이 세상을 구한 이야기가 아니라, 수많은
                사람들의 기록과 의지가 영웅을 결전의 자리까지 데려간 이야기다."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-border/30 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 text-sm">
            명조 3.3: 별바다의 끝에서 닿은 메아리 분석
          </p>
          <p className="text-slate-500 text-xs mt-2">
            세계가 영웅을 구한다는 이야기의 구조적 의미
          </p>
        </div>
      </footer>
    </div>
  );
}

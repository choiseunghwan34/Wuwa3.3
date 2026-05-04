import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SectionProps {
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, label, title, children }: SectionProps) => (
  <section
    id={id}
    className="py-[140px] px-[30px] lg:px-[10%] min-h-screen flex flex-col justify-start max-w-[1400px] mx-auto relative"
  >
    <div className="mb-[60px] border-l-[6px] border-[#42D9FF] pl-[30px] animate-fade-in-up">
      <div className="text-[#42D9FF] text-[14px] font-mono tracking-[3px] uppercase">
        {label}
      </div>
      <h2 className="text-[38px] font-black mt-[15px] text-white leading-[1.3] break-keep">
        {title}
      </h2>
    </div>
    <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      {children}
    </div>
  </section>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "-20% 0px -60% 0px",
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll("section").forEach(el => {
      observer.observe(el);
    });

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "hero", num: "00", label: "TOP" },
    { id: "overview", num: "01", label: "핵심 주제" },
    { id: "detailed-analysis", num: "02", label: "기하학적 구조" },
    { id: "aleph-one", num: "03", label: "알레프 원" },
    { id: "characters", num: "04", label: "주요 인물" },
    { id: "distinction", num: "05", label: "차별점" },
    { id: "bgm", num: "06", label: "음악" },
    { id: "summary", num: "07", label: "결론" },
  ];

  return (
    <div className="flex min-h-screen bg-[#040914] text-[#EAF6FF] font-sans selection:bg-[#42D9FF]/30">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-[80px] lg:w-[280px] h-screen bg-[#07111f]/95 backdrop-blur-[20px] border-r border-[#42D9FF]/20 py-[40px] px-[10px] lg:px-[25px] z-50 flex flex-col overflow-y-auto custom-scrollbar transition-all duration-300">
        <div className="mb-[40px] hidden lg:block">
          <h2 className="text-[28px] font-black text-[#42D9FF] tracking-[2px]">
            WUWA 3.3
          </h2>
          <p className="text-[11px] text-[#B8C7D9] tracking-[3px] uppercase mt-1">
            STORY ANALYSIS
          </p>
        </div>
        <nav className="flex flex-col gap-[4px]">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left p-[12px] lg:px-[15px] rounded-[8px] transition-all duration-300 flex flex-col items-center lg:items-start group
                ${
                  activeSection === item.id
                    ? "text-[#42D9FF] bg-[#42D9FF]/10 border-l-[4px] border-[#42D9FF]"
                    : "text-[#B8C7D9] hover:text-[#42D9FF] hover:bg-[#42D9FF]/5"
                }`}
            >
              <div className="text-[10px] font-mono text-[#9A7BFF] group-hover:text-[#42D9FF] transition-colors">
                {item.num}
              </div>
              <div className="text-[14px] font-semibold hidden lg:block mt-1">
                {item.label}
              </div>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-[80px] lg:ml-[280px] flex-1 w-[calc(100%-80px)] lg:w-[calc(100%-280px)] overflow-x-hidden">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663610674087/S95DyMAVW3t8ozUjmMqgqM/hero-background-Hr4xtozqwKWE2F5quBHpDj.webp')",
              backgroundAttachment: "fixed",
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-[#040914]/60 to-transparent" />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
            <h1 className="text-[42px] lg:text-[72px] font-black mb-[20px] text-white break-keep">
              명조 <span className="text-[#42D9FF]">3.3</span>
            </h1>
            <h2 className="text-[20px] lg:text-[28px] text-[#42D9FF] mb-[30px] font-light tracking-wide">
              별바다의 끝에서 닿은 메아리
            </h2>
            <p className="text-[18px] text-[#B8C7D9] mb-[50px] leading-relaxed">
              세계가 영웅을 구한다는 이야기
            </p>

            <div className="flex justify-center gap-4 mb-16">
              <button
                onClick={() => scrollTo("overview")}
                className="px-[30px] py-[15px] bg-[#42D9FF]/20 border border-[#42D9FF] text-[#42D9FF] font-bold rounded-[4px] hover:bg-[#42D9FF]/40 transition-all"
              >
                분석 읽기
              </button>
              <button className="px-[30px] py-[15px] border border-[#B8C7D9]/30 text-[#B8C7D9] font-bold rounded-[4px] hover:border-[#42D9FF] hover:text-[#42D9FF] transition-all">
                더 알아보기
              </button>
            </div>

            <div className="animate-bounce text-[#42D9FF]">
              <ChevronDown className="w-8 h-8 mx-auto" />
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <Section
          id="overview"
          label="01 · OVERVIEW"
          title="명조 3.3의 핵심 주제"
        >
          <div className="grid md:grid-cols-3 gap-[30px]">
            <div className="bg-[#42D9FF]/5 border border-[#42D9FF]/20 p-[35px] rounded-[12px] transition-all duration-300 hover:-translate-y-2 hover:border-[#42D9FF] hover:bg-[#42D9FF]/10">
              <h3 className="text-[#9A7BFF] text-[18px] font-black mb-[15px]">
                세계가 영웅을 구한다
              </h3>
              <p className="text-[#B8C7D9] text-[16px] leading-[1.8] break-keep">
                전통적인 영웅담의 반전. 영웅이 세계를 구하는 것이 아니라, 세계의
                모든 사람이 함께 영웅을 구성하고, 그들의 노력이 영웅을 만든다는
                철학적 메시지.
              </p>
            </div>

            <div className="bg-[#42D9FF]/5 border border-[#42D9FF]/20 p-[35px] rounded-[12px] transition-all duration-300 hover:-translate-y-2 hover:border-[#42D9FF] hover:bg-[#42D9FF]/10">
              <h3 className="text-[#9A7BFF] text-[18px] font-black mb-[15px]">
                희생의 의미화
              </h3>
              <p className="text-[#B8C7D9] text-[16px] leading-[1.8] break-keep">
                블랙홀 파트에서 수천만 명이 희생되지만, 그들의 희생은 단순한
                죽음이 아니라 데이터로 변환되어 좌표를 이루고, 그 좌표가 길이
                되어 영웅을 인도한다.
              </p>
            </div>

            <div className="bg-[#42D9FF]/5 border border-[#42D9FF]/20 p-[35px] rounded-[12px] transition-all duration-300 hover:-translate-y-2 hover:border-[#42D9FF] hover:bg-[#42D9FF]/10">
              <h3 className="text-[#9A7BFF] text-[18px] font-black mb-[15px]">
                집단의 힘
              </h3>
              <p className="text-[#B8C7D9] text-[16px] leading-[1.8] break-keep">
                개인의 노력은 미미하지만, 수천만 명이 함께 나아갈 때 그것은
                우주의 메시지가 되고, 절대 불가능해 보이는 것도 가능하게 만든다.
              </p>
            </div>
          </div>
        </Section>

        {/* Black Hole Section */}
        <Section
          id="detailed-analysis"
          label="02 · DETAILED ANALYSIS"
          title="좌표 형성의 기하학적 구조"
        >
          <div className="space-y-[30px]">
            {/* Stage 1 */}
            <div className="p-[30px] bg-[#9A7BFF]/5 border-l-[5px] border-[#9A7BFF] rounded-[4px]">
              <h3 className="text-[#9A7BFF] font-black mb-[20px] text-[20px]">
                1단계: 중심점과 개인
              </h3>
              <div className="grid md:grid-cols-2 gap-[30px] items-start">
                <div className="space-y-[15px] text-[#B8C7D9] leading-[1.8] break-keep">
                  <p>
                    블랙홀 내에서 엑소스트라이더의 빛은 절대적인 중심(★)이
                    됩니다. 각 개인은 이 중심을 향해 나아가며, 자신이 걸어간
                    거리와 각도를 기록합니다. 이것이 좌표의 기초가 됩니다.
                  </p>
                  <p className="border-l-[4px] border-[#42D9FF] pl-[15px] py-[5px] italic text-[#42D9FF] font-bold">
                    "중심을 향해 나아가는 각 개인의 경로 = 거리 + 각도 + 주파수"
                  </p>
                </div>
                <img
                  src="/image/1.webp"
                  alt="1단계"
                  className="rounded-[8px] border border-[#42D9FF]/20 w-full"
                />
              </div>
            </div>

            {/* Stage 2 */}
            <div className="p-[30px] bg-[#9A7BFF]/5 border-l-[5px] border-[#9A7BFF] rounded-[4px]">
              <h3 className="text-[#9A7BFF] font-black mb-[20px] text-[20px]">
                2단계: 경로의 데이터화
              </h3>
              <div className="grid md:grid-cols-2 gap-[30px] items-start">
                <img
                  src="/image/2.webp"
                  alt="2단계"
                  className="rounded-[8px] border border-[#42D9FF]/20 w-full order-last md:order-first"
                />
                <div className="space-y-[15px] text-[#B8C7D9] leading-[1.8] break-keep">
                  <p>
                    도중에 실패하거나 사라지더라도, 그들이 걸어간 경로는
                    사라지지 않습니다. 각자의 이동 궤적이 데이터로 기록되며,
                    이는 "주파수"라는 형태로 저장됩니다. 실패한 시도도 완전한
                    좌표계를 만드는 데 필수적인 정보가 됩니다.
                  </p>
                  <p className="border-l-[4px] border-[#42D9FF] pl-[15px] py-[5px] italic text-[#42D9FF] font-bold">
                    "실패한 경로도 좌표의 일부 = 모든 노력이 의미를 가짐"
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="p-[30px] bg-[#9A7BFF]/5 border-l-[5px] border-[#9A7BFF] rounded-[4px]">
              <h3 className="text-[#9A7BFF] font-black mb-[20px] text-[20px]">
                3단계: 집단 데이터의 축적 - 구 형태의 형성
              </h3>
              <div className="space-y-[20px] text-[#B8C7D9] leading-[1.8] break-keep">
                <p>
                  한 명의 기록은 미미하지만, 수백만, 수천만 명의 기록이 모이면
                  놀라운 일이 일어납니다. 모든 사람이 같은 중심(엑소스트라이더의
                  빛)을 향해 나아갔기 때문에, 각각의 경로들이 모여 3차원
                  구(Sphere) 형태를 이룹니다.
                </p>
                <img
                  src="/image/3.webp"
                  alt="3단계"
                  className="rounded-[8px] border border-[#42D9FF]/20 w-full max-w-2xl mx-auto"
                />
                <div className="grid md:grid-cols-3 gap-[15px] text-[14px]">
                  <div className="bg-[#42D9FF]/10 p-[15px] rounded-[8px] border border-[#42D9FF]/20">
                    <p className="font-bold text-[#42D9FF] mb-[5px]">
                      희소한 점들
                    </p>
                    <p>초기 상태 - 개별 경로들이 흩어져 있음</p>
                  </div>
                  <div className="bg-[#42D9FF]/10 p-[15px] rounded-[8px] border border-[#42D9FF]/20">
                    <p className="font-bold text-[#42D9FF] mb-[5px]">
                      촘촘한 구
                    </p>
                    <p>최종 상태 - 수천만 명의 경로가 모여 완전한 구를 형성</p>
                  </div>
                  <div className="bg-[#42D9FF]/10 p-[15px] rounded-[8px] border border-[#42D9FF]/20">
                    <p className="font-bold text-[#42D9FF] mb-[5px]">
                      방사형 구조
                    </p>
                    <p>모든 경로가 중심을 향하므로 자연스럽게 구 형태가 됨</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="p-[30px] bg-[#9A7BFF]/5 border-l-[5px] border-[#9A7BFF] rounded-[4px]">
              <h3 className="text-[#9A7BFF] font-black mb-[20px] text-[20px]">
                4단계: 좌표의 완성과 활용 - 보이저호의 메시지
              </h3>
              <div className="grid md:grid-cols-2 gap-[30px] items-start">
                <div className="space-y-[15px] text-[#B8C7D9] leading-[1.8] break-keep">
                  <p>
                    이렇게 완성된 3차원 구 형태의 좌표는 단순한 데이터가
                    아닙니다. 이것은 수천만 명의 의지, 희망, 그리고 마지막
                    순간의 선택이 응축된 "지도"입니다. 마치 보이저호가 우주에
                    인류의 메시지를 담아 보낸 것처럼, 이 좌표는 모든 사람의
                    기록을 담은 우주의 메시지가 됩니다.
                  </p>
                  <p className="border-l-[4px] border-[#42D9FF] pl-[15px] py-[5px] italic text-[#42D9FF] font-bold">
                    "구 형태의 좌표 = 수천만 명이 함께 만든 길 = 우주에 보낸
                    인류의 메시지"
                  </p>
                </div>
                <img
                  src="/image/4.webp"
                  alt="4단계"
                  className="rounded-[8px] border border-[#42D9FF]/20 w-full"
                />
              </div>
            </div>

            {/* Method Card */}
            <div className="bg-gradient-to-r from-[#42D9FF]/10 to-[#9A7BFF]/10 border border-[#42D9FF]/30 p-[35px] rounded-[12px]">
              <h3 className="text-[#42D9FF] font-black mb-[20px] text-[22px]">
                블랙홀 안에서 좌표를 찾을 수 있던 방법
              </h3>
              <div className="space-y-[15px] text-[#B8C7D9] leading-[1.8] break-keep">
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
                <div className="bg-[#42D9FF]/10 border-l-[4px] border-[#42D9FF] p-[20px] rounded-[4px] my-[20px]">
                  <p className="font-bold text-[#42D9FF] mb-[10px] text-[18px]">
                    핵심: 방향(각도) + 거리
                  </p>
                  <p>
                    도착하면 방향(각도)과 거리를 알게 됩니다. 이를 한 명 한 명이
                    남은 주파수로 기록한 것입니다. 하지만 이것이 한 명이 아니라
                    수백, 수천만 명이 한다면?
                  </p>
                </div>
                <p className="border-l-[4px] border-[#9A7BFF] pl-[15px] py-[5px] italic font-bold text-[#9A7BFF]">
                  "이런 구(Sphere) 형태의 지도가 완성되는 것입니다."
                </p>
                <p>
                  사람이 많을수록 이 구가 더욱 촘촘해집니다. 각자가 걸어간
                  각도와 거리를 입력하면, 보이저호처럼 위치가 계산 가능해지는
                  것입니다. 특히 이 좌표를 사용하는 방랑자와 히유키의
                  시라토리(미래를 태우는 술법)까지 합해지니, 이렇게 찾을 수
                  있었던 것입니다.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Aleph One Section */}
        <Section
          id="aleph-one"
          label="03 · ALEPH ONE"
          title="알레프 원 - 우주의 눈"
        >
          <div className="grid md:grid-cols-2 gap-[40px] items-center">
            <div className="space-y-[20px] text-[#B8C7D9] leading-[1.8] break-keep">
              <p>
                알레프 원은 블랙홀과 닮아있지만 완전히 동일한 성질은 아닙니다.
                그것은 우주의 의지를 담은 거대한 눈이자, 모든 것을 관찰하고
                판단하는 절대적 존재입니다.
              </p>
              <p>
                블랙홀 파트에서 수천만 명이 만든 좌표는 결국 알레프 원을 향하고
                있었습니다. 엑소스트라이더가 그 좌표를 따라 나아갈 때, 알레프
                원은 이미 그것을 알고 있었던 것입니다.
              </p>
              <p>
                결전에서 엑소스트라이더는 리액터 드라이브 레플리카로 각성하며,
                수천만 명의 주파수를 받아 새로운 생명을 얻습니다. 이것이 "세계가
                영웅을 구한다"는 주제의 정점입니다.
              </p>
            </div>
            <img
              src="/image/5.webp"
              alt="알레프 원"
              className="rounded-[8px] border border-[#42D9FF]/20 w-full shadow-[0_0_30px_rgba(66,217,255,0.15)]"
            />
          </div>
        </Section>

        {/* Characters Section */}
        <Section
          id="characters"
          label="04 · CHARACTERS"
          title="주요 인물들의 역할"
        >
          <div className="grid md:grid-cols-2 gap-[30px]">
            <div className="bg-[#42D9FF]/5 border border-[#42D9FF]/20 p-[35px] rounded-[12px] hover:-translate-y-2 transition-transform">
              <h3 className="text-[#42D9FF] font-black mb-[15px] text-[20px]">
                방랑자
              </h3>
              <p className="text-[#B8C7D9] leading-[1.8] break-keep">
                블랙홀 파트의 중심 인물. 수천만 명의 좌표를 따라 나아가는 존재.
                개인의 선택과 결정이 집단의 의지와 어떻게 연결되는지를 보여주는
                캐릭터. 절망 속에서도 앞으로 나아가는 의지의 화신.
              </p>
            </div>
            <div className="bg-[#42D9FF]/5 border border-[#42D9FF]/20 p-[35px] rounded-[12px] hover:-translate-y-2 transition-transform">
              <h3 className="text-[#42D9FF] font-black mb-[15px] text-[20px]">
                에이메스
              </h3>
              <p className="text-[#B8C7D9] leading-[1.8] break-keep">
                방랑자를 지키고 함께하는 존재. 개인의 희생이 어떻게 의미 있는
                데이터로 변환되는지를 몸소 보여줍니다. 희생과 헌신의 의미를
                구체적으로 실현하는 캐릭터.
              </p>
            </div>
            <div className="bg-[#42D9FF]/5 border border-[#42D9FF]/20 p-[35px] rounded-[12px] hover:-translate-y-2 transition-transform">
              <h3 className="text-[#42D9FF] font-black mb-[15px] text-[20px]">
                히유키
              </h3>
              <p className="text-[#B8C7D9] leading-[1.8] break-keep">
                시라토리(미래를 태우는 술법)를 통해 좌표를 읽고 해석하는 능력을
                가진 인물. 블랙홀에서 형성된 구 형태의 좌표를 최단 경로로
                변환하여 방랑자를 인도한다. 지혜와 직관의 화신.
              </p>
            </div>
            <div className="bg-[#42D9FF]/5 border border-[#42D9FF]/20 p-[35px] rounded-[12px] hover:-translate-y-2 transition-transform">
              <h3 className="text-[#42D9FF] font-black mb-[15px] text-[20px]">
                엑소스트라이더
              </h3>
              <p className="text-[#B8C7D9] leading-[1.8] break-keep">
                블랙홀 내에서 모든 사람이 향하는 절대적 중심. 리액터 드라이브
                레플리카의 삽입으로 각성하며, 수천만 명의 주파수를 받아 새로운
                생명을 얻는다. 희생이 어떻게 힘으로 변환되는지를 보여주는 존재.
              </p>
            </div>
          </div>
        </Section>

        {/* Distinction Section */}
        <Section
          id="distinction"
          label="05 · DISTINCTION"
          title="명조 3.3의 차별점"
        >
          <div className="grid md:grid-cols-3 gap-[30px]">
            <div className="bg-[#9A7BFF]/5 border-l-[5px] border-[#9A7BFF] p-[30px] rounded-[4px]">
              <h3 className="text-[#9A7BFF] font-black mb-[15px] text-[18px]">
                감정과 논리의 완벽한 결합
              </h3>
              <p className="text-[#B8C7D9] leading-[1.8] break-keep">
                명조 3.3은 단순한 감정적 스토리가 아닙니다. 블랙홀 파트의
                기하학적 구조, 좌표 형성의 논리, 그리고 수천만 명의 희생이라는
                감정적 무게가 완벽하게 결합되어 있습니다. 한 장면이 감정, 설정,
                주제를 모두 담당합니다.
              </p>
            </div>
            <div className="bg-[#9A7BFF]/5 border-l-[5px] border-[#9A7BFF] p-[30px] rounded-[4px]">
              <h3 className="text-[#9A7BFF] font-black mb-[15px] text-[18px]">
                철학적 깊이
              </h3>
              <p className="text-[#B8C7D9] leading-[1.8] break-keep">
                "세계가 영웅을 구한다"는 주제는 단순한 설정이 아닙니다. 이것은
                개인과 집단, 희생과 보상, 절망과 희망에 대한 깊은 철학적 질문을
                담고 있습니다. 각 캐릭터의 선택과 행동이 이 주제를 구체적으로
                실현합니다.
              </p>
            </div>
            <div className="bg-[#9A7BFF]/5 border-l-[5px] border-[#9A7BFF] p-[30px] rounded-[4px]">
              <h3 className="text-[#9A7BFF] font-black mb-[15px] text-[18px]">
                시각적 표현의 혁신
              </h3>
              <p className="text-[#B8C7D9] leading-[1.8] break-keep">
                블랙홀 파트에서 추상적인 개념(좌표, 주파수, 구 형태)을
                시각적으로 표현하는 방식은 게임 스토리텔링의 새로운 기준을
                제시합니다. 추상과 구체, 과학과 감정이 시각적으로 어떻게 표현될
                수 있는지를 보여줍니다.
              </p>
            </div>
          </div>
        </Section>

        {/* BGM Section */}
        <Section id="bgm" label="06 · SOUNDTRACK" title="스토리를 담은 음악">
          <div className="grid md:grid-cols-2 gap-[30px]">
            <div className="bg-[#42D9FF]/5 border border-[#42D9FF]/20 p-[35px] rounded-[12px]">
              <h3 className="text-[#42D9FF] font-black mb-[20px] text-[20px]">
                블랙홀 파트 BGM
              </h3>
              <iframe
                width="100%"
                height="220"
                src="https://www.youtube.com/embed/7nwzaBOmiYc"
                title="Black Hole BGM"
                frameBorder="0"
                allowFullScreen
                className="rounded-[8px] mb-[15px] border border-[#42D9FF]/30"
              ></iframe>
              <p className="text-[#B8C7D9] text-[15px] leading-[1.8] break-keep">
                우주적 신비로움과 웅장함을 표현하는 음악. 수천만 명이 좌표를
                형성하는 장면의 감정을 완벽하게 담아냅니다.
              </p>
            </div>
            <div className="bg-[#42D9FF]/5 border border-[#42D9FF]/20 p-[35px] rounded-[12px]">
              <h3 className="text-[#42D9FF] font-black mb-[20px] text-[20px]">
                엑소스트라이더 각성 BGM
              </h3>
              <iframe
                width="100%"
                height="220"
                src="https://www.youtube.com/embed/Gp0Jbhu0FWA"
                title="Exostrider Awakening BGM"
                frameBorder="0"
                allowFullScreen
                className="rounded-[8px] mb-[15px] border border-[#42D9FF]/30"
              ></iframe>
              <p className="text-[#B8C7D9] text-[15px] leading-[1.8] break-keep">
                절망에서 희망으로 변하는 감정, 리액터 드라이브 레플리카 삽입으로
                새로운 생명을 얻는 순간의 장대함을 표현합니다.
              </p>
            </div>
          </div>
        </Section>

        {/* Summary Section */}
        <Section id="summary" label="07 · CONCLUSION" title="결론">
          <div className="bg-gradient-to-r from-[#42D9FF]/10 to-[#9A7BFF]/10 border border-[#42D9FF]/40 p-[50px] rounded-[12px] text-center">
            <div className="space-y-[20px] text-[#EAF6FF] leading-[1.9] text-[18px] break-keep max-w-[900px] mx-auto">
              <p>
                명조 3.3 「별바다의 끝에서 닿은 메아리」는 단순한 게임 스토리를
                넘어, 철학적 메시지를 담은 예술 작품입니다.
              </p>
              <p>
                블랙홀 파트에서 보여주는 "세계가 영웅을 구한다"는 주제는, 개인의
                희생이 어떻게 의미 있는 데이터로 변환되고, 그 데이터들이 모여
                길이 되며, 그 길 위에서 영웅이 세계를 구할 수 있게 만드는 과정을
                보여줍니다.
              </p>
              <p>
                감정과 논리, 추상과 구체, 과학과 철학이 완벽하게 결합된 이
                스토리는, 게임 스토리텔링의 새로운 기준을 제시하며, 플레이어에게
                깊은 감동과 함께 오래 남는 인상을 남깁니다.
              </p>
              <div className="border-t border-[#42D9FF]/30 mt-[40px] pt-[30px]">
                <p className="italic text-[#42D9FF] text-[24px] font-black tracking-wide">
                  "모든 노력이 의미를 가지며, 집단의 힘은 불가능을 가능하게
                  만든다."
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-[40px] text-center border-t border-[#42D9FF]/20 bg-[#040914]">
          <p className="text-[#B8C7D9] mb-[10px]">
            명조 3.3 「별바다의 끝에서 닿은 메아리」 스토리 분석
          </p>
          <p className="text-[#B8C7D9]/50 text-[14px]">
            © 2026 Wuthering Waves Story Analysis | 모든 이미지와 음악은
            원작자의 저작권에 따릅니다.
          </p>
        </footer>
      </main>
    </div>
  );
}

import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface StoryStep {
  title: string;
  description: string;
}

export default function StoryFlowSection() {
  const steps: StoryStep[] = [
    {
      title: "블랙홀 진입",
      description: "방랑자가 블랙홀 내부로 진입하며 이야기가 시작됩니다.",
    },
    {
      title: "중심 발견",
      description: "엑소스트라이더의 빛이 절대적인 중심임을 깨닫습니다.",
    },
    {
      title: "경로 기록",
      description: "개인의 경로가 데이터로 기록되기 시작합니다.",
    },
    {
      title: "집단 형성",
      description: "수천만 명의 경로가 모여 구 형태를 이루기 시작합니다.",
    },
    {
      title: "좌표 완성",
      description: "완전한 3차원 구 좌표가 완성되고 우주의 메시지가 됩니다.",
    },
    {
      title: "최종 결전",
      description: "엑소스트라이더가 각성하며 알레프 원과의 결전이 시작됩니다.",
    },
    {
      title: "구원의 순간",
      description: "세계가 영웅을 구하고, 새로운 시작이 열립니다.",
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold font-playfair text-blue-300">
            결전까지의 흐름
          </h2>
          <p className="text-slate-400">명조 3.3의 7가지 주요 단계</p>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="scroll-animate">
              <Card className="bg-slate-800/50 border-accent/20 p-6 hover:border-accent/40 transition-all hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/20 border border-accent">
                      <span className="text-accent font-bold text-sm">{idx + 1}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-accent font-playfair">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-sm mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
              {idx < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowRight className="w-5 h-5 text-accent/50 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import CoordinateFormationStage from "./CoordinateFormationStage";

export default function BlackHoleSection() {
  const stages = [
    {
      number: 1,
      title: "중심점과 개인",
      description: "블랙홀 내에서 엑소스트라이더의 빛은 절대적인 중심(★)이 됩니다. 각 개인은 이 중심을 향해 나아가며, 자신이 걸어간 거리와 각도를 기록합니다. 이것이 좌표의 기초가 됩니다.",
      quote: "중심을 향해 나아가는 각 개인의 경로 = 거리 + 각도 + 주파수",
      imageUrl: "/manus-storage/stage1_center_point_3cf489cc.webp",
      imageAlt: "1단계: 중심점과 개인",
    },
    {
      number: 2,
      title: "경로의 데이터화",
      description: "도중에 실패하거나 사라지더라도, 그들이 걸어간 경로는 사라지지 않습니다. 각자의 이동 궤적이 데이터로 기록되며, 이는 \"주파수\"라는 형태로 저장됩니다. 실패한 시도도 완전한 좌표계를 만드는 데 필수적인 정보가 됩니다.",
      quote: "실패한 경로도 좌표의 일부 = 모든 노력이 의미를 가짐",
      imageUrl: "/manus-storage/stage2_path_data_cd7405c4.webp",
      imageAlt: "2단계: 경로의 데이터화",
      imagePosition: "left" as const,
    },
    {
      number: 3,
      title: "집단 데이터의 축적 - 구 형태의 형성",
      description: "한 명의 기록은 미미하지만, 수백만, 수천만 명의 기록이 모이면 놀라운 일이 일어납니다. 모든 사람이 같은 중심(엑소스트라이더의 빛)을 향해 나아갔기 때문에, 각각의 경로들이 모여 3차원 구(Sphere) 형태를 이룹니다.",
      quote: "구 형태의 좌표 = 수천만 명이 함께 만든 길 = 우주에 보낸 인류의 메시지",
      imageUrl: "/manus-storage/stage3_sphere_formation_2e988217.png",
      imageAlt: "3단계: 구 형태의 형성",
      details: [
        {
          label: "희소한 점들",
          content: "초기 상태 - 개별 경로들이 흩어져 있음",
        },
        {
          label: "촘촘한 구",
          content: "최종 상태 - 수천만 명의 경로가 모여 완전한 구를 형성",
        },
        {
          label: "방사형 구조",
          content: "모든 경로가 중심을 향하므로 자연스럽게 구 형태가 됨",
        },
      ],
    },
    {
      number: 4,
      title: "좌표의 완성과 활용",
      description: "완성된 3차원 구 형태의 좌표는 보이저호의 메시지처럼, 수천만 명의 의지와 희망이 응축된 \"우주의 메시지\"가 됩니다. 이것은 단순한 데이터가 아니라, 모든 사람의 기록을 담은 길이 되어 엑소스트라이더를 결전의 자리까지 인도합니다.",
      quote: "보이저호처럼 우주에 보낸 메시지 = 수천만 명의 기록 = 영웅을 구하는 길",
      imageUrl: "/manus-storage/stage4_voyager_coordinate_2fbb85eb.webp",
      imageAlt: "4단계: 보이저호 같은 좌표",
      imagePosition: "left" as const,
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold font-playfair text-blue-300">
            블랙홀 파트: 좌표 형성의 기하학적 구조
          </h2>
          <p className="text-slate-400">수천만 명의 경로가 만드는 우주의 메시지</p>
        </div>

        {/* YouTube Player */}
        <div className="bg-slate-800/50 border border-accent/20 rounded-lg p-6 scroll-animate">
          <p className="text-sm text-slate-400 mb-4">🎵 블랙홀 파트 BGM</p>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7nwzaBOmiYc"
              title="Black Hole BGM"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Stages */}
        <div className="space-y-8">
          {stages.map((stage) => (
            <CoordinateFormationStage
              key={stage.number}
              stageNumber={stage.number}
              title={stage.title}
              description={stage.description}
              quote={stage.quote}
              imageUrl={stage.imageUrl}
              imageAlt={stage.imageAlt}
              details={stage.details}
              imagePosition={stage.imagePosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

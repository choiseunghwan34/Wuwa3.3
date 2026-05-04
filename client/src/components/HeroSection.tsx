import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onExplore: () => void;
}

export default function HeroSection({ onExplore }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent animate-pulse-slow" />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-4">
        <h1 className="text-6xl md:text-7xl font-bold font-playfair bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-fade-in">
          명조 3.3
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-slate-200 font-playfair animate-fade-in-delay-1">
          별바다의 끝에서 닿은 메아리
        </h2>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto animate-fade-in-delay-2">
          세계가 영웅을 구한다는 이야기
        </p>
        
        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center pt-8 animate-fade-in-delay-3">
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            onClick={onExplore}
          >
            분석 읽기
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-slate-500 text-slate-300 hover:bg-slate-800"
          >
            더 알아보기
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-blue-400" />
      </div>
    </section>
  );
}

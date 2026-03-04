"use client";

import { useState } from "react";

/* ─────────────────────────────────────────────
   Navigation
   ───────────────────────────────────────────── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-black text-gray-900 tracking-tight">
          BUILD FASTER
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">이런 고민?</a>
          <a href="#how" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">진행 방식</a>
          <a href="#result" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">결과물</a>
          <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">가격</a>
          <a
            href="#contact"
            className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            무료 상담 신청
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 flex flex-col gap-4">
          <a href="#problem" className="text-sm font-medium text-gray-600" onClick={() => setMenuOpen(false)}>이런 고민?</a>
          <a href="#how" className="text-sm font-medium text-gray-600" onClick={() => setMenuOpen(false)}>진행 방식</a>
          <a href="#result" className="text-sm font-medium text-gray-600" onClick={() => setMenuOpen(false)}>결과물</a>
          <a href="#pricing" className="text-sm font-medium text-gray-600" onClick={() => setMenuOpen(false)}>가격</a>
          <a
            href="#contact"
            className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            무료 상담 신청
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─────────────────────────────────────────────
   S1. Hero — 고객의 문제에서 시작
   ───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* 캐릭터/프로필 자리 */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gray-900 mx-auto mb-8 flex items-center justify-center">
          <span className="text-white text-2xl sm:text-3xl font-black">YJ</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
          당신의 문제,
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            1주일 안에 해결합니다
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          해결하고 싶은 문제가 있으신가요? 만들고 싶은 서비스가 있으신가요?
          <br className="hidden sm:block" />
          <strong className="text-gray-900">AI와 전문가가 함께</strong> 분석하고, 설계하고, 만듭니다.
          <br className="hidden sm:block" />
          견적서가 아니라, <strong className="text-gray-900">3일 안에 작동하는 데모</strong>를 보여드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
          >
            무료 상담 신청하기
          </a>
          <a
            href="#how"
            className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            어떻게 진행되나요?
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Trust Bar — 신뢰 지표
   ───────────────────────────────────────────── */
function TrustBar() {
  return (
    <section className="py-6 bg-gray-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span><strong className="text-gray-600">AI + 전문가</strong>가 함께 만듭니다</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span><strong className="text-gray-600">4년간</strong> 다수 서비스 구축</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span><strong className="text-gray-600">Microsoft</strong> MOU 체결</span>
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span><strong className="text-gray-600">MILA</strong> AI 연구기관 MOU 체결</span>
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   S2. Pain Points — 고객의 고통 공감
   ───────────────────────────────────────────── */
function PainPoints() {
  const pains = [
    {
      situation: "어디서부터 시작해야 할지 모르겠다",
      detail: "아이디어는 있는데, 개발자를 구해야 하는지, 외주를 줘야 하는지, 직접 배워야 하는지. 검색할수록 더 복잡해집니다.",
      emoji: "1",
    },
    {
      situation: "배우고 만들 시간이 없다",
      detail: "바이브코딩? 커서? 유튜브로 배워볼까 했지만, 본업이 있는 상태에서 기술을 배우고 구조를 잡고 직접 만들 시간은 없습니다.",
      emoji: "2",
    },
    {
      situation: "하다가 막혀서 멈췄다",
      detail: "혼자 반쯤 만들었는데 DB 연동, 결제, 배포에서 막혔습니다. 더 진행하자니 삽질, 포기하자니 아깝고.",
      emoji: "3",
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">혹시 이런 상황인가요?</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            문제는 아는데, 해결 방법을 모르겠다
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            괜찮습니다. 대부분 여기서 시작합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((pain) => (
            <article
              key={pain.emoji}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-bold mb-6">
                {pain.emoji}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                &ldquo;{pain.situation}&rdquo;
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">{pain.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   S3. Funnel — 3단계 퍼널 (부담 없이 시작)
   ───────────────────────────────────────────── */
function Funnel() {
  const steps = [
    {
      step: "STEP 1",
      title: "무료 상담 + 데모",
      price: "무료",
      desc: "30분 온라인 미팅으로 상황을 듣고, 3일 안에 작동하는 데모를 보여드립니다.",
      value: "견적서가 아니라 결과물을 먼저 봅니다",
      highlight: false,
    },
    {
      step: "STEP 2",
      title: "PRD + 실행 플랜",
      price: "10만원",
      desc: "상세 기획서(PRD)와 기술 플랜을 만들어드립니다. 이것만으로도 직접 개발이 가능합니다.",
      value: "가져가서 직접 하셔도 됩니다",
      highlight: false,
    },
    {
      step: "STEP 3",
      title: "풀 서비스 완성",
      price: "150만원~",
      desc: "합의된 범위 내에서 1주일 안에 서비스를 완성하고, 운영 가능한 상태로 배포합니다.",
      value: "운영비 구조 + 확장 가이드 포함",
      highlight: true,
    },
  ];

  return (
    <section id="how" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">진행 방식</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            문제와 만들고 싶은 것을 알려주세요
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            전문가가 직접 분석하고, AI로 빠르게 만듭니다.
            <br className="hidden sm:block" />
            도구가 아니라 <strong className="text-gray-900">사람이 설계</strong>합니다.
          </p>
        </div>

        {/* 흐름 안내 */}
        <div className="flex items-center justify-center gap-3 mb-16 flex-wrap">
          <div className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-full">
            당신의 문제
          </div>
          <span className="text-gray-300 text-lg">→</span>
          <div className="bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full">
            전문가 분석
          </div>
          <span className="text-gray-300 text-lg">→</span>
          <div className="bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full">
            단계별 제공
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <article
              key={s.step}
              className={`relative rounded-2xl p-8 border-2 transition-all ${
                s.highlight
                  ? "border-gray-900 bg-gray-900 text-white shadow-xl"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
              }`}
            >
              <div className={`text-xs font-bold tracking-wider mb-4 ${s.highlight ? "text-gray-400" : "text-blue-600"}`}>
                {s.step}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${s.highlight ? "text-white" : "text-gray-900"}`}>
                {s.title}
              </h3>
              <div className={`text-2xl font-black mb-4 ${s.highlight ? "text-white" : "text-gray-900"}`}>
                {s.price}
              </div>
              <p className={`text-sm mb-6 leading-relaxed ${s.highlight ? "text-gray-300" : "text-gray-500"}`}>
                {s.desc}
              </p>
              <div className={`text-xs font-semibold px-3 py-2 rounded-lg inline-block ${
                s.highlight
                  ? "bg-white/10 text-gray-300"
                  : "bg-blue-50 text-blue-700"
              }`}>
                {s.value}
              </div>

              {/* 화살표 (데스크톱) */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full items-center justify-center text-gray-400 text-sm z-10">
                  →
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20"
          >
            1단계부터 시작하기 (무료)
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   S4. Deliverables — 결과물 미리보기
   ───────────────────────────────────────────── */
function Deliverables() {
  const [activeTab, setActiveTab] = useState<"problem" | "service">("problem");

  return (
    <section id="result" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">결과물</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            어떤 상황이든, 이런 결과물을 받습니다
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            출발점이 달라도, 도착점은 같습니다. 당신의 상황에 맞는 시나리오를 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

        {/* 좌측: 리포트 (3/5) */}
        <div className="lg:col-span-3">

        {/* 탭 전환: 고객 시나리오 */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("problem")}
            className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === "problem"
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
            }`}
          >
            해결하고 싶은 문제가 있어요
          </button>
          <button
            onClick={() => setActiveTab("service")}
            className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === "service"
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
            }`}
          >
            만들고 싶은 서비스가 있어요
          </button>
        </div>

        {/* 시나리오 A: 문제만 갖고 온 고객 */}
        {activeTab === "problem" && (
          <div>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
              {/* 브라우저 탑바 */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 bg-white rounded px-3 py-1 text-xs text-gray-400 flex-1 max-w-xs">
                  report-problem-solving.html
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6 text-sm">
                {/* 1. 고객이 보유한 문제 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 text-xs font-bold flex items-center justify-center">1</span>
                    <h4 className="font-bold text-gray-900">고객이 보유한 문제</h4>
                  </div>
                  <div className="ml-8 space-y-1 text-gray-500">
                    <p>&ldquo;예약 전화를 놓쳐서 매출 손실이 발생하고 있음&rdquo;</p>
                    <p>&ldquo;수기로 예약 관리하다 이중 예약 사고가 자주 남&rdquo;</p>
                    <p>&ldquo;고객이 예약 확인 전화를 또 함 → 업무 부담&rdquo;</p>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* 2. BUILD FASTER 분석 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center">2</span>
                    <h4 className="font-bold text-gray-900">BUILD FASTER가 분석한 해결 방향</h4>
                  </div>
                  <div className="ml-8 space-y-2 text-gray-500">
                    <p><strong className="text-gray-700">핵심 원인:</strong> 예약 채널이 전화뿐 → 24시간 접수 불가 + 수기 관리 한계</p>
                    <p><strong className="text-gray-700">해결 방향:</strong> 온라인 예약 시스템 + 자동 알림 + 관리 대시보드</p>
                    <p><strong className="text-gray-700">기술 선택:</strong> Next.js + Supabase (무료 티어 활용) + 카카오 알림톡 API</p>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* 3. 요구사항 도출 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center">3</span>
                    <h4 className="font-bold text-gray-900">문제에서 도출한 요구사항</h4>
                  </div>
                  <div className="ml-8 space-y-1 text-gray-500">
                    <p className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span> 고객용 온라인 예약 페이지 (모바일 최적화)</p>
                    <p className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span> 예약 확정 시 카카오 알림톡 자동 발송</p>
                    <p className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span> 관리자 대시보드 (예약 현황 + 이중예약 방지)</p>
                    <p className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">○</span> <span className="text-gray-400">결제 연동 (Phase 2 — 추후 확장)</span></p>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* 4. 해결 방법 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs font-bold flex items-center justify-center">4</span>
                    <h4 className="font-bold text-gray-900">해결 방법</h4>
                  </div>
                  <div className="ml-8 text-gray-500 space-y-2">
                    <p>예약 페이지 → 날짜/시간 선택 → DB 저장 → 알림톡 자동 발송</p>
                    <p>관리자 페이지 → 실시간 예약 현황 + 시간대별 중복 체크 + 승인/거절</p>
                    <p className="text-xs text-gray-400">배포: Vercel (자동 배포) · 도메인: 고객 보유 도메인 연결</p>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* 5. 월 운영비 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold flex items-center justify-center">5</span>
                    <h4 className="font-bold text-gray-900">월 운영비</h4>
                  </div>
                  <div className="ml-8 space-y-1 text-gray-500">
                    <p>서버(Vercel): <strong className="text-gray-900">무료</strong></p>
                    <p>DB(Supabase 무료 티어): <strong className="text-gray-900">무료</strong></p>
                    <p>알림톡(건당 8원): <strong className="text-gray-900">월 ~1.6만원</strong></p>
                    <div className="pt-2 mt-2 border-t border-gray-100">
                      <p className="font-bold text-gray-900 text-base">합계: 월 약 1.6만원</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 시나리오 B: 서비스를 만들고 싶은 고객 */}
        {activeTab === "service" && (
          <div>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
              {/* 브라우저 탑바 */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 bg-white rounded px-3 py-1 text-xs text-gray-400 flex-1 max-w-xs">
                  report-service-build.html
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6 text-sm">
                {/* 1. 고객이 원하는 서비스 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center">1</span>
                    <h4 className="font-bold text-gray-900">고객이 원하는 서비스</h4>
                  </div>
                  <div className="ml-8 space-y-1 text-gray-500">
                    <p>&ldquo;온라인으로 수강 신청 받고, 결제까지 되는 클래스 플랫폼을 만들고 싶어요&rdquo;</p>
                    <p>&ldquo;수강생 관리랑 출석 체크도 하고 싶고요&rdquo;</p>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* 2. 요구사항 정리 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 text-xs font-bold flex items-center justify-center">2</span>
                    <h4 className="font-bold text-gray-900">요구사항 정리</h4>
                  </div>
                  <div className="ml-8 space-y-1 text-gray-500">
                    <p className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span> 클래스 목록 + 상세 페이지</p>
                    <p className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span> 온라인 수강 신청 + 결제 (토스페이먼츠)</p>
                    <p className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span> 수강생 관리 대시보드 + 출석 체크</p>
                    <p className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span> 수강 확정 알림톡 발송</p>
                    <p className="flex items-start gap-2"><span className="text-gray-300 mt-0.5">○</span> <span className="text-gray-400">VOD 스트리밍 (Phase 2 — 추후 확장)</span></p>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* 3. 기술 분석 + 설계 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs font-bold flex items-center justify-center">3</span>
                    <h4 className="font-bold text-gray-900">기술 분석 + 설계</h4>
                  </div>
                  <div className="ml-8 space-y-2 text-gray-500">
                    <p><strong className="text-gray-700">프론트엔드:</strong> Next.js (반응형, 모바일 최적화)</p>
                    <p><strong className="text-gray-700">백엔드/DB:</strong> Supabase (인증 + DB + Storage)</p>
                    <p><strong className="text-gray-700">결제:</strong> 토스페이먼츠 (카드/계좌이체/간편결제)</p>
                    <p><strong className="text-gray-700">알림:</strong> 카카오 알림톡 API</p>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* 4. 구현 결과 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs font-bold flex items-center justify-center">4</span>
                    <h4 className="font-bold text-gray-900">구현 결과</h4>
                  </div>
                  <div className="ml-8 text-gray-500 space-y-2">
                    <p>수강생: 클래스 탐색 → 신청 → 결제 → 확정 알림톡 수신</p>
                    <p>관리자: 클래스 등록/수정 → 수강생 목록 → 출석 체크 → 매출 리포트</p>
                    <p className="text-xs text-gray-400">배포: Vercel · 도메인: 고객 보유 도메인 · 코드 100% 인수인계</p>
                  </div>
                </div>

                <hr className="border-gray-100" />

                {/* 5. 월 운영비 */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold flex items-center justify-center">5</span>
                    <h4 className="font-bold text-gray-900">월 운영비</h4>
                  </div>
                  <div className="ml-8 space-y-1 text-gray-500">
                    <p>서버(Vercel): <strong className="text-gray-900">무료</strong></p>
                    <p>DB(Supabase 무료 티어): <strong className="text-gray-900">무료</strong></p>
                    <p>결제 수수료(토스): <strong className="text-gray-900">건당 2.8%</strong></p>
                    <p>알림톡(건당 8원): <strong className="text-gray-900">월 ~8,000원</strong></p>
                    <div className="pt-2 mt-2 border-t border-gray-100">
                      <p className="font-bold text-gray-900 text-base">합계: 월 약 0.8만원 + 결제 수수료</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        </div>{/* /좌측 끝 */}

        {/* 우측: 포함 항목 (2/5) */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2">모든 프로젝트에 포함</h3>
          {[
            {
              title: "완성된 서비스",
              desc: "작동하는 웹/앱. 실제 도메인에 배포된 상태로 전달.",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              title: "프로젝트 리포트",
              desc: "문제 분석 → 해결 방법 → 운영비 → 확장 가이드를 담은 HTML 문서.",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              ),
            },
            {
              title: "소스 코드 100% 인수인계",
              desc: "코드 전체를 넘겨드립니다. 종속 없이 자유롭게 수정 가능.",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              ),
            },
            {
              title: "운영비 구조 설계",
              desc: "무료 티어 최대 활용. 월 0원~3만원 운영 가능.",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              title: "확장 로드맵",
              desc: "다음에 뭘 붙일지, 비용은 얼마나 드는지까지.",
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-200 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-0.5">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        </div>{/* /grid 끝 */}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   S4.5. Demo Samples — 실제 데모 샘플
   ───────────────────────────────────────────── */
function DemoSamples() {
  const demos = [
    {
      title: "매장 예약 시스템",
      problem: "전화로만 예약 받느라 놓치는 고객이 많았음",
      solution: "온라인 예약 + 카카오 알림톡 자동 발송",
      tech: "Next.js · Supabase · 알림톡 API",
      duration: "5일 완성",
      href: "",
    },
    {
      title: "스타트업 고객 관리 대시보드",
      problem: "엑셀로 고객 관리하다 한계에 부딪힘",
      solution: "실시간 대시보드 + 자동 리포트 생성",
      tech: "Next.js · Supabase · Chart.js",
      duration: "6일 완성",
      href: "",
    },
    {
      title: "온라인 클래스 플랫폼",
      problem: "수강생 관리와 결제를 수작업으로 처리",
      solution: "수강 신청 + 결제 + 수강생 관리 자동화",
      tech: "Next.js · Supabase · 토스페이먼츠",
      duration: "7일 완성",
      href: "",
    },
    {
      title: "AI 웹소설 어시스턴트",
      problem: "AI가 스토리 맥락을 기억 못해 검증에 더 많은 시간 소요",
      solution: "세계관 구조 분리 + 환각 추적 시스템 구축",
      tech: "Claude AI · 마크다운 · 프로젝트 구조화",
      duration: "3일 완성",
      href: "/cases/ai-webnovel",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">데모 샘플</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            실제로 이런 결과물을 받습니다
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            말로만 하지 않습니다. 실제 고객에게 전달된 데모 샘플입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo) => {
            const Wrapper = demo.href ? "a" : "div";
            const wrapperProps = demo.href ? { href: demo.href } : {};
            return (
              <Wrapper
                key={demo.title}
                {...wrapperProps}
                className={`bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all group flex flex-col ${demo.href ? "cursor-pointer" : ""}`}
              >
                {/* 스크린샷 영역 */}
                <div className="aspect-video bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 p-4">
                    <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs">스크린샷 준비중</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{demo.title}</h3>

                  <div className="space-y-3 mb-4 flex-1">
                    <div>
                      <div className="text-xs font-semibold text-red-500 mb-0.5">문제</div>
                      <p className="text-sm text-gray-500">{demo.problem}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-green-600 mb-0.5">해결</div>
                      <p className="text-sm text-gray-500">{demo.solution}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100 mt-auto">
                    <span>{demo.tech}</span>
                    <span className="font-semibold text-blue-600">{demo.duration}</span>
                  </div>

                  {demo.href && (
                    <div className="mt-3 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                      자세히 보기 →
                    </div>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   S5. Cost Transparency — 운영비 투명성
   ───────────────────────────────────────────── */
function CostTransparency() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">운영비 투명성</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            만든 다음, 매달 얼마 들까?
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            아무리 좋은 서비스를 만들어도, 유지비가 비싸면 의미 없습니다.
            <br className="hidden sm:block" />
            고객 상황에 맞춰 <strong className="text-gray-900">최적의 운영 비용 구조</strong>로 설계합니다.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left px-6 py-4 font-semibold text-gray-500 text-xs uppercase tracking-wide">항목</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-500 text-xs uppercase tracking-wide">일반 외주</th>
                <th className="text-left px-6 py-4 font-semibold text-gray-500 text-xs uppercase tracking-wide bg-blue-50">BUILD FASTER</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-gray-900 font-medium">서버 호스팅</td>
                <td className="px-6 py-4 text-gray-500">월 5~30만원</td>
                <td className="px-6 py-4 font-semibold text-green-600 bg-blue-50/50">무료 (Vercel/Cloudflare)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 font-medium">데이터베이스</td>
                <td className="px-6 py-4 text-gray-500">월 3~10만원</td>
                <td className="px-6 py-4 font-semibold text-green-600 bg-blue-50/50">무료 티어 활용</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 font-medium">유지보수 인건비</td>
                <td className="px-6 py-4 text-gray-500">월 30~100만원</td>
                <td className="px-6 py-4 font-semibold text-gray-900 bg-blue-50/50">코드 인수인계 (자유 수정)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-900 font-medium">월 예상 합계</td>
                <td className="px-6 py-4 text-red-500 font-bold">38~140만원</td>
                <td className="px-6 py-4 font-black text-green-600 text-lg bg-blue-50/50">고객 맞춤 최적화</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-gray-400 mt-4">
          * 프로젝트 규모와 상황에 따라 최적의 구조가 다릅니다. 상세 운영비는 프로젝트 리포트에 포함됩니다.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   S6. Testimonials — 고객 후기 (3유형)
   ───────────────────────────────────────────── */
function Testimonials() {
  const reviews = [
    {
      type: "문제는 아는데 어떻게 할지 몰랐던",
      tag: "매장 예약 시스템",
      name: "김OO",
      role: "카페 운영",
      quote:
        "매장 예약 시스템이 필요한 건 알았는데, 개발자를 어디서 구하는지부터 막막했어요. 미팅 한 번에 3일 만에 돌아가는 데모를 보여줬을 때 소름 돋았습니다.",
    },
    {
      type: "배울 시간이 없었던",
      tag: "고객 관리 대시보드",
      name: "박OO",
      role: "스타트업 대표",
      quote:
        "바이브코딩 해보려고 유튜브도 봤는데, 배우고 구조 잡고 직접 만들 시간이 없었어요. 본업이 있으니까. 여기는 내가 설명만 하면 됩니다. 그것도 30분이면 끝.",
    },
    {
      type: "구조를 바꾸고 스스로 성장한",
      tag: "AI 글쓰기 환경 구축",
      name: "김OO",
      role: "웹소설 작가",
      quote:
        "AI가 자꾸 주인공 과거를 새로 만들어서 내용 검증하는 데 시간이 더 걸렸어요. 구조 바꾸고 나서 지금은 혼자 계속 고도화하고 있습니다.",
    },
    {
      type: "하다가 막혀서 온",
      tag: "커머스 앱",
      name: "이OO",
      role: "1인 기업",
      quote:
        "혼자 커서로 반쯤 만들었는데 DB 연동에서 완전 막혔어요. 여기서 이어받아서 3일 만에 끝내줬습니다. 운영비가 월 만원도 안 든다는 게 제일 좋았어요.",
    },
  ];

  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const [page, setPage] = useState(0);

  const visibleReviews = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">고객 이야기</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            비슷한 상황에서 시작했습니다
          </h2>
        </div>

        {/* 카드 3개 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {visibleReviews.map((r, i) => (
            <article key={`${r.name}-${page}-${i}`} className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col h-full">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs font-bold text-blue-600 px-3 py-1 bg-blue-50 rounded-full">
                  {r.type}
                </span>
                <span className="text-xs font-bold text-gray-500 px-3 py-1 bg-gray-100 rounded-full">
                  {r.tag}
                </span>
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6 flex-1 min-h-[100px]">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-400 shrink-0">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{r.name}</div>
                  <div className="text-xs text-gray-400">{r.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 슬라이드 네비게이션 */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="이전"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    page === idx ? "bg-gray-900" : "bg-gray-300"
                  }`}
                  aria-label={`${idx + 1}페이지`}
                />
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="다음"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   S7. Pricing — 심플한 가격
   ───────────────────────────────────────────── */
function Pricing() {
  const plans = [
    {
      name: "컨설팅",
      price: "10만원",
      period: "1~2일",
      features: [
        "요구사항 분석 및 방향성 제공",
        "개발하다 막힌 부분 체크",
        "앱/웹 배포 지원",
        "기술 스택 추천",
        "PRD + 실행 플랜 문서 제공",
      ],
      highlighted: false,
      tag: "",
    },
    {
      name: "웹 MVP",
      price: "150만원",
      period: "1주 완성",
      features: [
        "반응형 웹 애플리케이션",
        "핵심 기능 구현",
        "3일 내 데모 제공",
        "배포 + 도메인 연결",
        "1회 피드백 반영",
        "프로젝트 리포트 포함",
      ],
      highlighted: false,
      tag: "",
    },
    {
      name: "앱 MVP",
      price: "200만원",
      period: "1주 완성",
      features: [
        "iOS / Android 앱",
        "핵심 기능 구현",
        "3일 내 데모 제공",
        "스토어 배포 지원",
        "1회 피드백 반영",
        "프로젝트 리포트 포함",
      ],
      highlighted: true,
      tag: "인기",
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">가격</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">고정 가격. 추가 비용 없음.</h2>
          <p className="text-lg text-gray-500">복잡한 견적 과정 없이, 가격이 곧 신뢰입니다.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-10 border-2 transition-all flex flex-col ${
                plan.highlighted
                  ? "border-gray-900 bg-gray-900 text-white shadow-xl"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
              }`}
            >
              {plan.tag && (
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-5">{plan.tag}</div>
              )}
              <h3 className={`text-2xl font-bold mb-3 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className={`text-5xl font-black ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
              </div>
              <p className={`text-sm mb-10 ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                {plan.period}
              </p>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-start gap-3 text-base ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                    <svg className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlighted ? "text-green-400" : "text-green-500"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-4 rounded-xl text-lg font-semibold transition-colors mt-auto ${
                  plan.highlighted
                    ? "bg-white text-gray-900 hover:bg-gray-100"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                시작하기
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          * STEP 1(무료 상담)부터 시작해도 됩니다. 가격표는 STEP 3 기준입니다.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   S8. FAQ — AEO 최적화
   ───────────────────────────────────────────── */
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "아이디어만 있어도 의뢰할 수 있나요?",
      a: "네. 아이디어 단계, 기획서가 있는 단계, 직접 만들다 막힌 단계 모두 가능합니다. 무료 상담에서 현재 상황에 맞는 진행 방법을 안내드립니다.",
    },
    {
      q: "정말 1주일 만에 완성이 가능한가요?",
      a: "핵심 기능에 집중하는 MVP 방식으로 진행합니다. 미팅에서 범위를 함께 조율하고, 불필요한 것은 과감히 빼서 1주일 안에 작동하는 서비스를 만듭니다.",
    },
    {
      q: "만든 후 운영비는 얼마나 드나요?",
      a: "무료 티어를 최대한 활용하여 월 0원~3만원 수준으로 운영 가능하게 설계합니다. 정확한 비용 구조는 프로젝트 리포트에 상세히 포함됩니다.",
    },
    {
      q: "추가 비용이 발생할 수 있나요?",
      a: "미팅에서 합의한 범위 안에서는 추가 비용이 없습니다. 범위를 벗어나는 요구사항이 있으면 사전에 별도 안내드립니다.",
    },
    {
      q: "완성 후 수정이나 확장은 어떻게 하나요?",
      a: "코드와 배포 환경을 100% 인수인계합니다. 직접 수정하셔도 되고, 추가 개발이 필요하면 별도 상담을 통해 진행합니다. 확장 가이드가 프로젝트 리포트에 포함됩니다.",
    },
    {
      q: "STEP 2(PRD + 플랜)만 받아도 되나요?",
      a: "네. STEP 2는 독립적인 결과물입니다. PRD와 실행 플랜을 받아서 직접 개발하셔도 되고, 다른 개발팀에 전달하셔도 됩니다.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">자주 묻는 질문</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">궁금한 점이 있으신가요?</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && <div className="px-5 pb-5 text-gray-500 leading-relaxed">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   S8.5. Process System — 프로세스 시스템 레이아웃
   ───────────────────────────────────────────── */
function ProcessSystem() {
  const steps = [
    {
      num: "01",
      title: "프로젝트 의뢰",
      desc: "상담 폼 작성 또는 온라인 미팅. 문제와 원하는 것을 알려주세요.",
      status: "고객",
    },
    {
      num: "02",
      title: "분석 + 견적",
      desc: "문제 분석 후 범위·기간·비용을 투명하게 산출합니다.",
      status: "BUILD FASTER",
    },
    {
      num: "03",
      title: "계약 + 착수",
      desc: "온라인 전자계약. 분할 결제 가능. 합의된 범위로 개발 시작.",
      status: "양측 합의",
    },
    {
      num: "04",
      title: "개발 + 공유",
      desc: "실시간 진행 상황 공유. 데모 확인 후 피드백 반영.",
      status: "BUILD FASTER",
    },
    {
      num: "05",
      title: "납품 + 리포트",
      desc: "완성된 서비스 + 프로젝트 리포트 + 코드 인수인계.",
      status: "완료",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-3">프로세스</p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            의뢰부터 납품까지, 100% 온라인
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            모든 과정이 투명하게 공유됩니다. 진행 상황을 직접 확인하세요.
          </p>
        </div>

        {/* 프로세스 타임라인 */}
        <div className="relative">
          {/* 연결선 (데스크톱) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="relative text-center">
                {/* 넘버 원 */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center text-lg font-black mx-auto mb-4">
                  {s.num}
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{s.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">{s.desc}</p>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  s.status === "고객" ? "bg-blue-50 text-blue-600" :
                  s.status === "BUILD FASTER" ? "bg-gray-100 text-gray-600" :
                  s.status === "양측 합의" ? "bg-indigo-50 text-indigo-600" :
                  "bg-green-50 text-green-600"
                }`}>
                  {s.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 시스템 미리보기 (Coming Soon) */}
        <div className="mt-16 bg-gray-50 rounded-2xl border border-gray-200 p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">고객 대시보드</h3>
          </div>
          <p className="text-sm text-gray-500 mb-6 max-w-lg mx-auto">
            프로젝트 진행 상황, 마일스톤, 피드백, 결제 내역을 한 곳에서 확인할 수 있는 고객 전용 대시보드를 준비 중입니다.
          </p>
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-500">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   S9. Contact / CTA
   ───────────────────────────────────────────── */
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    situation: "",
    note: "",
  });

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            무료 상담 신청
          </h2>
          <p className="text-lg text-gray-500">
            30분 미팅 후, 3일 안에 작동하는 데모를 보여드립니다.
            <br className="hidden sm:block" />
            비용은 없습니다. 부담 없이 신청하세요.
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">이름</label>
              <input
                type="text"
                placeholder="홍길동"
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">연락처 (전화 또는 이메일)</label>
              <input
                type="text"
                placeholder="010-0000-0000 또는 email@example.com"
                value={formData.contact}
                onChange={(e) => setFormData((prev) => ({ ...prev, contact: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">현재 상황</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {["아이디어 단계", "기획서 있음", "만들다 막힘"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, situation: option }))}
                    className={`p-3 rounded-xl border-2 text-sm text-center font-medium transition-all ${
                      formData.situation === option
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                어떤 서비스를 만들고 싶으세요? <span className="text-gray-400 font-normal">(선택)</span>
              </label>
              <textarea
                rows={3}
                placeholder="간단하게 적어주세요. 미팅에서 자세히 이야기 나눕니다."
                value={formData.note}
                onChange={(e) => setFormData((prev) => ({ ...prev, note: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 resize-none"
              />
            </div>

            <button className="w-full bg-gray-900 text-white py-4 rounded-xl text-lg font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20 mt-2">
              무료 상담 신청하기
            </button>
            <p className="text-center text-xs text-gray-400">30분 미팅 · 비용 없음 · 데모 무료 제공</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Footer
   ───────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-white font-black text-lg">BUILD FASTER</div>
          <div className="text-sm">문의: contact@buildfaster.kr</div>
          <div className="text-sm">&copy; 2026 BUILD FASTER. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <PainPoints />
      <Funnel />
      <ProcessSystem />
      <Deliverables />
      <DemoSamples />
      <CostTransparency />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

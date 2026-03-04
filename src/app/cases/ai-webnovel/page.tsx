import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI 웹소설 어시스턴트 구축 사례 | BUILD FASTER",
  description:
    "AI 글쓰기 봇의 환각현상을 구조화로 65% 줄인 사례. 세계관 분리, 프롬프트 체이닝, 환각 추적 시스템까지.",
  openGraph: {
    title: "AI 웹소설 어시스턴트 구축 사례 | BUILD FASTER",
    description:
      "AI 글쓰기 봇의 환각현상을 구조화로 65% 줄인 사례.",
    type: "article",
    locale: "ko_KR",
    siteName: "BUILD FASTER",
  },
};

export default function AIWebnovelCase() {
  return (
    <main className="bg-white min-h-screen">
      {/* ─── 네비게이션 ─── */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-extrabold text-gray-900 tracking-tight">
            BUILD FASTER
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            무료 상담 예약 →
          </Link>
        </div>
      </nav>

      {/* ─── S1. 헤더 ─── */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
              AI 글쓰기 환경 구축
            </span>
            <span className="text-sm text-gray-400">3일 완성</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
            AI가 내 소설 세계관을
            <br />
            기억하게 만들었습니다
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            웹소설 작가 김OO님은 AI를 글쓰기에 활용하고 있었지만,
            세계관과 캐릭터를 반복 설명해야 했고, AI가 만들어낸 사실과 다른 내용을 검증하는 데
            집필보다 더 많은 시간이 걸렸습니다.
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>고객: 웹소설 작가</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span>도구: Claude AI · 마크다운 · 프로젝트 구조화</span>
          </div>
        </div>
      </section>

      {/* ─── S2. 고객의 문제 ─── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-red-500 tracking-wide uppercase mb-3">문제</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8">
            &quot;AI가 내 캐릭터 이름도 기억 못해요&quot;
          </h2>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-500 text-lg">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">세계관 망각</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    대화가 길어지면 AI가 초반에 설정한 세계관, 캐릭터 관계, 핵심 규칙을 잊어버림.
                    매번 &quot;이 세계는 마법이 금지된 세계야&quot;부터 다시 설명해야 했습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-500 text-lg">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">환각(Hallucination)</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    AI가 설정에 없는 캐릭터를 만들어내거나, 이미 죽은 캐릭터를 등장시키거나,
                    세계관 규칙에 어긋나는 전개를 자연스럽게 써버림.
                    사실 확인에 집필 시간의 2배가 소요되었습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <span className="text-red-500 text-lg">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">연속성 부족</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    이전 회차에서 복선으로 깔아둔 내용을 AI가 인식하지 못해,
                    스토리 연속성이 끊김. 작가가 모든 복선을 직접 관리해야 했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── S3. 원인 분석 ─── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-yellow-600 tracking-wide uppercase mb-3">원인 분석</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
            Lost In the Middle 현상
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            대규모 언어 모델(LLM)은 입력의 <strong className="text-gray-900">처음과 끝은 잘 기억</strong>하지만,
            <strong className="text-gray-900">중간에 있는 정보는 놓치는</strong> 특성이 있습니다.
            세계관 설정이 대화 중간에 묻히면 AI가 이를 &quot;잊어버린 것처럼&quot; 행동합니다.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-6 text-center">AI 기억력 패턴</h3>
            <div className="flex gap-6 items-stretch">
              {/* 좌측: PDF 목업 */}
              <div className="flex-1 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                {/* PDF 탑바 */}
                <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-gray-400">worldbuilding-doc.pdf</span>
                </div>
                {/* 문서 내용 — 세로 3구간 */}
                <div className="p-5 space-y-0">
                  {/* 문서 시작 — 잘 기억 */}
                  <div className="border-l-4 border-blue-400 bg-blue-50/50 px-4 py-3 rounded-r-lg">
                    <div className="text-xs font-bold text-blue-600 mb-1">문서 시작</div>
                    <div className="space-y-1.5">
                      <div className="h-2 bg-blue-200 rounded w-full" />
                      <div className="h-2 bg-blue-200 rounded w-4/5" />
                      <div className="h-2 bg-blue-200 rounded w-11/12" />
                    </div>
                    <div className="text-xs text-blue-500 mt-2 font-medium">기억률 85~90%</div>
                  </div>

                  {/* 문서 중간 — 정보 손실 */}
                  <div className="border-l-4 border-red-400 bg-red-50/50 px-4 py-5 rounded-r-lg my-1">
                    <div className="text-xs font-bold text-red-500 mb-1">문서 중간</div>
                    <div className="space-y-1.5">
                      <div className="h-2 bg-red-200 rounded w-full opacity-60" />
                      <div className="h-2 bg-red-200 rounded w-3/4 opacity-40" />
                      <div className="h-2 bg-red-100 rounded w-5/6 opacity-30" />
                      <div className="h-2 bg-red-100 rounded w-2/3 opacity-20" />
                      <div className="h-2 bg-red-200 rounded w-4/5 opacity-30" />
                    </div>
                    <div className="text-xs text-red-500 mt-2 font-medium">기억률 20~30% — 정보 손실 구간</div>
                  </div>

                  {/* 문서 끝 — 잘 기억 */}
                  <div className="border-l-4 border-blue-400 bg-blue-50/50 px-4 py-3 rounded-r-lg">
                    <div className="text-xs font-bold text-blue-600 mb-1">문서 끝</div>
                    <div className="space-y-1.5">
                      <div className="h-2 bg-blue-200 rounded w-11/12" />
                      <div className="h-2 bg-blue-200 rounded w-full" />
                      <div className="h-2 bg-blue-200 rounded w-4/5" />
                    </div>
                    <div className="text-xs text-blue-500 mt-2 font-medium">기억률 75~90%</div>
                  </div>
                </div>
              </div>

              {/* 우측: 설명 */}
              <div className="flex-1 flex flex-col justify-between py-2">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="text-xs font-bold text-blue-600 mb-1">처음</div>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    AI가 가장 잘 기억하는 구간. 세계관 기본 설정, 주인공 이름 등은 여기에 넣으면 유지됨.
                  </p>
                </div>
                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <div className="text-xs font-bold text-red-500 mb-1">중간 — Lost In the Middle</div>
                  <p className="text-xs text-red-600 leading-relaxed">
                    세계관 규칙, 캐릭터 관계, 복선 등이 여기에 묻히면 AI가 &quot;잊어버린 것처럼&quot; 행동.
                    환각(Hallucination)의 주요 원인.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="text-xs font-bold text-blue-600 mb-1">끝</div>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    최근 대화 내용. AI가 잘 기억하지만, 과거 설정과 충돌하는 내용을 만들어내기도 함.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>핵심 인사이트:</strong> 문제는 AI의 성능이 아니라,
              정보를 전달하는 <strong>구조</strong>에 있었습니다.
              세계관을 대화에 섞지 말고, 별도 참조 문서로 분리하면 AI가 매번 정확히 참조할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ─── S4. 해결 구조 ─── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-green-600 tracking-wide uppercase mb-3">해결 방법</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
            세계관 구조 분리 + 프롬프트 체이닝
          </h2>
          <p className="text-gray-500 mb-12 leading-relaxed">
            하나의 긴 대화 대신, 세계관 정보를 <strong className="text-gray-900">독립된 참조 문서</strong>로 분리하고,
            AI가 <strong className="text-gray-900">매 응답 시 해당 문서를 참조</strong>하도록 구조를 설계했습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">1. 세계관 분리</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                세계관, 캐릭터, 규칙, 복선을 각각 독립 문서(마크다운)로 정리.
                AI가 대화와 설정을 혼동하지 않도록 물리적으로 분리.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">2. 프롬프트 체이닝</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                글쓰기 요청 시 세계관 문서를 자동 첨부하는 프롬프트 템플릿 구축.
                작가가 매번 설정을 붙여넣지 않아도 AI가 참조.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">3. 검증 체크리스트</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                AI 응답마다 세계관 위반 여부를 자동 체크하는 검증 프롬프트.
                캐릭터 생사, 설정 일관성, 복선 연결을 자동 점검.
              </p>
            </div>
          </div>

          {/* 구조 다이어그램 */}
          <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8">
            <h3 className="font-bold text-gray-900 mb-6 text-center text-sm">프로젝트 구조</h3>
            <div className="font-mono text-sm text-gray-600 bg-gray-50 rounded-xl p-6 overflow-x-auto">
              <pre className="leading-relaxed">{`📁 웹소설 프로젝트/
├── 📄 세계관.md          ← 세계 규칙, 마법 체계, 지리
├── 📄 캐릭터.md          ← 이름, 관계도, 생사 상태
├── 📄 복선-트래커.md     ← 깔아둔 복선 목록 + 회수 여부
├── 📄 타임라인.md        ← 사건 순서, 시간대
├── 📄 글쓰기-프롬프트.md  ← AI에게 보내는 요청 템플릿
└── 📄 검증-체크리스트.md  ← 환각 검증 항목`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* ─── S5. 환각 추적 시스템 ─── */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-purple-600 tracking-wide uppercase mb-3">환각 추적</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
            AI가 틀린 걸 스스로 찾아냅니다
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            AI 응답 후 자동으로 실행되는 검증 프롬프트가
            세계관 위반, 캐릭터 오류, 설정 불일치를 잡아냅니다.
          </p>

          <div className="space-y-4">
            {/* 환각 추적 예시 */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-red-50 px-6 py-3 border-b border-red-100 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full" />
                <span className="text-sm font-bold text-red-700">환각 감지</span>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-semibold text-gray-900">AI 출력:</span>{" "}
                  &quot;리안이 화염 마법으로 적을 물리쳤다&quot;
                </p>
                <p className="text-sm text-red-600 bg-red-50 rounded-lg p-3">
                  <span className="font-bold">⚠️ 위반:</span> 세계관.md 3항 — &quot;이 세계에서 화염 마법은
                  왕족만 사용 가능&quot;. 리안은 평민 출신. 수정 필요.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-yellow-50 px-6 py-3 border-b border-yellow-100 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="text-sm font-bold text-yellow-700">경고</span>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-semibold text-gray-900">AI 출력:</span>{" "}
                  &quot;카엘이 술집에서 정보를 수집했다&quot;
                </p>
                <p className="text-sm text-yellow-700 bg-yellow-50 rounded-lg p-3">
                  <span className="font-bold">⚠️ 주의:</span> 캐릭터.md — 카엘은 12화에서 부상으로 입원 중.
                  현재 시점에서 활동 가능한지 타임라인 확인 필요.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-green-50 px-6 py-3 border-b border-green-100 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-bold text-green-700">통과</span>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">AI 출력:</span>{" "}
                  &quot;엘라가 금지된 서고에서 고대 문서를 발견했다&quot;
                </p>
                <p className="text-sm text-green-600 mt-3">
                  ✅ 세계관 일치 · ✅ 캐릭터 상태 정상 · ✅ 복선 &quot;고대 문서&quot; (7화) 회수
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── S6. 결과 ─── */}
      <section className="py-16 sm:py-20 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-blue-400 tracking-wide uppercase mb-3">결과</p>
          <h2 className="text-2xl sm:text-3xl font-black mb-12">
            구조가 바뀌니, 결과가 달라졌습니다
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-4xl font-black text-blue-400 mb-2">65%</div>
              <div className="text-sm text-gray-300 font-semibold mb-1">환각 감소</div>
              <p className="text-xs text-gray-500">
                세계관 분리 + 검증 체크리스트 도입 후
                AI의 설정 위반 응답이 65% 감소
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-4xl font-black text-green-400 mb-2">v10</div>
              <div className="text-sm text-gray-300 font-semibold mb-1">지속 고도화</div>
              <p className="text-xs text-gray-500">
                현재 v10까지 프롬프트 고도화 진행 중.
                고객이 직접 구조를 발전시키고 있음
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-4xl font-black text-purple-400 mb-2">2x</div>
              <div className="text-sm text-gray-300 font-semibold mb-1">집필 속도</div>
              <p className="text-xs text-gray-500">
                검증 시간이 줄어 같은 시간에
                2배 분량의 초고 작성 가능
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="text-4xl font-black text-yellow-400 mb-2">₩0</div>
              <div className="text-sm text-gray-300 font-semibold mb-1">월 운영비</div>
              <p className="text-xs text-gray-500">
                Claude 무료 티어 + 마크다운 파일 기반.
                별도 서버나 구독 비용 없음
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <blockquote className="text-gray-300 leading-relaxed mb-4">
              &quot;예전에는 AI한테 매번 설정을 알려줘야 했는데,
              지금은 혼자 알아서 세계관을 지켜요. 내용 검증하는 데 쓰던 시간을
              이제 스토리 구상에 쓸 수 있게 됐어요.&quot;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold text-gray-400">
                김
              </div>
              <div>
                <div className="text-sm font-semibold text-white">김OO</div>
                <div className="text-xs text-gray-500">웹소설 작가</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── S7. CTA ─── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
            비슷한 문제를 겪고 계신가요?
          </h2>
          <p className="text-lg text-gray-500 mb-8 leading-relaxed">
            AI 활용, 업무 자동화, 서비스 개발 — 어떤 문제든 좋습니다.
            <br className="hidden sm:block" />
            무료 상담에서 해결 방법을 함께 찾아보겠습니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-xl hover:bg-blue-700 transition-colors"
            >
              무료 상담 예약하기
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-700 text-base font-bold rounded-xl hover:bg-gray-200 transition-colors"
            >
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 푸터 ─── */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          © 2025 BUILD FASTER. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

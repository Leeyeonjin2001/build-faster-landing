import type { Metadata } from "next";
import "./globals.css";
import DevTools from "@/components/DevTools";

export const metadata: Metadata = {
  title: "BUILD FASTER — 당신의 문제를 1주일 안에 해결합니다",
  description:
    "아이디어는 있지만 어디서부터 시작할지 모르겠나요? 무료 상담 한 번이면 3일 안에 작동하는 데모를 보여드립니다. MVP 개발, 앱 외주, 웹 서비스 제작.",
  keywords: [
    "MVP 개발",
    "앱 외주",
    "웹 외주",
    "서비스 개발",
    "빠른 개발",
    "MVP 외주 개발",
    "앱 만들기",
    "웹 서비스 제작",
    "스타트업 MVP",
    "바이브코딩",
  ],
  openGraph: {
    title: "BUILD FASTER — 당신의 문제를 1주일 안에 해결합니다",
    description:
      "무료 상담 한 번이면 3일 안에 작동하는 데모를 보여드립니다. 견적서가 아니라 결과물로 시작하세요.",
    type: "website",
    locale: "ko_KR",
    siteName: "BUILD FASTER",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUILD FASTER — 당신의 문제를 1주일 안에 해결합니다",
    description:
      "무료 상담 한 번이면 3일 안에 작동하는 데모를 보여드립니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://buildfaster.kr",
  },
};

// JSON-LD 구조화 데이터 (AEO — AI 검색엔진 최적화)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "BUILD FASTER",
      url: "https://buildfaster.kr",
      description:
        "아이디어를 1주일 안에 작동하는 서비스로 만들어드립니다. MVP 개발 전문.",
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "contact@buildfaster.kr",
        availableLanguage: "Korean",
      },
    },
    {
      "@type": "Service",
      name: "MVP 개발 서비스",
      provider: { "@type": "Organization", name: "BUILD FASTER" },
      description:
        "고객의 문제를 분석하고, 1주일 안에 작동하는 MVP를 만들어 배포까지 완료합니다. 무료 상담, PRD 플랜, 풀 서비스 3단계로 운영됩니다.",
      serviceType: "Software Development",
      areaServed: "KR",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "MVP 개발 패키지",
        itemListElement: [
          {
            "@type": "Offer",
            name: "웹 MVP",
            price: "1500000",
            priceCurrency: "KRW",
            description:
              "반응형 웹 애플리케이션 MVP. 핵심 기능 구현, 3일 내 데모, 배포 포함.",
          },
          {
            "@type": "Offer",
            name: "앱 MVP",
            price: "2000000",
            priceCurrency: "KRW",
            description:
              "iOS/Android 앱 MVP. 핵심 기능 구현, 3일 내 데모, 스토어 배포 지원.",
          },
        ],
      },
    },
    {
      "@type": "HowTo",
      name: "BUILD FASTER MVP 개발 프로세스",
      description:
        "무료 상담부터 서비스 완성까지, 3단계로 진행됩니다.",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "무료 상담 + 데모",
          text: "30분 온라인 미팅 후 3일 안에 작동하는 데모를 무료로 보여드립니다.",
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "PRD + 실행 플랜",
          text: "10만원으로 상세 기획서(PRD)와 실행 플랜을 받습니다. 이것만으로도 직접 개발 가능합니다.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "풀 서비스 개발",
          text: "합의된 범위 내에서 1주일 안에 서비스를 완성하고 배포합니다. 운영비 구조까지 포함.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "MVP 개발 비용이 얼마인가요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "웹 MVP는 150만원, 앱 MVP는 200만원입니다. 고정 가격이며 추가 비용이 없습니다. 미팅에서 합의한 범위 내에서 진행됩니다.",
          },
        },
        {
          "@type": "Question",
          name: "정말 1주일 만에 서비스를 만들 수 있나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "네. 핵심 기능에 집중하는 MVP 방식으로 진행합니다. 미팅에서 범위를 함께 조율하고, 불필요한 것은 과감히 빼서 1주일 안에 작동하는 서비스를 만듭니다.",
          },
        },
        {
          "@type": "Question",
          name: "만든 후 운영비는 얼마나 드나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "무료 티어를 최대한 활용하여 월 0원~3만원 수준으로 운영 가능하게 설계합니다. 운영비 구조는 프로젝트 리포트에 상세히 포함됩니다.",
          },
        },
        {
          "@type": "Question",
          name: "개발 완료 후 무엇을 받나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "완성된 서비스 + 프로젝트 리포트(고객 요구사항 정리, 해결 방법, 운영비 구조, 확장 가이드)를 함께 전달합니다. 코드와 배포 환경 100% 인수인계.",
          },
        },
        {
          "@type": "Question",
          name: "아이디어만 있어도 의뢰할 수 있나요?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "네. 아이디어 단계, 기획서가 있는 단계, 혹은 직접 만들다가 막힌 단계 모두 가능합니다. 무료 상담에서 현재 상황에 맞는 진행 방법을 안내드립니다.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <DevTools />
      </body>
    </html>
  );
}

import type { CategoryInfo } from "@/lib/types";

export const categories: CategoryInfo[] = [
  {
    id: "general",
    label: "General",
    description: "범용 UI/UX 스타일 — 웹사이트, 앱, 포트폴리오 등 다양한 프로젝트에 적용 가능",
    count: 49,
  },
  {
    id: "landing",
    label: "Landing Page",
    description: "랜딩 페이지에 최적화된 스타일 — 전환율과 첫인상에 집중",
    count: 8,
  },
  {
    id: "dashboard",
    label: "Dashboard",
    description: "대시보드 및 관리자 패널 스타일 — 데이터 시각화와 효율적 레이아웃",
    count: 10,
  },
];

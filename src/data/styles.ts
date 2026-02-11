import type { StyleMeta } from "@/lib/types";

export const styles: StyleMeta[] = [
  // ═══════════════════════════════════════════
  // GENERAL (49)
  // ═══════════════════════════════════════════
  {
    slug: "neumorphism",
    name: "Neumorphism",
    category: "general",
    description:
      "소프트한 그림자와 미묘한 하이라이트로 UI 요소가 표면에서 살짝 돌출되거나 함몰된 듯한 효과를 연출합니다. 미니멀하면서도 촉각적인 느낌을 줍니다.",
    bestFor: ["Settings panels", "Music players", "Calculator apps", "Toggle controls"],
    tags: ["soft-ui", "shadows", "3d-effect", "minimal"],
    relatedSlugs: ["glassmorphism", "claymorphism", "skeuomorphism"],
    implemented: true,
  },
  {
    slug: "glassmorphism",
    name: "Glassmorphism",
    category: "general",
    description:
      "반투명 배경에 블러 효과를 적용하여 유리처럼 보이는 UI 요소를 만듭니다. 배경의 콘텐츠가 은은하게 비치며 깊이감을 줍니다.",
    bestFor: ["Card overlays", "Navigation bars", "Modal dialogs", "Weather apps"],
    tags: ["blur", "transparency", "modern", "layered"],
    relatedSlugs: ["neumorphism", "frosted-glass", "aurora-ui"],
    implemented: true,
  },
  {
    slug: "brutalism",
    name: "Brutalism",
    category: "general",
    description:
      "의도적으로 거칠고 raw한 디자인. 굵은 테두리, 대비가 강한 색상, 시스템 폰트, 의도적 비대칭 등으로 반미학적 매력을 표현합니다.",
    bestFor: ["Portfolio sites", "Art galleries", "Zines", "Creative agencies"],
    tags: ["raw", "bold", "anti-design", "experimental"],
    relatedSlugs: ["high-contrast", "bold-typography", "memphis-design"],
    implemented: true,
  },
  {
    slug: "dark-mode-oled",
    name: "Dark Mode (OLED)",
    category: "general",
    description:
      "순수 검은색(#000) 배경에 최소한의 색상을 사용하여 OLED 디스플레이에서 완벽한 블랙을 구현합니다. 배터리 절약과 눈의 피로 감소에 효과적입니다.",
    bestFor: ["Mobile apps", "Reading apps", "Media players", "Night-use apps"],
    tags: ["dark", "oled", "battery-saving", "accessibility"],
    relatedSlugs: ["monochrome", "neon-glow", "cyberpunk"],
    implemented: true,
  },
  {
    slug: "bento-box-grid",
    name: "Bento Box Grid",
    category: "general",
    description:
      "일본 도시락(벤토) 상자처럼 다양한 크기의 직사각형 그리드로 콘텐츠를 배치합니다. Apple의 최근 프레젠테이션에서 유명해진 레이아웃 패턴입니다.",
    bestFor: ["Feature showcases", "Product pages", "Portfolios", "Presentations"],
    tags: ["grid", "layout", "apple-style", "modular"],
    relatedSlugs: ["card-based", "geometric-patterns", "minimalism"],
    implemented: true,
  },
  {
    slug: "y2k-aesthetic",
    name: "Y2K Aesthetic",
    category: "general",
    description:
      "2000년대 초반의 인터넷 미학을 재해석합니다. 메탈릭 그라데이션, 버블 폰트, 글리터 효과, 초기 웹 향수를 불러일으킵니다.",
    bestFor: ["Fashion brands", "Music sites", "Social platforms", "Youth-targeted apps"],
    tags: ["retro", "nostalgic", "playful", "metallic"],
    relatedSlugs: ["vaporwave", "pixel-art", "retro-vintage"],
    implemented: true,
  },
  {
    slug: "pixel-art",
    name: "Pixel Art",
    category: "general",
    description:
      "8-bit/16-bit 게임 시대의 픽셀 아트 스타일. 의도적으로 저해상도 그래픽과 제한된 색상 팔레트를 사용하여 레트로 게임 느낌을 줍니다.",
    bestFor: ["Game UIs", "Retro-themed sites", "Indie games", "Fun loading screens"],
    tags: ["8-bit", "retro", "gaming", "nostalgic"],
    relatedSlugs: ["y2k-aesthetic", "retro-vintage", "terminal-cli"],
    implemented: true,
  },
  {
    slug: "minimalism",
    name: "Minimalism",
    category: "general",
    description:
      "\"Less is more\" 원칙. 최소한의 요소, 넉넉한 여백, 제한된 색상으로 핵심 콘텐츠에 집중합니다.",
    bestFor: ["Corporate sites", "Portfolios", "Blogs", "SaaS landing pages"],
    tags: ["clean", "whitespace", "simple", "elegant"],
    relatedSlugs: ["flat-design", "swiss-international", "monochrome"],
    implemented: true,
  },
  {
    slug: "flat-design",
    name: "Flat Design",
    category: "general",
    description:
      "그림자, 그라데이션, 텍스처 없이 평면적인 요소만 사용하는 디자인. Microsoft Metro, iOS 7 이후의 디자인 철학을 반영합니다.",
    bestFor: ["Mobile apps", "Icons", "Infographics", "System UIs"],
    tags: ["2d", "clean", "colorful", "simple"],
    relatedSlugs: ["minimalism", "material-design", "monochrome"],
    implemented: true,
  },
  {
    slug: "material-design",
    name: "Material Design",
    category: "general",
    description:
      "Google의 디자인 시스템. 물리적 종이와 잉크에서 영감받아 미묘한 그림자, 움직임, 일관된 컴포넌트 체계를 제공합니다.",
    bestFor: ["Android apps", "Web apps", "Enterprise tools", "Google ecosystem"],
    tags: ["google", "elevation", "motion", "systematic"],
    relatedSlugs: ["flat-design", "minimalism", "card-based"],
    implemented: true,
  },
  {
    slug: "skeuomorphism",
    name: "Skeuomorphism",
    category: "general",
    description:
      "실제 물체의 재질과 형태를 디지털로 모방합니다. 가죽 텍스처, 금속 노브, 종이 질감 등 현실 세계의 요소를 UI에 반영합니다.",
    bestFor: ["Music apps", "Note-taking apps", "Game UIs", "Luxury brands"],
    tags: ["realistic", "textured", "3d", "classic"],
    relatedSlugs: ["neumorphism", "claymorphism", "retro-vintage"],
    implemented: true,
  },
  {
    slug: "claymorphism",
    name: "Claymorphism",
    category: "general",
    description:
      "점토 또는 플라스티신 같은 부드럽고 둥근 3D 효과. 내부 그림자와 밝은 색상으로 장난감 같은 친근한 느낌을 줍니다.",
    bestFor: ["Children's apps", "Onboarding flows", "Game UIs", "Friendly products"],
    tags: ["3d", "soft", "playful", "rounded"],
    relatedSlugs: ["neumorphism", "skeuomorphism", "pastel-soft"],
    implemented: true,
  },
  {
    slug: "aurora-ui",
    name: "Aurora UI",
    category: "general",
    description:
      "오로라(북극광)에서 영감받은 부드러운 그라데이션 애니메이션. 유동적으로 변하는 색상이 배경에 깊이와 생동감을 줍니다.",
    bestFor: ["Landing pages", "Creative portfolios", "Music apps", "Ambient displays"],
    tags: ["gradient", "animated", "atmospheric", "colorful"],
    relatedSlugs: ["gradient-mesh", "glassmorphism", "neon-glow"],
    implemented: true,
  },
  {
    slug: "gradient-mesh",
    name: "Gradient Mesh",
    category: "general",
    description:
      "복잡한 다중 포인트 그라데이션으로 유기적이고 풍부한 색상 전환을 만듭니다. 단순한 선형/원형 그라데이션을 넘어선 표현력을 제공합니다.",
    bestFor: ["Backgrounds", "Hero sections", "Brand visuals", "Abstract art"],
    tags: ["gradient", "colorful", "organic", "modern"],
    relatedSlugs: ["aurora-ui", "glassmorphism", "duotone"],
    implemented: true,
  },
  {
    slug: "neon-glow",
    name: "Neon Glow",
    category: "general",
    description:
      "어두운 배경 위에 밝게 빛나는 네온 효과. CSS box-shadow와 text-shadow를 활용하여 사이버펑크적인 미래 도시 분위기를 연출합니다.",
    bestFor: ["Nightlife venues", "Gaming sites", "Music platforms", "Cyberpunk themes"],
    tags: ["glow", "dark", "futuristic", "vibrant"],
    relatedSlugs: ["cyberpunk", "dark-mode-oled", "vaporwave"],
    implemented: true,
  },
  {
    slug: "retro-vintage",
    name: "Retro / Vintage",
    category: "general",
    description:
      "과거 시대의 디자인 요소를 현대적으로 재해석합니다. 세피아 톤, 빈티지 타이포그래피, 질감 있는 배경, 클래식한 장식 요소를 사용합니다.",
    bestFor: ["Restaurants", "Craft brands", "Wedding sites", "Heritage brands"],
    tags: ["classic", "nostalgic", "textured", "warm"],
    relatedSlugs: ["art-deco", "newspaper-editorial", "skeuomorphism"],
    implemented: true,
  },
  {
    slug: "memphis-design",
    name: "Memphis Design",
    category: "general",
    description:
      "1980년대 Memphis Group에서 유래. 기하학적 도형, 대담한 패턴, 밝은 색상 조합으로 규칙을 깨는 장난기 넘치는 디자인입니다.",
    bestFor: ["Creative agencies", "Youth brands", "Events", "Social media"],
    tags: ["geometric", "colorful", "playful", "80s"],
    relatedSlugs: ["brutalism", "bold-typography", "y2k-aesthetic"],
    implemented: true,
  },
  {
    slug: "art-deco",
    name: "Art Deco",
    category: "general",
    description:
      "1920-30년대의 호화로운 장식적 디자인. 기하학적 패턴, 금색/검정 색상, 대칭적 구성, 고급스러운 타이포그래피가 특징입니다.",
    bestFor: ["Luxury brands", "Hotels", "Jewelry", "High-end events"],
    tags: ["luxury", "geometric", "gold", "elegant"],
    relatedSlugs: ["retro-vintage", "monochrome", "bold-typography"],
    implemented: true,
  },
  {
    slug: "swiss-international",
    name: "Swiss / International",
    category: "general",
    description:
      "스위스 국제 타이포그래피 스타일. 그리드 시스템, sans-serif 폰트, 비대칭 레이아웃, 객관적 사진 활용으로 정보를 명확하게 전달합니다.",
    bestFor: ["Corporate sites", "Publications", "Museums", "Government sites"],
    tags: ["grid", "typography", "clean", "systematic"],
    relatedSlugs: ["minimalism", "bauhaus", "bold-typography"],
    implemented: true,
  },
  {
    slug: "bauhaus",
    name: "Bauhaus",
    category: "general",
    description:
      "\"형태는 기능을 따른다\" 원칙. 기본 기하학적 도형(원, 삼각형, 사각형), 원색, 기능주의적 디자인을 현대적으로 해석합니다.",
    bestFor: ["Design studios", "Architecture firms", "Art galleries", "Education"],
    tags: ["geometric", "primary-colors", "functional", "classic"],
    relatedSlugs: ["swiss-international", "minimalism", "geometric-patterns"],
    implemented: true,
  },
  {
    slug: "vaporwave",
    name: "Vaporwave",
    category: "general",
    description:
      "1990년대 인터넷 문화와 소비주의에 대한 향수와 비판. 핑크/시안 그라데이션, 그리스 조각상, 일본어 텍스트, 글리치 효과가 특징입니다.",
    bestFor: ["Music platforms", "Art projects", "Experimental sites", "Merch stores"],
    tags: ["aesthetic", "retrowave", "pink", "surreal"],
    relatedSlugs: ["y2k-aesthetic", "neon-glow", "cyberpunk"],
    implemented: true,
  },
  {
    slug: "cyberpunk",
    name: "Cyberpunk",
    category: "general",
    description:
      "어둡고 미래적인 디스토피아 분위기. 네온 색상, 글리치 효과, 테크노 타이포그래피, HUD 스타일 인터페이스를 조합합니다.",
    bestFor: ["Gaming sites", "Tech startups", "Sci-fi projects", "Music events"],
    tags: ["futuristic", "dark", "neon", "tech"],
    relatedSlugs: ["neon-glow", "sci-fi-hud", "dark-mode-oled"],
    implemented: true,
  },
  {
    slug: "organic-biomorphic",
    name: "Organic / Biomorphic",
    category: "general",
    description:
      "자연의 유기적 형태에서 영감. 물결, 잎사귀, 세포 등 비정형 곡선과 부드러운 색상으로 자연 친화적 분위기를 만듭니다.",
    bestFor: ["Wellness apps", "Eco brands", "Food products", "Health care"],
    tags: ["natural", "curved", "soft", "flowing"],
    relatedSlugs: ["pastel-soft", "aurora-ui", "gradient-mesh"],
    implemented: true,
  },
  {
    slug: "isometric",
    name: "Isometric",
    category: "general",
    description:
      "2.5D 아이소메트릭 투영법을 사용한 일러스트레이션 스타일. 평면에 깊이감을 더해 복잡한 시스템이나 프로세스를 시각적으로 설명합니다.",
    bestFor: ["Tech explainers", "Onboarding", "Feature pages", "Infographics"],
    tags: ["3d", "illustration", "technical", "explanatory"],
    relatedSlugs: ["flat-design", "material-design", "data-visualization"],
    implemented: false,
  },
  {
    slug: "3d-immersive",
    name: "3D / Immersive",
    category: "general",
    description:
      "WebGL, Three.js 등을 활용한 완전한 3D 경험. 사용자가 3D 공간에서 인터랙션하며 몰입감 있는 웹 경험을 제공합니다.",
    bestFor: ["Product showcases", "Virtual tours", "Gaming", "Interactive stories"],
    tags: ["3d", "webgl", "interactive", "immersive"],
    relatedSlugs: ["isometric", "parallax-scrolling", "micro-interactions"],
    implemented: false,
  },
  {
    slug: "monochrome",
    name: "Monochrome",
    category: "general",
    description:
      "단일 색상의 다양한 명도와 채도만으로 구성합니다. 흑백 또는 한 가지 색상 계열로 절제된 고급스러움을 표현합니다.",
    bestFor: ["Photography portfolios", "Luxury brands", "Editorial", "Minimalist blogs"],
    tags: ["single-color", "elegant", "restrained", "sophisticated"],
    relatedSlugs: ["minimalism", "dark-mode-oled", "high-contrast"],
    implemented: false,
  },
  {
    slug: "pastel-soft",
    name: "Pastel / Soft",
    category: "general",
    description:
      "부드러운 파스텔 색상과 둥근 모서리로 따뜻하고 친근한 느낌. 접근성을 고려한 낮은 채도와 높은 명도의 색상 조합을 사용합니다.",
    bestFor: ["Baby products", "Wellness apps", "Social apps", "Feminine brands"],
    tags: ["soft", "warm", "friendly", "light"],
    relatedSlugs: ["claymorphism", "organic-biomorphic", "minimalism"],
    implemented: false,
  },
  {
    slug: "bold-typography",
    name: "Bold Typography",
    category: "general",
    description:
      "타이포그래피를 주인공으로 내세우는 디자인. 초대형 폰트, 혼합 서체, 텍스트 애니메이션으로 강렬한 시각적 임팩트를 줍니다.",
    bestFor: ["Agency sites", "Event pages", "Magazine sites", "Brand statements"],
    tags: ["type-driven", "expressive", "large-text", "impactful"],
    relatedSlugs: ["brutalism", "swiss-international", "kinetic-typography"],
    implemented: false,
  },
  {
    slug: "illustrated-hand-drawn",
    name: "Illustrated / Hand-drawn",
    category: "general",
    description:
      "손으로 그린 듯한 일러스트레이션과 스케치 스타일 UI 요소. 디지털의 차가움을 벗어나 인간적이고 따뜻한 느낌을 줍니다.",
    bestFor: ["Children's sites", "Craft brands", "Personal blogs", "Educational"],
    tags: ["hand-drawn", "warm", "creative", "unique"],
    relatedSlugs: ["organic-biomorphic", "paper-stationery", "collage-mixed-media"],
    implemented: true,
  },
  {
    slug: "collage-mixed-media",
    name: "Collage / Mixed Media",
    category: "general",
    description:
      "사진, 일러스트, 텍스처, 타이포그래피를 자유롭게 조합한 콜라주 스타일. 창의적이고 편집적인 느낌을 줍니다.",
    bestFor: ["Fashion brands", "Art sites", "Magazines", "Cultural events"],
    tags: ["mixed", "creative", "editorial", "layered"],
    relatedSlugs: ["brutalism", "memphis-design", "asymmetric-layout"],
    implemented: true,
  },
  {
    slug: "geometric-patterns",
    name: "Geometric Patterns",
    category: "general",
    description:
      "반복적인 기하학적 패턴으로 시각적 리듬과 질서를 만듭니다. 배경, 구분선, 장식 요소로 활용하여 구조적 아름다움을 더합니다.",
    bestFor: ["Tech companies", "Architecture", "Event branding", "Textiles"],
    tags: ["pattern", "structured", "repetitive", "mathematical"],
    relatedSlugs: ["bauhaus", "art-deco", "swiss-international"],
    implemented: true,
  },
  {
    slug: "asymmetric-layout",
    name: "Asymmetric Layout",
    category: "general",
    description:
      "의도적으로 비대칭인 레이아웃으로 시각적 긴장감과 역동성을 만듭니다. 그리드를 깨뜨려 사용자의 시선을 유도합니다.",
    bestFor: ["Creative agencies", "Portfolios", "Fashion", "Art exhibitions"],
    tags: ["dynamic", "creative", "unconventional", "editorial"],
    relatedSlugs: ["brutalism", "collage-mixed-media", "split-screen"],
    implemented: true,
  },
  {
    slug: "card-based",
    name: "Card-based",
    category: "general",
    description:
      "콘텐츠를 독립적인 카드 단위로 구성합니다. Pinterest, Trello처럼 각 카드가 하나의 정보 단위를 담아 스캔하기 쉬운 인터페이스를 만듭니다.",
    bestFor: ["Social feeds", "E-commerce", "News sites", "Project management"],
    tags: ["modular", "organized", "responsive", "scannable"],
    relatedSlugs: ["bento-box-grid", "material-design", "flat-design"],
    implemented: true,
  },
  {
    slug: "parallax-scrolling",
    name: "Parallax Scrolling",
    category: "general",
    description:
      "배경과 전경이 서로 다른 속도로 스크롤되어 깊이감과 몰입감을 만듭니다. 스토리텔링과 시각적 경험을 강화합니다.",
    bestFor: ["Landing pages", "Brand stories", "Product launches", "Interactive narratives"],
    tags: ["scroll", "depth", "immersive", "storytelling"],
    relatedSlugs: ["3d-immersive", "micro-interactions", "storytelling-scroll"],
    implemented: true,
  },
  {
    slug: "split-screen",
    name: "Split Screen",
    category: "general",
    description:
      "화면을 두 개 이상으로 분할하여 대조적인 콘텐츠를 동시에 표시합니다. 비교, 선택지 제시, 듀얼 내러티브에 효과적입니다.",
    bestFor: ["Product comparisons", "Before/After", "Dual audiences", "Fashion lookbooks"],
    tags: ["divided", "contrast", "dual", "balanced"],
    relatedSlugs: ["asymmetric-layout", "bento-box-grid", "comparison-pricing"],
    implemented: true,
  },
  {
    slug: "fullscreen-video",
    name: "Full-screen Video",
    category: "general",
    description:
      "전체 화면 비디오를 배경으로 사용하여 강렬한 첫인상과 몰입감을 제공합니다. 텍스트 오버레이와 CTA를 함께 배치합니다.",
    bestFor: ["Brand sites", "Hotels/Travel", "Film/Media", "Event promotions"],
    tags: ["video", "immersive", "cinematic", "impactful"],
    relatedSlugs: ["video-background", "hero-centric-design", "parallax-scrolling"],
    implemented: true,
  },
  {
    slug: "micro-interactions",
    name: "Micro-interactions",
    category: "general",
    description:
      "버튼 호버, 토글 전환, 로딩 인디케이터 등 작은 인터랙션에 디테일한 애니메이션을 추가합니다. UX의 완성도를 높이는 핵심 요소입니다.",
    bestFor: ["SaaS products", "Mobile apps", "Form UIs", "Interactive dashboards"],
    tags: ["animation", "feedback", "detail", "polish"],
    relatedSlugs: ["material-design", "kinetic-typography", "3d-immersive"],
    implemented: true,
  },
  {
    slug: "kinetic-typography",
    name: "Kinetic Typography",
    category: "general",
    description:
      "텍스트에 움직임과 애니메이션을 적용하여 메시지를 강화합니다. 스크롤 트리거, 타이핑 효과, 텍스트 변형 등으로 역동적인 읽기 경험을 제공합니다.",
    bestFor: ["Landing pages", "Presentations", "Music videos", "Storytelling"],
    tags: ["animated-text", "dynamic", "expressive", "engaging"],
    relatedSlugs: ["bold-typography", "micro-interactions", "parallax-scrolling"],
    implemented: true,
  },
  {
    slug: "data-visualization",
    name: "Data Visualization",
    category: "general",
    description:
      "데이터를 차트, 그래프, 지도, 인포그래픽으로 시각화하는 데 최적화된 스타일. 복잡한 정보를 이해하기 쉽게 만듭니다.",
    bestFor: ["Analytics dashboards", "Reports", "Scientific sites", "Financial tools"],
    tags: ["charts", "data", "informative", "analytical"],
    relatedSlugs: ["executive-dashboard", "analytics-dashboard", "isometric"],
    implemented: true,
  },
  {
    slug: "accessible-inclusive",
    name: "Accessible / Inclusive",
    category: "general",
    description:
      "WCAG 가이드라인을 철저히 준수하는 디자인. 높은 대비, 큰 클릭 영역, 스크린 리더 최적화, 키보드 네비게이션을 우선합니다.",
    bestFor: ["Government sites", "Healthcare", "Education", "Public services"],
    tags: ["a11y", "wcag", "inclusive", "universal"],
    relatedSlugs: ["high-contrast", "minimalism", "flat-design"],
    implemented: true,
  },
  {
    slug: "high-contrast",
    name: "High Contrast",
    category: "general",
    description:
      "극도로 높은 색상 대비를 사용하여 가독성을 극대화합니다. 흑백 기반에 강렬한 액센트 색상을 조합합니다.",
    bestFor: ["Accessibility-first sites", "Text-heavy content", "Legal/Official", "Signage"],
    tags: ["contrast", "readable", "bold", "accessible"],
    relatedSlugs: ["brutalism", "monochrome", "accessible-inclusive"],
    implemented: true,
  },
  {
    slug: "low-fi-wireframe",
    name: "Lo-fi / Wireframe",
    category: "general",
    description:
      "의도적으로 와이어프레임이나 프로토타입처럼 보이는 스타일. 미완성의 매력, 핸드 스케치 느낌으로 진정성과 투명함을 표현합니다.",
    bestFor: ["Developer tools", "Beta products", "Personal sites", "Indie projects"],
    tags: ["sketch", "raw", "authentic", "simple"],
    relatedSlugs: ["brutalism", "illustrated-hand-drawn", "terminal-cli"],
    implemented: false,
  },
  {
    slug: "duotone",
    name: "Duotone",
    category: "general",
    description:
      "두 가지 대비되는 색상만으로 이미지와 UI를 처리합니다. Spotify가 유명하게 만든 기법으로, 강렬하면서도 통일된 시각적 아이덴티티를 만듭니다.",
    bestFor: ["Music platforms", "Marketing sites", "Photo galleries", "Brand campaigns"],
    tags: ["two-color", "bold", "artistic", "unified"],
    relatedSlugs: ["monochrome", "gradient-mesh", "high-contrast"],
    implemented: false,
  },
  {
    slug: "grained-textured",
    name: "Grained / Textured",
    category: "general",
    description:
      "디지털 표면에 필름 그레인, 노이즈, 종이 텍스처 등을 추가하여 물리적 질감과 따뜻함을 부여합니다.",
    bestFor: ["Photography", "Artisan brands", "Vintage themes", "Premium products"],
    tags: ["texture", "noise", "tactile", "warm"],
    relatedSlugs: ["retro-vintage", "paper-stationery", "organic-biomorphic"],
    implemented: false,
  },
  {
    slug: "paper-stationery",
    name: "Paper / Stationery",
    category: "general",
    description:
      "종이, 노트, 편지지를 모방한 디자인. 줄이 그어진 노트, 접힌 종이, 스탬프, 마스킹 테이프 등 문구류 요소를 디지털로 재현합니다.",
    bestFor: ["Personal blogs", "To-do apps", "Wedding invites", "Journaling apps"],
    tags: ["paper", "stationery", "warm", "personal"],
    relatedSlugs: ["skeuomorphism", "illustrated-hand-drawn", "grained-textured"],
    implemented: false,
  },
  {
    slug: "terminal-cli",
    name: "Terminal / CLI",
    category: "general",
    description:
      "커맨드라인 인터페이스를 모방한 디자인. 모노스페이스 폰트, 녹색/앰버 텍스트, 어두운 배경으로 해커/개발자 분위기를 연출합니다.",
    bestFor: ["Developer tools", "Tech portfolios", "Hacker themes", "System monitors"],
    tags: ["monospace", "hacker", "technical", "dark"],
    relatedSlugs: ["dark-mode-oled", "pixel-art", "sci-fi-hud"],
    implemented: false,
  },
  {
    slug: "newspaper-editorial",
    name: "Newspaper / Editorial",
    category: "general",
    description:
      "전통 신문과 잡지의 레이아웃을 웹에 적용합니다. 컬럼 그리드, 세리프 폰트, 드롭캡, 명확한 위계로 콘텐츠 중심 디자인을 만듭니다.",
    bestFor: ["News sites", "Blogs", "Magazines", "Long-form content"],
    tags: ["editorial", "columns", "serif", "content-first"],
    relatedSlugs: ["swiss-international", "bold-typography", "minimalism"],
    implemented: false,
  },
  {
    slug: "sci-fi-hud",
    name: "Sci-fi / HUD",
    category: "general",
    description:
      "SF 영화의 HUD(Heads-Up Display)를 재현합니다. 원형 게이지, 스캔 라인, 홀로그램 효과, 미래적 타이포그래피로 테크 분위기를 만듭니다.",
    bestFor: ["Gaming UIs", "Tech demos", "Space-themed", "AR/VR interfaces"],
    tags: ["futuristic", "sci-fi", "technical", "animated"],
    relatedSlugs: ["cyberpunk", "neon-glow", "terminal-cli"],
    implemented: false,
  },
  {
    slug: "frosted-glass",
    name: "Frosted Glass",
    category: "general",
    description:
      "macOS의 frosted glass 효과에서 영감. Glassmorphism보다 더 불투명하고 부드러운 블러로 고급스러운 시스템 UI 느낌을 줍니다.",
    bestFor: ["OS-like UIs", "Navigation panels", "Notification centers", "Settings"],
    tags: ["blur", "opaque", "system-ui", "premium"],
    relatedSlugs: ["glassmorphism", "neumorphism", "minimalism"],
    implemented: false,
  },

  // ═══════════════════════════════════════════
  // LANDING PAGE (8)
  // ═══════════════════════════════════════════
  {
    slug: "hero-centric-design",
    name: "Hero-Centric Design",
    category: "landing",
    description:
      "강렬한 히어로 섹션이 중심. 전체 화면 이미지/영상, 대담한 헤드라인, 명확한 CTA 버튼으로 즉각적인 임팩트를 줍니다.",
    bestFor: ["Product launches", "SaaS landing", "App promotions", "Campaign pages"],
    tags: ["hero", "cta", "impactful", "conversion"],
    relatedSlugs: ["minimal-direct", "fullscreen-video", "bold-typography"],
    implemented: true,
  },
  {
    slug: "minimal-direct",
    name: "Minimal & Direct",
    category: "landing",
    description:
      "불필요한 요소를 제거하고 핵심 메시지와 CTA에만 집중합니다. 빠른 로딩, 높은 전환율, 명확한 가치 전달이 목표입니다.",
    bestFor: ["SaaS products", "Waitlist pages", "Pre-launch", "Single-product sites"],
    tags: ["clean", "focused", "fast", "conversion"],
    relatedSlugs: ["hero-centric-design", "minimalism", "flat-design"],
    implemented: true,
  },
  {
    slug: "storytelling-scroll",
    name: "Storytelling Scroll",
    category: "landing",
    description:
      "스크롤을 통해 순차적으로 이야기를 전개합니다. 각 섹션이 내러티브의 한 장면이 되어 사용자를 자연스럽게 이끕니다.",
    bestFor: ["Brand stories", "Annual reports", "Case studies", "Non-profits"],
    tags: ["narrative", "scroll", "sequential", "engaging"],
    relatedSlugs: ["parallax-scrolling", "hero-centric-design", "kinetic-typography"],
    implemented: true,
  },
  {
    slug: "product-showcase",
    name: "Product Showcase",
    category: "landing",
    description:
      "제품 이미지와 기능을 시각적으로 강조합니다. 360도 뷰, 줌 인터랙션, 기능별 섹션으로 제품의 매력을 극대화합니다.",
    bestFor: ["E-commerce", "Tech hardware", "Fashion items", "Physical products"],
    tags: ["product", "visual", "features", "showcase"],
    relatedSlugs: ["hero-centric-design", "bento-box-grid", "3d-immersive"],
    implemented: true,
  },
  {
    slug: "social-proof-heavy",
    name: "Social Proof Heavy",
    category: "landing",
    description:
      "고객 추천사, 리뷰, 사용 통계, 로고 월 등 사회적 증거를 전면에 배치하여 신뢰와 전환을 높입니다.",
    bestFor: ["B2B SaaS", "Service businesses", "Online courses", "Marketplaces"],
    tags: ["testimonials", "trust", "reviews", "conversion"],
    relatedSlugs: ["minimal-direct", "hero-centric-design", "comparison-pricing"],
    implemented: true,
  },
  {
    slug: "interactive-animated",
    name: "Interactive / Animated",
    category: "landing",
    description:
      "스크롤, 호버, 클릭에 반응하는 풍부한 애니메이션과 인터랙션. 사용자 참여를 유도하고 기억에 남는 경험을 만듭니다.",
    bestFor: ["Creative agencies", "Tech products", "Portfolio sites", "Awards entries"],
    tags: ["animated", "interactive", "engaging", "creative"],
    relatedSlugs: ["micro-interactions", "parallax-scrolling", "3d-immersive"],
    implemented: true,
  },
  {
    slug: "video-background",
    name: "Video Background",
    category: "landing",
    description:
      "자동 재생 비디오를 배경으로 사용하여 브랜드의 분위기와 이야기를 시각적으로 전달합니다. 정적인 이미지를 넘어선 생동감을 제공합니다.",
    bestFor: ["Travel sites", "Real estate", "Restaurants", "Lifestyle brands"],
    tags: ["video", "atmospheric", "cinematic", "immersive"],
    relatedSlugs: ["fullscreen-video", "hero-centric-design", "storytelling-scroll"],
    implemented: true,
  },
  {
    slug: "comparison-pricing",
    name: "Comparison / Pricing",
    category: "landing",
    description:
      "가격 테이블과 기능 비교를 중심으로 한 레이아웃. 명확한 계층 구조로 사용자가 최적의 플랜을 쉽게 선택할 수 있도록 돕습니다.",
    bestFor: ["SaaS pricing", "Subscription services", "Insurance", "Phone plans"],
    tags: ["pricing", "comparison", "tables", "decision"],
    relatedSlugs: ["minimal-direct", "social-proof-heavy", "card-based"],
    implemented: true,
  },

  // ═══════════════════════════════════════════
  // DASHBOARD (10)
  // ═══════════════════════════════════════════
  {
    slug: "executive-dashboard",
    name: "Executive Dashboard",
    category: "dashboard",
    description:
      "경영진을 위한 고수준 KPI 대시보드. 핵심 지표를 큰 숫자와 트렌드 차트로 표시하고, 드릴다운으로 상세 데이터에 접근합니다.",
    bestFor: ["C-suite reporting", "Business intelligence", "KPI monitoring", "Board presentations"],
    tags: ["kpi", "charts", "executive", "high-level"],
    relatedSlugs: ["analytics-dashboard", "financial-dashboard", "data-visualization"],
    implemented: true,
  },
  {
    slug: "analytics-dashboard",
    name: "Analytics Dashboard",
    category: "dashboard",
    description:
      "데이터 분석에 특화된 대시보드. 다양한 차트 유형, 필터 옵션, 날짜 범위 선택기로 깊이 있는 데이터 탐색을 지원합니다.",
    bestFor: ["Marketing analytics", "Web analytics", "Sales reports", "Data teams"],
    tags: ["analytics", "charts", "filters", "data-driven"],
    relatedSlugs: ["executive-dashboard", "data-visualization", "realtime-monitor"],
    implemented: true,
  },
  {
    slug: "realtime-monitor",
    name: "Real-time Monitor",
    category: "dashboard",
    description:
      "실시간 데이터 모니터링에 최적화. 라이브 차트, 상태 인디케이터, 알림 시스템으로 시스템 상태를 즉각적으로 파악합니다.",
    bestFor: ["Server monitoring", "IoT dashboards", "Trading platforms", "Operations centers"],
    tags: ["realtime", "live", "monitoring", "alerts"],
    relatedSlugs: ["iot-dashboard", "executive-dashboard", "sci-fi-hud"],
    implemented: true,
  },
  {
    slug: "admin-panel",
    name: "Admin Panel",
    category: "dashboard",
    description:
      "관리자 패널의 표준 레이아웃. 사이드바 네비게이션, 데이터 테이블, CRUD 인터페이스, 사용자 관리 기능을 체계적으로 구성합니다.",
    bestFor: ["CMS backends", "User management", "Content moderation", "System settings"],
    tags: ["admin", "crud", "tables", "management"],
    relatedSlugs: ["crm-dashboard", "project-management", "executive-dashboard"],
    implemented: true,
  },
  {
    slug: "crm-dashboard",
    name: "CRM Dashboard",
    category: "dashboard",
    description:
      "고객 관계 관리에 특화. 파이프라인 뷰, 연락처 카드, 활동 타임라인, 거래 추적으로 영업/고객관리를 시각화합니다.",
    bestFor: ["Sales teams", "Customer success", "Lead management", "Account management"],
    tags: ["crm", "pipeline", "contacts", "sales"],
    relatedSlugs: ["admin-panel", "analytics-dashboard", "project-management"],
    implemented: true,
  },
  {
    slug: "financial-dashboard",
    name: "Financial Dashboard",
    category: "dashboard",
    description:
      "금융 데이터에 최적화. 수익/비용 차트, 예산 대비 실적, 캔들스틱 차트, 재무 지표를 전문적으로 표시합니다.",
    bestFor: ["Fintech apps", "Banking", "Investment platforms", "Accounting tools"],
    tags: ["finance", "money", "charts", "professional"],
    relatedSlugs: ["executive-dashboard", "analytics-dashboard", "realtime-monitor"],
    implemented: true,
  },
  {
    slug: "project-management",
    name: "Project Management",
    category: "dashboard",
    description:
      "프로젝트 관리 도구 스타일. 칸반 보드, 간트 차트, 작업 목록, 팀 멤버 현황으로 프로젝트 진행을 시각적으로 관리합니다.",
    bestFor: ["Team collaboration", "Agile tools", "Task tracking", "Sprint planning"],
    tags: ["kanban", "gantt", "tasks", "collaboration"],
    relatedSlugs: ["admin-panel", "crm-dashboard", "card-based"],
    implemented: true,
  },
  {
    slug: "iot-dashboard",
    name: "IoT Dashboard",
    category: "dashboard",
    description:
      "IoT 센서와 디바이스 모니터링에 특화. 기기 상태, 센서 데이터, 위치 맵, 제어 인터페이스를 통합적으로 표시합니다.",
    bestFor: ["Smart home", "Industrial IoT", "Fleet management", "Environmental monitoring"],
    tags: ["iot", "sensors", "devices", "monitoring"],
    relatedSlugs: ["realtime-monitor", "sci-fi-hud", "data-visualization"],
    implemented: false,
  },
  {
    slug: "social-media-dashboard",
    name: "Social Media Dashboard",
    category: "dashboard",
    description:
      "소셜 미디어 분석과 관리를 위한 대시보드. 팔로워 통계, 게시물 성과, 참여율, 일정 관리를 한눈에 파악합니다.",
    bestFor: ["Social media managers", "Marketing teams", "Influencers", "Agencies"],
    tags: ["social", "engagement", "content", "scheduling"],
    relatedSlugs: ["analytics-dashboard", "crm-dashboard", "executive-dashboard"],
    implemented: false,
  },
  {
    slug: "healthcare-dashboard",
    name: "Healthcare Dashboard",
    category: "dashboard",
    description:
      "의료/헬스케어 데이터 시각화에 특화. 환자 기록, 바이탈 사인, 예약 관리, 의료 통계를 직관적으로 표시합니다.",
    bestFor: ["Hospital systems", "Telemedicine", "Health monitoring", "Medical research"],
    tags: ["health", "medical", "patients", "clinical"],
    relatedSlugs: ["realtime-monitor", "analytics-dashboard", "accessible-inclusive"],
    implemented: false,
  },
];

export function getStyleBySlug(slug: string): StyleMeta | undefined {
  return styles.find((s) => s.slug === slug);
}

export function getStylesByCategory(category: StyleMeta["category"]): StyleMeta[] {
  return styles.filter((s) => s.category === category);
}

export function getImplementedStyles(): StyleMeta[] {
  return styles.filter((s) => s.implemented);
}

export function searchStyles(query: string): StyleMeta[] {
  const q = query.toLowerCase();
  return styles.filter(
    (s) =>
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.tags.some((t) => t.includes(q))
  );
}

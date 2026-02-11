type DemoModule = { default: React.ComponentType };
type DemoImport = () => Promise<DemoModule>;

const registry: Record<string, DemoImport> = {
  // General
  neumorphism: () => import("./general/neumorphism"),
  glassmorphism: () => import("./general/glassmorphism"),
  brutalism: () => import("./general/brutalism"),
  "dark-mode-oled": () => import("./general/dark-mode-oled"),
  "bento-box-grid": () => import("./general/bento-box-grid"),
  "y2k-aesthetic": () => import("./general/y2k-aesthetic"),
  "pixel-art": () => import("./general/pixel-art"),
  minimalism: () => import("./general/minimalism"),
  "flat-design": () => import("./general/flat-design"),
  "material-design": () => import("./general/material-design"),
  skeuomorphism: () => import("./general/skeuomorphism"),
  claymorphism: () => import("./general/claymorphism"),
  "aurora-ui": () => import("./general/aurora-ui"),
  "gradient-mesh": () => import("./general/gradient-mesh"),
  "neon-glow": () => import("./general/neon-glow"),
  "retro-vintage": () => import("./general/retro-vintage"),
  "memphis-design": () => import("./general/memphis-design"),
  "art-deco": () => import("./general/art-deco"),
  "swiss-international": () => import("./general/swiss-international"),
  bauhaus: () => import("./general/bauhaus"),
  vaporwave: () => import("./general/vaporwave"),
  cyberpunk: () => import("./general/cyberpunk"),
  "organic-biomorphic": () => import("./general/organic-biomorphic"),
  "illustrated-hand-drawn": () => import("./general/illustrated-hand-drawn"),
  "collage-mixed-media": () => import("./general/collage-mixed-media"),
  "geometric-patterns": () => import("./general/geometric-patterns"),
  "asymmetric-layout": () => import("./general/asymmetric-layout"),
  "card-based": () => import("./general/card-based"),
  "parallax-scrolling": () => import("./general/parallax-scrolling"),
  "split-screen": () => import("./general/split-screen"),
  "fullscreen-video": () => import("./general/fullscreen-video"),
  "micro-interactions": () => import("./general/micro-interactions"),
  "kinetic-typography": () => import("./general/kinetic-typography"),
  "data-visualization": () => import("./general/data-visualization"),
  "accessible-inclusive": () => import("./general/accessible-inclusive"),
  "high-contrast": () => import("./general/high-contrast"),
  isometric: () => import("./general/isometric"),
  "3d-immersive": () => import("./general/3d-immersive"),
  monochrome: () => import("./general/monochrome"),
  "pastel-soft": () => import("./general/pastel-soft"),
  "bold-typography": () => import("./general/bold-typography"),
  duotone: () => import("./general/duotone"),
  "grained-textured": () => import("./general/grained-textured"),
  "paper-stationery": () => import("./general/paper-stationery"),
  "terminal-cli": () => import("./general/terminal-cli"),
  "newspaper-editorial": () => import("./general/newspaper-editorial"),
  "sci-fi-hud": () => import("./general/sci-fi-hud"),
  "frosted-glass": () => import("./general/frosted-glass"),
  "low-fi-wireframe": () => import("./general/low-fi-wireframe"),

  // Landing
  "hero-centric-design": () => import("./landing/hero-centric-design"),
  "minimal-direct": () => import("./landing/minimal-direct"),
  "storytelling-scroll": () => import("./landing/storytelling-scroll"),
  "product-showcase": () => import("./landing/product-showcase"),
  "social-proof-heavy": () => import("./landing/social-proof-heavy"),
  "interactive-animated": () => import("./landing/interactive-animated"),
  "video-background": () => import("./landing/video-background"),
  "comparison-pricing": () => import("./landing/comparison-pricing"),

  // Dashboard
  "executive-dashboard": () => import("./dashboard/executive-dashboard"),
  "analytics-dashboard": () => import("./dashboard/analytics-dashboard"),
  "realtime-monitor": () => import("./dashboard/realtime-monitor"),
  "admin-panel": () => import("./dashboard/admin-panel"),
  "crm-dashboard": () => import("./dashboard/crm-dashboard"),
  "financial-dashboard": () => import("./dashboard/financial-dashboard"),
  "project-management": () => import("./dashboard/project-management"),
  "iot-dashboard": () => import("./dashboard/iot-dashboard"),
  "social-media-dashboard": () => import("./dashboard/social-media-dashboard"),
  "healthcare-dashboard": () => import("./dashboard/healthcare-dashboard"),
};

export async function loadDemo(slug: string): Promise<DemoModule> {
  const loader = registry[slug];
  if (!loader) {
    return {
      default: () => null,
    };
  }
  return loader();
}

export function hasDemo(slug: string): boolean {
  return slug in registry;
}

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

  // Landing
  "hero-centric-design": () => import("./landing/hero-centric-design"),
  "minimal-direct": () => import("./landing/minimal-direct"),

  // Dashboard
  "executive-dashboard": () => import("./dashboard/executive-dashboard"),
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

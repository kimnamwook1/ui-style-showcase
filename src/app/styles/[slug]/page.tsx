import { notFound } from "next/navigation";
import { styles, getStyleBySlug } from "@/data/styles";
import { StyleHeader } from "@/components/detail/StyleHeader";
import { LivePreview } from "@/components/detail/LivePreview";
import { UseCases } from "@/components/detail/UseCases";
import { CodeSnippetViewer } from "@/components/detail/CodeSnippetViewer";
import { RelatedStyles } from "@/components/detail/RelatedStyles";

export function generateStaticParams() {
  return styles.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const style = getStyleBySlug(slug);
    if (!style) return { title: "Style Not Found" };
    return {
      title: `${style.name} — UI/UX Style Showcase`,
      description: style.description,
    };
  });
}

export default async function StyleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const style = getStyleBySlug(slug);

  if (!style) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <StyleHeader style={style} />
        <LivePreview slug={style.slug} implemented={style.implemented} />
        <UseCases bestFor={style.bestFor} />
        {style.implemented && <CodeSnippetViewer slug={style.slug} />}
        <RelatedStyles slugs={style.relatedSlugs} />
      </div>
    </div>
  );
}

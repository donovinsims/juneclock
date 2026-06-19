import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { ForIndustryLanding } from "@/components/site/ForIndustryLanding";
import { getIndustry } from "@/data/industries";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ params, loaderData }) => {
    const i = loaderData?.industry;
    if (!i) {
      return {
        meta: [
          { title: "Industry not found — Clockout" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${i.name} Automation in ${i.town}, IL — Clockout · 9-Day Builds, You Own It`;
    const description = `${i.painHeadline} Flat-fee, one-time automation builds for ${i.name.toLowerCase()} shops in ${i.town} and across the Rockford–Roscoe–Beloit corridor. $497 beta. You own the system. No subscription.`;
    const url = `https://clockout.us/services/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "product" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${i.name} Revenue-Leak Audit + Automation Build`,
            serviceType: `${i.name} business automation`,
            provider: {
              "@type": "LocalBusiness",
              name: "Clockout",
              address: { "@type": "PostalAddress", addressLocality: "Roscoe", addressRegion: "IL", addressCountry: "US" },
              email: "don@clockout.us",
              telephone: "+1-608-713-1651",
            },
            areaServed: [i.town, "Rockford, IL", "Loves Park, IL", "Machesney Park, IL", "Roscoe, IL", "Beloit, WI", "Janesville, WI"],
            offers: {
              "@type": "Offer",
              price: 497,
              priceCurrency: "USD",
              description: "Beta pricing — 48-hour audit + 7-day automation build, one-time flat fee.",
            },
          }),
        },
      ],
    };
  },
  component: () => {
    const { industry } = Route.useLoaderData();
    return <ForIndustryLanding industry={industry} />;
  },
  notFoundComponent: () => (
    <SiteShell>
      <div className="container-x py-32 text-center">
        <div className="mono-num text-xs uppercase tracking-wider text-amber">404 / industry not found</div>
        <h1 className="mt-4 text-4xl md:text-5xl">That trade page doesn't exist.</h1>
        <p className="mt-4 text-muted-foreground">Pick a trade from the menu, or head home.</p>
        <div className="mt-7 flex justify-center gap-3">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-amber px-5 py-3 text-sm font-medium text-amber-foreground hover:bg-amber/90">
            Go home →
          </Link>
        </div>
      </div>
    </SiteShell>
  ),
  errorComponent: () => (
    <SiteShell>
      <div className="container-x py-32 text-center">
        <h1 className="text-3xl">Something went wrong</h1>
        <p className="mt-3 text-muted-foreground">
          This page didn't load. Please try again or head home.
        </p>
      </div>
    </SiteShell>
  ),
});

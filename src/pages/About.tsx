import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4 animate-fade-in">
              About
            </p>
            <h1 className="heading-display animate-fade-in-up">
              Building brands that matter, strategies that scale
            </h1>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="pb-16 md:pb-24">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Main Bio */}
            <div className="lg:col-span-7 space-y-6">
              <p className="body-large text-foreground">
                Astelie Ngarambe is a Brand Architect and Growth Advisor with over ten years of experience at the intersection of strategy, branding, and market expansion across African and emerging markets.
              </p>
              <p className="body-regular">
                Her work has spanned leadership roles in commercial strategy, marketing, and brand development for some of Africa's most innovative companies. From clean energy to sustainable water solutions, she has helped organizations build not just brands, but strategic growth engines that create lasting market impact.
              </p>
              <p className="body-regular">
                Astelie's approach is rooted in the belief that great brands are built on strategic clarity, not just creative execution. She works with founders, executives, and institutions who understand that sustainable growth requires deep market understanding, cultural intelligence, and systems that scale.
              </p>
              <p className="body-regular">
                Based between Rwanda and Kenya, she brings a pan-African perspective to every engagement, helping brands navigate the complexity and opportunity of emerging markets with confidence and strategic precision.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-5 lg:pl-8 lg:border-l border-border">
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wide mb-3">Focus Areas</h4>
                  <ul className="space-y-2 body-regular">
                    <li>Brand Strategy & Positioning</li>
                    <li>Growth & Market Expansion</li>
                    <li>Commercial Systems Design</li>
                    <li>Marketing Leadership</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wide mb-3">Markets</h4>
                  <ul className="space-y-2 body-regular">
                    <li>East Africa</li>
                    <li>West Africa</li>
                    <li>Pan-African</li>
                    <li>Emerging Markets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wide mb-3">Industries</h4>
                  <ul className="space-y-2 body-regular">
                    <li>Clean Energy</li>
                    <li>FMCG</li>
                    <li>Technology</li>
                    <li>Social Enterprise</li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Philosophy
            </p>
            <h2 className="heading-section mb-8">
              My Approach to Branding & Growth
            </h2>
            <div className="space-y-6">
              <div className="card-editorial bg-background">
                <h3 className="heading-card mb-3">Branding is a strategic business function</h3>
                <p className="body-regular">
                  Too often, branding is treated as an aesthetic exercise. I believe brand strategy should be the foundation of business strategy—shaping how you compete, differentiate, and create value in the market.
                </p>
              </div>
              <div className="card-editorial bg-background">
                <h3 className="heading-card mb-3">Growth must be culturally intelligent</h3>
                <p className="body-regular">
                  Expanding across African markets requires more than localization—it requires deep cultural fluency and commercially sound strategies that respect local context while building sustainable business models.
                </p>
              </div>
              <div className="card-editorial bg-background">
                <h3 className="heading-card mb-3">Strategy comes before execution</h3>
                <p className="body-regular">
                  Great execution without strategy is motion without direction. I help organizations build the strategic clarity that makes every marketing investment, brand decision, and growth initiative more effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <h2 className="heading-section mb-6">
              Let's discuss your brand
            </h2>
            <p className="body-large mb-8">
              I work with a select number of clients each year to ensure deep engagement and meaningful impact.
            </p>
            <Button variant="editorial" size="editorial" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

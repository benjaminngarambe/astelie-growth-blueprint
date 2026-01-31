import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import asteliePortrait from "@/assets/astelie-portrait.jpg";

const pillars = [
  {
    title: "Brand Strategy & Positioning",
    description: "Helping brands define who they are, why they matter, and how they win in competitive markets.",
  },
  {
    title: "Growth & Go-To-Market Strategy",
    description: "Designing demand systems, expansion strategies, and commercial models that scale.",
  },
  {
    title: "Marketing Leadership & Advisory",
    description: "Supporting leadership teams with structure, clarity, and execution frameworks.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding min-h-[80vh] flex items-center">
        <div className="container-editorial">
          <div className="flex flex-col items-center text-center">
            {/* Portrait */}
            <div className="mb-10 animate-fade-in">
              <img
                src={asteliePortrait}
                alt="Astelie Ngarambe"
                className="max-h-[500px] md:max-h-[600px] w-auto object-contain shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="max-w-4xl">
              <h1 className="heading-display text-foreground animate-fade-in-up">
                I help brands grow with clarity, strategy, and cultural intelligence.
              </h1>
              <p className="body-large mt-6 max-w-2xl mx-auto animate-fade-in-delay-1">
                Brand Architect & Growth Advisor helping African and global brands scale with purpose.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-10 animate-fade-in-delay-2">
                <Button variant="editorial" size="editorial" asChild>
                  <Link to="/contact">
                    Work With Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="editorial-outline" size="editorial" asChild>
                  <Link to="/experience">View My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container-editorial">
        <div className="divider-subtle" />
      </div>

      {/* What I Do Section */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="mb-12 md:mb-16">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              What I Do
            </p>
            <h2 className="heading-section max-w-2xl">
              Strategic services for brands ready to scale with intention
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className="card-editorial group hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-sm font-medium text-primary mb-4 block">
                  0{index + 1}
                </span>
                <h3 className="heading-card mb-4 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="body-regular">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="editorial-ghost" asChild>
              <Link to="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Credibility Snapshot */}
      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center">
            <div className="divider-subtle mx-auto mb-8" />
            <p className="body-large">
              Astelie Ngarambe is a Brand Architect and Growth Advisor with over a decade of experience building strategic and scalable brand and commercial systems across African markets. She works at the intersection of strategy, culture, and growth.
            </p>
            <div className="mt-10">
              <Button variant="editorial-outline" size="editorial" asChild>
                <Link to="/about">Learn More About Astelie</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Let's Connect
            </p>
            <h2 className="heading-section mb-6">
              Ready to build a brand that scales?
            </h2>
            <p className="body-large mb-8">
              Whether you're launching, scaling, or repositioning, I'd love to hear about your brand and explore how we can work together.
            </p>
            <Button variant="editorial" size="editorial" asChild>
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

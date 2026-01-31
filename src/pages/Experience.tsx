import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import kokoLogo from "@/assets/logos/koko-logo.png";
import jibuLogo from "@/assets/logos/jibu-logo.png";
import zolaLogo from "@/assets/logos/zola-logo.png";
import expLogo from "@/assets/logos/exp-logo.avif";

const experiences = [
  {
    role: "Head of Commercial",
    company: "KOKO Networks",
    period: "Current",
    logo: kokoLogo,
    description: "Leading commercial strategy, demand generation, and growth execution for a clean cooking technology company. Driving scalable distribution systems and market expansion across East African markets.",
    highlights: [
      "Commercial strategy and demand generation leadership",
      "Growth execution across multiple East African markets",
      "Building scalable distribution and retail networks",
    ],
  },
  {
    role: "Head of Marketing & Franchisee Development",
    company: "JIBU",
    period: "Rwanda & DRC",
    logo: jibuLogo,
    description: "Led one of the fastest-growing OPCOs in the JIBU network, overseeing marketing, customer experience, business development, micro-loan programs, and franchisee sales growth across Rwanda and the Democratic Republic of Congo.",
    highlights: [
      "Marketing and customer experience leadership",
      "Micro-loan programs and business development",
      "Franchisee sales growth across two countries",
    ],
  },
  {
    role: "Head of Marketing, West Africa",
    company: "ZOLA Electric",
    period: "Regional",
    logo: zolaLogo,
    description: "Led regional marketing strategy for a Silicon Valley clean energy unicorn, building brand presence and demand generation systems across West African markets.",
    highlights: [
      "Regional marketing strategy for clean energy unicorn",
      "Brand development and market positioning",
      "Demand generation in emerging West African markets",
    ],
  },
  {
    role: "Country Client Service Manager",
    company: "EXP Africa",
    period: "Earlier Career",
    logo: expLogo,
    description: "Managed complex, multi-market brand executions at Africa's largest experiential marketing and demand activation agency, building foundational expertise in brand activation and consumer engagement.",
    highlights: [
      "Multi-market brand execution management",
      "Experiential marketing and demand activation",
      "Foundation in strategic brand activation",
    ],
  },
];

export default function Experience() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4 animate-fade-in">
              Experience
            </p>
            <h1 className="heading-display animate-fade-in-up">
              A decade of building brands and growth systems across Africa
            </h1>
            <p className="body-large mt-6 max-w-2xl animate-fade-in-delay-1">
              Strategic leadership roles focused on brand building, commercial growth, and market expansion in some of Africa's most innovative companies.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-16 md:pb-24">
        <div className="container-editorial">
          <div className="space-y-0">
            {experiences.map((exp, index) => (
              <article 
                key={exp.company}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 border-b border-border last:border-b-0"
              >
                {/* Timeline indicator & Logo */}
                <div className="lg:col-span-3">
                  <div className="flex items-start gap-4 lg:block">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2 lg:mt-0" />
                    <div className="lg:mt-4 space-y-4">
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                      {/* Logo Container */}
                      <div className="bg-white/90 rounded-lg p-4 w-fit">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="h-10 md:h-12 w-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-9 space-y-4">
                  <div>
                    <h2 className="heading-card group-hover:text-primary transition-colors">
                      {exp.role}
                    </h2>
                    <p className="text-lg font-serif text-muted-foreground mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <p className="body-regular max-w-2xl">
                    {exp.description}
                  </p>
                  <ul className="space-y-2 pt-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 body-regular">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section mb-6">
                Interested in working together?
              </h2>
              <p className="body-large">
                I bring this experience to every client engagement—strategic depth, market knowledge, and a commitment to building brands that create real impact.
              </p>
            </div>
            <div className="lg:text-right">
              <Button variant="editorial" size="editorial" asChild>
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

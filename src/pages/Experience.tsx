import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Head of Commercial",
    company: "KOKO Networks",
    period: "Recent",
    description: "Led commercial strategy and market expansion for Africa's leading clean cooking fuel company, building scalable distribution systems and driving growth across East African markets.",
    highlights: [
      "Strategic commercial leadership across multiple markets",
      "Design of scalable distribution and retail networks",
      "Brand positioning for market leadership in clean energy",
    ],
  },
  {
    role: "Head of Marketing & Franchise Development",
    company: "JIBU",
    period: "Rwanda & DRC",
    description: "Built and scaled the marketing function while developing franchise systems across Rwanda and the Democratic Republic of Congo, creating sustainable water access through entrepreneurship.",
    highlights: [
      "Franchise development and market expansion strategy",
      "Brand building for social enterprise impact",
      "Multi-country marketing leadership",
    ],
  },
  {
    role: "Head of Marketing, East & West Africa",
    company: "ZOLA Electric",
    period: "Regional",
    description: "Led regional marketing strategy for off-grid solar energy company, building brand presence and demand generation systems across East and West African markets.",
    highlights: [
      "Regional marketing strategy and execution",
      "Brand development for clean energy sector",
      "Demand generation in emerging markets",
    ],
  },
  {
    role: "Country Client Service Manager",
    company: "EXP Africa",
    period: "Earlier Career",
    description: "Managed client relationships and service delivery for experiential marketing campaigns, building foundational expertise in brand activation and consumer engagement.",
    highlights: [
      "Client relationship management",
      "Experiential marketing execution",
      "Foundation in brand activation",
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
                {/* Timeline indicator */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-4 lg:block">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <div className="lg:mt-3">
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
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

import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Brand Strategy & Positioning",
    forWhom: "Founders, executives, and marketing leaders seeking strategic clarity for their brand.",
    problem: "Your brand lacks differentiation, your positioning feels unclear, or you're struggling to articulate why customers should choose you.",
    outcome: "A clear, compelling brand strategy that defines your market position, value proposition, and competitive advantage—enabling confident decision-making across your organization.",
  },
  {
    number: "02",
    title: "Growth Advisory & Market Expansion",
    forWhom: "Companies expanding into new African markets or scaling within existing ones.",
    problem: "Market entry feels risky, growth has stalled, or you need a strategic roadmap for expansion that accounts for local market dynamics.",
    outcome: "A comprehensive growth strategy with clear market entry frameworks, demand generation systems, and commercial models designed for sustainable scaling.",
  },
  {
    number: "03",
    title: "Marketing Leadership (Fractional / Advisory)",
    forWhom: "Organizations without senior marketing leadership or those needing strategic guidance.",
    problem: "Your marketing lacks strategic direction, your team needs guidance, or you need senior expertise without a full-time hire.",
    outcome: "Strategic marketing leadership that brings structure, clarity, and accountability to your marketing function—accelerating execution and improving results.",
  },
  {
    number: "04",
    title: "Franchise & Go-To-Market Strategy",
    forWhom: "Franchise businesses, multi-location brands, and companies launching new products or services.",
    problem: "Inconsistent brand execution across locations, unclear franchise marketing systems, or launching a new offering without a clear go-to-market plan.",
    outcome: "Scalable franchise systems and go-to-market strategies that ensure brand consistency while empowering local market success.",
  },
  {
    number: "05",
    title: "Workshops, Speaking & Moderation",
    forWhom: "Conferences, corporate events, leadership retreats, and internal strategy sessions.",
    problem: "You need an experienced voice to lead strategic conversations, deliver insights on branding and growth, or facilitate productive strategy sessions.",
    outcome: "Engaging, thoughtful sessions that leave your audience with actionable insights and fresh perspectives on brand building and market growth.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4 animate-fade-in">
              Services
            </p>
            <h1 className="heading-display animate-fade-in-up">
              Strategic services for brands ready to grow with intention
            </h1>
            <p className="body-large mt-6 max-w-2xl animate-fade-in-delay-1">
              I work with founders, executives, and institutions who understand that sustainable growth requires strategic clarity—not just tactical execution.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-16 md:pb-24">
        <div className="container-editorial">
          <div className="space-y-8">
            {services.map((service) => (
              <article 
                key={service.number}
                className="card-editorial group hover:border-primary/30 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Number & Title */}
                  <div className="lg:col-span-4">
                    <span className="text-sm font-medium text-primary block mb-2">
                      {service.number}
                    </span>
                    <h2 className="heading-card group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wide mb-2">Who This Is For</h4>
                      <p className="body-regular">{service.forWhom}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wide mb-2">The Problem</h4>
                      <p className="body-regular">{service.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium uppercase tracking-wide mb-2">The Outcome</h4>
                      <p className="body-regular">{service.outcome}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-section mb-6">
              Ready to start?
            </h2>
            <p className="body-large mb-8">
              Every engagement begins with a conversation. Let's discuss your brand, your goals, and explore how we might work together.
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

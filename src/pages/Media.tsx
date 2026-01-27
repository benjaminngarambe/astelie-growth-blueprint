import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const mediaAppearances = [
  {
    title: "9 Women in 90 Minutes",
    type: "Panel Discussion",
    description: "A conversation on leadership, branding, and navigating growth across African markets.",
    videoId: "JE3-r9VcHMY",
  },
  {
    title: "Marketing Strategy & Brand Building",
    type: "Podcast Interview",
    description: "Astelie shares insights on marketing strategy, growth, and building brands with purpose.",
    videoId: "qDrTI7D78_8",
  },
];

export default function Media() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4 animate-fade-in">
              Media & Speaking
            </p>
            <h1 className="heading-display animate-fade-in-up">
              Sharing insights on brand building and strategic growth
            </h1>
            <p className="body-large mt-6 max-w-2xl animate-fade-in-delay-1">
              Featured conversations, panels, and interviews exploring branding, marketing strategy, and growth in African and emerging markets.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Media */}
      <section className="pb-16 md:pb-24">
        <div className="container-editorial">
          <div className="space-y-12">
            {mediaAppearances.map((media) => (
              <article 
                key={media.videoId}
                className="card-editorial group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Video Embed */}
                  <div className="aspect-video bg-muted overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${media.videoId}`}
                      title={media.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <span className="text-sm font-medium text-primary mb-2">
                      {media.type}
                    </span>
                    <h2 className="heading-card mb-4 group-hover:text-primary transition-colors">
                      {media.title}
                    </h2>
                    <p className="body-regular">
                      {media.description}
                    </p>
                    <div className="mt-6">
                      <a
                        href={`https://www.youtube.com/watch?v=${media.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium uppercase tracking-wide text-foreground hover:text-primary transition-colors"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Inquiry */}
      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Speaking & Events
            </p>
            <h2 className="heading-section mb-6">
              Available for speaking, panels, and podcasts
            </h2>
            <p className="body-large mb-8">
              I speak on topics including brand strategy, growth in African markets, marketing leadership, and building businesses with purpose. Available for conferences, podcasts, corporate events, and moderation.
            </p>
            <div className="space-y-4">
              <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
                <span className="px-4 py-2 border border-border">Keynotes</span>
                <span className="px-4 py-2 border border-border">Panel Discussions</span>
                <span className="px-4 py-2 border border-border">Podcast Interviews</span>
                <span className="px-4 py-2 border border-border">Moderation</span>
                <span className="px-4 py-2 border border-border">Workshops</span>
              </div>
            </div>
            <div className="mt-10">
              <Button variant="editorial" size="editorial" asChild>
                <Link to="/contact">
                  Inquire About Speaking
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

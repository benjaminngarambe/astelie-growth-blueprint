import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I'll be in touch soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4 animate-fade-in">
              Contact
            </p>
            <h1 className="heading-display animate-fade-in-up">
              Let's talk about your brand
            </h1>
            <p className="body-large mt-6 max-w-2xl animate-fade-in-delay-1">
              Whether you're exploring a consulting engagement, seeking a speaker, or interested in collaboration, I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-16 md:pb-24">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium uppercase tracking-wide">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="h-12 border-border focus:border-primary focus:ring-primary"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium uppercase tracking-wide">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="h-12 border-border focus:border-primary focus:ring-primary"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium uppercase tracking-wide">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your brand and how I can help..."
                    rows={6}
                    className="border-border focus:border-primary focus:ring-primary resize-none"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  variant="editorial" 
                  size="editorial"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-5 lg:pl-8 lg:border-l border-border">
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wide mb-3">Inquiries</h4>
                  <p className="body-regular">
                    I'm available for consulting, advisory work, speaking engagements, and strategic partnerships.
                  </p>
                </div>

                <div className="divider-subtle" />

                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wide mb-3">Response Time</h4>
                  <p className="body-regular">
                    I typically respond within 48 hours. For urgent speaking or media inquiries, please indicate in your message.
                  </p>
                </div>

                <div className="divider-subtle" />

                <div>
                  <h4 className="text-sm font-medium uppercase tracking-wide mb-3">Connect</h4>
                  <a 
                    href="https://www.linkedin.com/in/astelie" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium uppercase tracking-wide text-foreground hover:text-primary transition-colors"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="section-padding bg-card">
        <div className="container-editorial">
          <div className="max-w-2xl mx-auto text-center">
            <div className="divider-subtle mx-auto mb-8" />
            <p className="body-large italic font-serif">
              "Great brands aren't built on tactics alone. They're built on strategic clarity, cultural intelligence, and a commitment to creating real value."
            </p>
            <p className="mt-4 text-sm text-muted-foreground uppercase tracking-wide">
              — Astelie Ngarambe
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

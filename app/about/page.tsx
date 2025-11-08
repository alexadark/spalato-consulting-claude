import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Spalato Consulting\'s mission to empower SMBs with practical AI automation solutions without the hype.',
};

const values = [
  {
    title: 'Trust & Transparency',
    description: 'We believe in honest communication and realistic expectations. No overpromising, no hidden fees, no confusing jargon. Just straight talk about what AI can and can\'t do for your business.',
  },
  {
    title: 'Results-Driven Approach',
    description: 'Every automation we build is tied to measurable outcomes. We track time saved, costs reduced, and efficiency gained. If it doesn\'t deliver ROI, we don\'t recommend it.',
  },
  {
    title: 'Client-First Mentality',
    description: 'Your success is our success. We\'re not here to sell you the latest AI trend. We\'re here to solve your actual business problems with practical, proven solutions.',
  },
  {
    title: 'Innovation Without Disruption',
    description: 'AI shouldn\'t require you to overhaul your entire operation. Our solutions integrate seamlessly with your existing processes, enhancing what already works while eliminating what doesn\'t.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Empowering SMBs with AI Without the Hype"
        subtitle="We're on a mission to make AI automation accessible, practical, and profitable for small and medium-sized businesses."
        alignment="center"
      />

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-adriatic-blue mb-8">
            Our Story
          </h2>

          <div className="space-y-6 text-lg text-dark-gray leading-relaxed">
            <p>
              Spalato Consulting was born from a simple observation: while enterprise companies were reaping the benefits of AI automation, small and medium-sized businesses were being left behind.
            </p>

            <p>
              The problem wasn't a lack of technology—it was a lack of accessible, affordable solutions designed for real-world SMB challenges. Too many consultancies were pushing expensive, overcomplicated systems that required complete operational overhauls.
            </p>

            <p>
              We knew there was a better way.
            </p>

            <p>
              Our approach is different. We don't believe in ripping out your existing processes and replacing them with AI for the sake of it. Instead, we identify specific, high-impact opportunities where automation can genuinely save you time and money—without disrupting what already works.
            </p>

            <p className="text-xl font-semibold text-olive-green">
              The result? SMBs that gain the competitive advantages of AI without the enterprise-level headaches or price tags.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-soft-gray">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-adriatic-blue mb-6">
            Our Mission
          </h2>
          <p className="text-2xl text-dark-gray leading-relaxed">
            To democratize AI automation for SMBs by delivering practical, affordable solutions that drive measurable results—without the complexity, disruption, or hype.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-adriatic-blue mb-4">
              Our Values
            </h2>
            <p className="text-lg text-dark-gray">
              These principles guide everything we do—from initial consultation to long-term partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="brutalist-border bg-soft-gray p-8">
                <div className="flex items-start mb-4">
                  <CheckCircleIcon className="w-8 h-8 text-olive-green mr-4 flex-shrink-0" />
                  <h3 className="text-2xl font-serif font-bold text-adriatic-blue">
                    {value.title}
                  </h3>
                </div>
                <p className="text-dark-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-adriatic-blue">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-white mb-8 text-center">
            What Makes Us Different
          </h2>

          <div className="space-y-6 text-lg text-soft-gray">
            <div className="flex items-start">
              <span className="text-warm-coral font-bold text-2xl mr-4">•</span>
              <p>
                <strong className="text-white">No Generic Solutions:</strong> Every automation is custom-built for your specific workflows, systems, and goals.
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-warm-coral font-bold text-2xl mr-4">•</span>
              <p>
                <strong className="text-white">SMB-Focused:</strong> We understand the unique challenges of small and medium businesses—limited budgets, lean teams, and the need for fast ROI.
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-warm-coral font-bold text-2xl mr-4">•</span>
              <p>
                <strong className="text-white">No Disruption:</strong> Our implementations integrate with your existing tools and processes. You keep what works, improve what doesn't.
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-warm-coral font-bold text-2xl mr-4">•</span>
              <p>
                <strong className="text-white">Long-Term Partnership:</strong> We're not a "set it and forget it" vendor. We stay with you, optimizing and scaling as your business grows.
              </p>
            </div>

            <div className="flex items-start">
              <span className="text-warm-coral font-bold text-2xl mr-4">•</span>
              <p>
                <strong className="text-white">Measurable Results:</strong> Every project is tied to clear KPIs. We track the impact and prove the ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-adriatic-blue mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-dark-gray mb-8">
            Let's discuss how AI automation can transform your business—without the complexity or hype.
          </p>
          <Link
            href="/contact"
            className="high-contrast-btn px-8 py-4 text-lg inline-block brutalist-shadow"
          >
            Schedule Your Free Audit
          </Link>
        </div>
      </section>
    </>
  );
}

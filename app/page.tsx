import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { MagnifyingGlassIcon, CogIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <>
      <Hero
        title="Unlock Efficiency: AI Automations That Save Your Business Time and Money"
        subtitle="Tailored AI solutions for SMBs that integrate seamlessly with your existing processes. No disruption, no hype—just measurable results."
        ctaText="Start Your Free Audit"
        ctaLink="/contact"
        alignment="center"
      />

      {/* How We Help Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-adriatic-blue mb-4">
              AI That Gets a Ride on Your Existing Processes
            </h2>
            <p className="text-lg text-dark-gray">
              We don't replace your systems. We enhance them with intelligent automation that works quietly in the background.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<MagnifyingGlassIcon className="w-12 h-12" />}
              title="Audit & Analysis"
              description="We start with a free consultation to map your processes and identify automation opportunities that deliver real ROI."
              link="/services"
            />
            <ServiceCard
              icon={<CogIcon className="w-12 h-12" />}
              title="Custom Implementation"
              description="Tailored AI solutions that integrate with your existing tools and workflows. No cookie-cutter templates."
              link="/services"
            />
            <ServiceCard
              icon={<WrenchScrewdriverIcon className="w-12 h-12" />}
              title="Ongoing Support"
              description="Continuous monitoring, optimization, and scaling as your business grows. We're in it for the long haul."
              link="/services"
            />
          </div>
        </div>
      </section>

      {/* Problem Identification Section */}
      <section className="py-24 bg-soft-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-adriatic-blue mb-4">
              Is Your Business Facing These Challenges?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Manual, repetitive tasks eating up valuable hours',
              'Data scattered across multiple disconnected systems',
              'Missed opportunities due to slow processes',
              'High operational costs that cut into margins',
            ].map((challenge, index) => (
              <div key={index} className="bg-white p-6 brutalist-border">
                <p className="text-dark-gray font-semibold">{challenge}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-olive-green font-semibold mb-6">
              We can help you solve these problems—without disrupting your business.
            </p>
            <a
              href="/contact"
              className="high-contrast-btn px-8 py-4 text-lg inline-block brutalist-shadow"
            >
              Get Your Free Audit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

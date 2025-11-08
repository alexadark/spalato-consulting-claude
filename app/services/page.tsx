import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { MagnifyingGlassIcon, CogIcon, WrenchScrewdriverIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Discover our AI automation services: Audit & Analysis, Custom Implementation, and Ongoing Support. Tailored solutions for your business.',
};

const services = [
  {
    icon: <MagnifyingGlassIcon className="w-16 h-16" />,
    title: 'Audit & Analysis',
    description: 'We begin with a comprehensive free consultation to understand your business processes. Our team maps your workflows, identifies bottlenecks, and pinpoints automation opportunities that deliver measurable ROI. No pressure, no sales pitch—just honest analysis.',
    details: [
      'Free initial consultation (30 minutes)',
      'Process mapping and documentation',
      'Opportunity identification and prioritization',
      'ROI projection and timeline estimates',
      'Detailed automation roadmap',
    ],
  },
  {
    icon: <CogIcon className="w-16 h-16" />,
    title: 'Custom AI Implementation',
    description: 'No cookie-cutter solutions here. We design and build automation systems tailored specifically to your business needs. Our implementations integrate seamlessly with your existing tools and processes, minimizing disruption while maximizing impact.',
    details: [
      'Custom workflow design and development',
      'Integration with existing systems (CRM, ERP, etc.)',
      'Data migration and synchronization',
      'User training and documentation',
      'Pilot testing and refinement',
      'Full deployment and handoff',
    ],
  },
  {
    icon: <WrenchScrewdriverIcon className="w-16 h-16" />,
    title: 'Ongoing Support & Optimization',
    description: 'Automation isn\'t "set it and forget it." As your business evolves, your systems should too. We provide continuous monitoring, maintenance, and optimization to ensure your automations keep delivering value as you grow.',
    details: [
      'Regular performance monitoring',
      'Proactive maintenance and updates',
      'Continuous optimization based on usage data',
      'Priority support and troubleshooting',
      'Quarterly strategy reviews',
      'Scaling support as your business grows',
    ],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We start with a conversation to understand your business, challenges, and goals.',
  },
  {
    number: '02',
    title: 'Audit & Analysis',
    description: 'Our team conducts a thorough analysis of your processes and identifies automation opportunities.',
  },
  {
    number: '03',
    title: 'Solution Design',
    description: 'We design a custom automation solution tailored to your specific needs and budget.',
  },
  {
    number: '04',
    title: 'Implementation',
    description: 'Our developers build and integrate the automation into your existing systems.',
  },
  {
    number: '05',
    title: 'Training & Launch',
    description: 'We train your team and ensure a smooth transition to the new automated workflows.',
  },
  {
    number: '06',
    title: 'Ongoing Optimization',
    description: 'We monitor performance, make improvements, and scale with your business growth.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="AI Solutions Tailored to Your Business"
        subtitle="We don't believe in one-size-fits-all. Every automation we build is designed specifically for your unique processes, systems, and goals."
        ctaText="Get Your Free Audit"
        ctaLink="/contact"
        alignment="center"
      />

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-adriatic-blue mb-4">
              Our Services
            </h2>
            <p className="text-lg text-dark-gray">
              Comprehensive AI automation solutions from initial analysis to ongoing optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="h-full">
                <div className="brutalist-border bg-white p-8 h-full flex flex-col">
                  <div className="text-adriatic-blue mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-serif font-bold text-adriatic-blue mb-4">
                    {service.title}
                  </h3>
                  <p className="text-dark-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-olive-green mb-3">What's included:</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-dark-gray">
                          <span className="text-warm-coral mr-2">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-24 bg-soft-gray">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-adriatic-blue mb-4">
              How It Works
            </h2>
            <p className="text-lg text-dark-gray">
              Our proven process ensures successful automation implementation every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 brutalist-border h-full">
                  <div className="text-6xl font-serif font-bold text-warm-coral opacity-20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-adriatic-blue mb-3">
                    {step.title}
                  </h3>
                  <p className="text-dark-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif font-bold text-adriatic-blue mb-6">
            Transparent, Value-Based Pricing
          </h2>
          <p className="text-lg text-dark-gray mb-8 leading-relaxed">
            We don't believe in surprise bills or hidden fees. Every project starts with a clear scope, timeline, and budget. Our pricing is based on the value we deliver—measured in time saved, costs reduced, and efficiency gained.
          </p>
          <p className="text-lg text-dark-gray mb-8 leading-relaxed">
            Most clients see ROI within 3-6 months. The typical SMB saves 20-30% on operational costs in the first year alone.
          </p>
          <Link
            href="/contact"
            className="high-contrast-btn px-8 py-4 text-lg inline-flex items-center gap-2 brutalist-shadow"
          >
            Get Your Custom Quote
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

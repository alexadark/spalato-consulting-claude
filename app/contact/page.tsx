import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Spalato Consulting for your free AI automation audit. Start saving time and money today.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Let's Transform Your Business Together"
        subtitle="Schedule your free audit and discover how AI automation can save your business time and money."
        alignment="center"
      />

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-bold text-adriatic-blue mb-4">
                  Request Your Free Audit
                </h2>
                <p className="text-lg text-dark-gray">
                  Fill out the form below and we'll get back to you within 24 hours to schedule your personalized audit.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="brutalist-border bg-soft-gray p-8 sticky top-24">
                <h3 className="text-2xl font-serif font-bold text-adriatic-blue mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <EnvelopeIcon className="w-6 h-6 text-warm-coral mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-dark-gray mb-1">Email</p>
                      <a
                        href="mailto:info@spalato-consulting.com"
                        className="text-adriatic-blue hover:text-warm-coral transition-colors"
                      >
                        info@spalato-consulting.com
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start">
                    <ClockIcon className="w-6 h-6 text-warm-coral mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-dark-gray mb-1">Business Hours</p>
                      <p className="text-dark-gray text-sm">Monday - Friday</p>
                      <p className="text-dark-gray text-sm">9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="mt-8 pt-8 border-t-2 border-dark-gray">
                  <h4 className="font-serif font-bold text-adriatic-blue mb-4">
                    What to Expect
                  </h4>
                  <ul className="space-y-3 text-sm text-dark-gray">
                    <li className="flex items-start">
                      <span className="text-warm-coral mr-2 font-bold">1.</span>
                      <span>We'll review your submission within 24 hours</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-coral mr-2 font-bold">2.</span>
                      <span>Schedule a 30-minute discovery call</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-coral mr-2 font-bold">3.</span>
                      <span>Receive a customized automation plan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-coral mr-2 font-bold">4.</span>
                      <span>Start saving time and money</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

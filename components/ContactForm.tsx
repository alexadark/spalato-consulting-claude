'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  companyType: string;
  businessChallenges: string;
  phoneNumber?: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    console.log('Form submitted:', data);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Show success message
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      reset();
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="brutalist-border bg-olive-green p-8 text-center">
        <h3 className="text-2xl font-serif font-bold text-white mb-4">
          Thank You!
        </h3>
        <p className="text-white text-lg">
          We've received your information and will be in touch within 24 hours to schedule your free audit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* First Name & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-dark-gray mb-2">
            First Name <span className="text-warm-coral">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            {...register('firstName', {
              required: 'First name is required',
              minLength: { value: 2, message: 'First name must be at least 2 characters' }
            })}
            className={`w-full px-4 py-3 brutalist-border bg-white text-dark-gray focus:outline-none focus:border-warm-coral transition-colors ${
              errors.firstName ? 'border-warm-coral' : ''
            }`}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-warm-coral font-semibold">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-dark-gray mb-2">
            Last Name <span className="text-warm-coral">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            {...register('lastName', {
              required: 'Last name is required',
              minLength: { value: 2, message: 'Last name must be at least 2 characters' }
            })}
            className={`w-full px-4 py-3 brutalist-border bg-white text-dark-gray focus:outline-none focus:border-warm-coral transition-colors ${
              errors.lastName ? 'border-warm-coral' : ''
            }`}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-warm-coral font-semibold">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Company Name */}
      <div>
        <label htmlFor="companyName" className="block text-sm font-semibold text-dark-gray mb-2">
          Company Name <span className="text-warm-coral">*</span>
        </label>
        <input
          type="text"
          id="companyName"
          {...register('companyName', {
            required: 'Company name is required',
            minLength: { value: 2, message: 'Company name must be at least 2 characters' }
          })}
          className={`w-full px-4 py-3 brutalist-border bg-white text-dark-gray focus:outline-none focus:border-warm-coral transition-colors ${
            errors.companyName ? 'border-warm-coral' : ''
          }`}
        />
        {errors.companyName && (
          <p className="mt-1 text-sm text-warm-coral font-semibold">{errors.companyName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-dark-gray mb-2">
          Email <span className="text-warm-coral">*</span>
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className={`w-full px-4 py-3 brutalist-border bg-white text-dark-gray focus:outline-none focus:border-warm-coral transition-colors ${
            errors.email ? 'border-warm-coral' : ''
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-warm-coral font-semibold">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Number (Optional) */}
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-semibold text-dark-gray mb-2">
          Phone Number <span className="text-sm text-gray-500">(Optional)</span>
        </label>
        <input
          type="tel"
          id="phoneNumber"
          {...register('phoneNumber')}
          className="w-full px-4 py-3 brutalist-border bg-white text-dark-gray focus:outline-none focus:border-warm-coral transition-colors"
        />
      </div>

      {/* Type of Company */}
      <div>
        <label htmlFor="companyType" className="block text-sm font-semibold text-dark-gray mb-2">
          Type of Company <span className="text-warm-coral">*</span>
        </label>
        <select
          id="companyType"
          {...register('companyType', { required: 'Please select a company type' })}
          className={`w-full px-4 py-3 brutalist-border bg-white text-dark-gray focus:outline-none focus:border-warm-coral transition-colors ${
            errors.companyType ? 'border-warm-coral' : ''
          }`}
        >
          <option value="">Select your industry...</option>
          <option value="retail">Retail</option>
          <option value="services">Services</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="healthcare">Healthcare</option>
          <option value="technology">Technology</option>
          <option value="finance">Finance</option>
          <option value="education">Education</option>
          <option value="hospitality">Hospitality</option>
          <option value="other">Other</option>
        </select>
        {errors.companyType && (
          <p className="mt-1 text-sm text-warm-coral font-semibold">{errors.companyType.message}</p>
        )}
      </div>

      {/* Business Challenges */}
      <div>
        <label htmlFor="businessChallenges" className="block text-sm font-semibold text-dark-gray mb-2">
          Business Challenges <span className="text-warm-coral">*</span>
        </label>
        <textarea
          id="businessChallenges"
          rows={5}
          {...register('businessChallenges', {
            required: 'Please describe your business challenges',
            minLength: { value: 20, message: 'Please provide at least 20 characters' }
          })}
          className={`w-full px-4 py-3 brutalist-border bg-white text-dark-gray focus:outline-none focus:border-warm-coral transition-colors resize-none ${
            errors.businessChallenges ? 'border-warm-coral' : ''
          }`}
          placeholder="Tell us about the challenges you're facing and what you hope to achieve..."
        />
        {errors.businessChallenges && (
          <p className="mt-1 text-sm text-warm-coral font-semibold">{errors.businessChallenges.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full high-contrast-btn px-8 py-4 text-lg brutalist-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Audit my company now'}
        </button>
      </div>
    </form>
  );
}

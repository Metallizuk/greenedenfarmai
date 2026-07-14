'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Navbar } from '@/components/site/navbar'
import { Reveal } from '@/components/site/reveal'
import { Footer } from '@/components/site/footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Get in Touch
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Have questions about our solutions? Want to schedule a consultation?
                We&apos;d love to hear from you. Reach out to our team today.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <Reveal direction="right">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Contact Information
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Reach out to us through any of these channels. We typically
                    respond within 24 hours.
                  </p>

                  <div className="mt-8 space-y-6">
                    <a
                      href="tel:+254123456789"
                      className="flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-secondary"
                    >
                      <div className="mt-1 rounded-full bg-primary/10 p-3">
                        <Phone className="size-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <p className="text-muted-foreground">+254 (0) 123 456 789</p>
                      </div>
                    </a>

                    <a
                      href="mailto:hello@greenedenfarmsai.com"
                      className="flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-secondary"
                    >
                      <div className="mt-1 rounded-full bg-primary/10 p-3">
                        <Mail className="size-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <p className="text-muted-foreground">
                          hello@greenedenfarmsai.com
                        </p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 rounded-lg p-4">
                      <div className="mt-1 rounded-full bg-primary/10 p-3">
                        <MapPin className="size-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Office</p>
                        <p className="text-muted-foreground">
                          Nairobi, Kenya
                          <br />
                          Regional offices across Africa
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="mt-12 space-y-4">
                    <h3 className="font-semibold text-foreground">Quick Links</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        <a href="/" className="hover:text-foreground transition-colors">
                          → Back to Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="/solutions"
                          className="hover:text-foreground transition-colors"
                        >
                          → Explore Solutions
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about"
                          className="hover:text-foreground transition-colors"
                        >
                          → Learn About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Reveal>

              {/* Contact Form */}
              <Reveal direction="left" delay={0.1}>
                <div className="rounded-2xl border border-border bg-secondary p-8 sm:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="+254 (0) 123 456 789"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground"
                      >
                        Farm / Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Your Farm Name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Tell us about your needs and how we can help..."
                      />
                    </div>

                    {submitted && (
                      <div className="rounded-lg bg-primary/10 p-4 text-sm text-primary">
                        Thank you! We received your message and will get back to you
                        shortly.
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full rounded-full bg-primary px-6 py-3 text-center font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </Reveal>

            <div className="mt-12 space-y-6">
              {[
                {
                  q: 'How quickly can I get started?',
                  a: 'Most farmers can be onboarded and using our platform within 1-2 weeks. We provide full training and support.',
                },
                {
                  q: 'Do you offer customized solutions?',
                  a: 'Yes, we tailor our solutions to your specific crop, region, and farm size. Contact our team to discuss your needs.',
                },
                {
                  q: 'What kind of support do you provide?',
                  a: 'We offer 24/7 technical support, agronomist consultations, and regular training updates to all our users.',
                },
                {
                  q: 'Is the technology suitable for small farms?',
                  a: 'Absolutely. Our solutions are scalable and designed for farms of all sizes, from smallholders to commercial operations.',
                },
              ].map((faq, i) => (
                <Reveal key={faq.q} direction="up" delay={i * 0.06}>
                  <div className="rounded-xl bg-background p-6">
                    <h3 className="font-semibold text-foreground">{faq.q}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {faq.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

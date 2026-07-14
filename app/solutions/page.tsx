import { Navbar } from '@/components/site/navbar'
import { Reveal } from '@/components/site/reveal'
import { Solutions } from '@/components/site/solutions'
import { CTA } from '@/components/site/cta'
import { Footer } from '@/components/site/footer'

export const metadata = {
  title: 'Solutions | Green Eden Farms',
  description:
    'Explore our comprehensive suite of smart farming solutions including precision agriculture, AI analytics, IoT monitoring, and more.',
}

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Smart Farming Solutions
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                From precision drones to AI-powered analytics, discover the complete
                platform designed to help modern farms increase yields, reduce costs,
                and operate sustainably.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Solutions Grid */}
        <Solutions />

        {/* Detailed Features */}
        <section className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
                Why Choose Our Solutions?
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'End-to-End Integration',
                  desc: 'All our solutions work seamlessly together on one platform, eliminating silos and data fragmentation.',
                },
                {
                  title: 'AI-Powered Insights',
                  desc: 'Machine learning models deliver predictive analytics that help you make better decisions faster.',
                },
                {
                  title: 'Real-Time Monitoring',
                  desc: 'Stay connected to every aspect of your farm with instant alerts and continuous performance tracking.',
                },
                {
                  title: 'Scalable Technology',
                  desc: 'Whether you farm 5 acres or 5,000, our solutions scale to your operation.',
                },
                {
                  title: 'Expert Support',
                  desc: 'Access to agricultural specialists and technical support available whenever you need guidance.',
                },
                {
                  title: 'Sustainable Impact',
                  desc: 'Reduce water usage, chemical inputs, and carbon footprint while improving productivity.',
                },
              ].map((feature, i) => (
                <Reveal key={feature.title} direction="up" delay={i * 0.06}>
                  <div className="rounded-2xl bg-background p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </div>
      <Footer />
    </main>
  )
}

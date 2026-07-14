import { Navbar } from '@/components/site/navbar'
import { Reveal } from '@/components/site/reveal'
import { CTA } from '@/components/site/cta'
import { Footer } from '@/components/site/footer'

export const metadata = {
  title: 'About Us | Green Eden Farms',
  description:
    'Learn about Green Eden Farms mission to transform agriculture through sustainable practices and cutting-edge technology.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Our Story
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Green Eden Farms is a mission-driven agritech company dedicated to
                transforming agriculture through innovation, sustainability, and
                technology. We believe that every farmer deserves access to the tools
                and knowledge needed to thrive.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <Reveal direction="right">
                <div>
                  <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                    Our Mission
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    To empower farmers worldwide with intelligent, sustainable
                    agriculture solutions that increase productivity, reduce
                    environmental impact, and ensure long-term food security for
                    generations to come.
                  </p>
                </div>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
                <div>
                  <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                    Our Vision
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    A world where agriculture is climate-smart, data-driven, and
                    accessible to farmers of all scales. Where technology and
                    tradition work together to feed the planet while protecting it
                    for future generations.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
                Our Core Values
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Innovation',
                  desc: 'We continuously push boundaries to develop cutting-edge solutions that solve real farming challenges.',
                },
                {
                  title: 'Sustainability',
                  desc: 'Every solution is designed to protect our environment and create a positive impact for future generations.',
                },
                {
                  title: 'Accessibility',
                  desc: 'We believe technology should be affordable and available to farmers everywhere, regardless of scale.',
                },
                {
                  title: 'Integrity',
                  desc: 'We operate with transparency and honesty in all our dealings with farmers, partners, and stakeholders.',
                },
                {
                  title: 'Collaboration',
                  desc: 'We work closely with farmers, scientists, and partners to co-create solutions that truly matter.',
                },
                {
                  title: 'Impact',
                  desc: 'Our ultimate measure of success is the positive difference we make in farming communities worldwide.',
                },
              ].map((value, i) => (
                <Reveal key={value.title} direction="up" delay={i * 0.06}>
                  <div className="rounded-2xl bg-background p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {value.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <div className="text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Meet Our Team
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground">
                  Our diverse team brings together expertise in agriculture,
                  technology, data science, and sustainability to drive innovation
                  in farming.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <CTA />
      </div>
      <Footer />
    </main>
  )
}

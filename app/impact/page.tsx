import { Navbar } from '@/components/site/navbar'
import { Reveal } from '@/components/site/reveal'
import { CTA } from '@/components/site/cta'
import { Footer } from '@/components/site/footer'

export const metadata = {
  title: 'Impact | Green Eden Farms',
  description:
    'Discover the real-world impact Green Eden Farms is making in agriculture, sustainability, and farmer livelihoods.',
}

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Our Impact
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                We measure our success not in features or revenue, but in the lives
                we improve and the planet we protect. Here&apos;s what we&apos;ve
                accomplished together.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  metric: '50K+',
                  label: 'Farmers Reached',
                  desc: 'Active users benefiting from our solutions across multiple continents',
                },
                {
                  metric: '2.5M',
                  label: 'Acres Optimized',
                  desc: 'Land area managed with our smart farming technology',
                },
                {
                  metric: '35%',
                  label: 'Yield Increase',
                  desc: 'Average improvement in crop productivity for our users',
                },
                {
                  metric: '1.2M',
                  label: 'Tons CO₂ Saved',
                  desc: 'Carbon emissions reduced through sustainable practices',
                },
              ].map((item, i) => (
                <Reveal key={item.label} direction="up" delay={i * 0.08}>
                  <div className="rounded-2xl border border-border p-6 sm:p-8">
                    <p className="text-4xl font-bold text-primary sm:text-5xl">
                      {item.metric}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="bg-secondary py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl lg:text-5xl">
                Key Achievements
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              {[
                {
                  title: 'Water Conservation',
                  desc: 'Our smart irrigation systems have saved over 5 billion liters of water annually, helping farmers adapt to climate change.',
                },
                {
                  title: 'Income Growth',
                  desc: 'Farmers using our platform report an average income increase of 40%, significantly improving their livelihoods.',
                },
                {
                  title: 'Disease Prevention',
                  desc: 'Early detection AI has prevented crop losses worth millions, protecting food security and farmer investments.',
                },
                {
                  title: 'Post-Harvest Efficiency',
                  desc: 'Solar cold storage solutions have reduced food waste by 60%, getting more nutritious food to markets.',
                },
                {
                  title: 'Youth Engagement',
                  desc: 'Our technology platform has attracted over 10,000 young farmers back to agriculture with modern tools.',
                },
                {
                  title: 'Environmental Recovery',
                  desc: 'Precision farming practices have improved soil health across 500,000+ acres, restoring degraded lands.',
                },
              ].map((achievement, i) => (
                <Reveal
                  key={achievement.title}
                  direction={i % 2 === 0 ? 'right' : 'left'}
                  delay={i * 0.05}
                >
                  <div className="rounded-2xl bg-background p-6 sm:p-8">
                    <h3 className="text-xl font-semibold text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {achievement.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-background py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal direction="up">
              <div className="text-center">
                <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Farmer Stories
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground">
                  Real stories from farmers whose lives have been transformed by our
                  solutions.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'James Kiplagat',
                  role: 'Vegetable Farmer',
                  quote:
                    'With Green Eden Farms technology, my vegetable yields doubled and I reduced water usage by 50%. This has changed my family\'s future.',
                },
                {
                  name: 'Maria Santos',
                  role: 'Coffee Producer',
                  quote:
                    'The AI insights helped me detect diseases early. I saved my entire harvest and now my farm is more profitable than ever.',
                },
                {
                  name: 'Rajesh Patel',
                  role: 'Cotton Farmer',
                  quote:
                    'The precision recommendations reduced my input costs dramatically while improving quality. Best decision I made this year.',
                },
              ].map((testimonial, i) => (
                <Reveal key={testimonial.name} direction="up" delay={i * 0.08}>
                  <div className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                    <p className="text-foreground italic">"{testimonial.quote}"</p>
                    <p className="mt-4 font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
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

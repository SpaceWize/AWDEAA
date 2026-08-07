import { motion } from 'framer-motion';
import EventsCalendar from '../components/EventsCalendar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import ScrollScrubVideo from '../components/ScrollScrubVideo';
import ScrollReveal from '../components/ScrollReveal';
import StaggerContainer, { staggerChild } from '../components/StaggerContainer';
import { Link } from '../lib/router';
import { outlineButton, primaryButton, sectionTitle } from '../lib/styles';

const offers = [
  { title: 'Concerts', body: 'Live music from local venues to arena headliners.' },
  {
    title: 'Festivals',
    body: 'Seasonal and cultural festivals across the Lower Mainland.',
  },
  {
    title: 'Sporting Events',
    body: 'Games and matches with accessible seating arrangements.',
  },
];

const Home = () => (
  <>
    <Hero />

    {/* Flat off-white on purpose: the drifting bubbles are reserved for the
        hero and How it works, so the founder's story reads against plain
        paper between them. */}
    <section id="about" className="bg-[var(--color-paper)] px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <ScrollReveal direction="left">
          <h2 className={`mb-6 ${sectionTitle}`}>What we are about</h2>
          <p className="mb-8 text-lg leading-relaxed text-stone-700">
            AWDEA was conceptualized by James Willetts, a quadriplegic, who
            recognized that many in the disabled community are shut out of the
            entertainment happening all around them. We exist to close that gap.
          </p>
          <Link to="/bios" className={outlineButton}>
            Meet our team
          </Link>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.15}>
          <ScrollScrubVideo
            src="media/about-conversation.mp4"
            poster="media/about-conversation-poster.jpg"
            label="People seated together in an accessible seating area at a live event, talking and smiling"
            aspect="aspect-video"
          />
        </ScrollReveal>
      </div>
    </section>

    {/* Full-bleed coral rather than the dark slab, and wide rows instead of
        three boxes — gives the page one loud moment without a colour that
        appears nowhere else in AWDEA's branding. */}
    <section className="bg-[var(--color-brand)] px-6 py-24 text-white md:px-12">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal className="mb-14 max-w-2xl">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
            What we offer
          </h2>
          <p className="text-lg leading-relaxed text-white">
            Register with AWDEA and you can win{' '}
            <span className="font-semibold underline decoration-white/50 underline-offset-4">
              free and discounted tickets
            </span>{' '}
            to entertainment events near you.
          </p>
        </ScrollReveal>

        <StaggerContainer className="divide-y divide-white/20 border-y border-white/20">
          {offers.map((offer) => (
            <motion.article
              key={offer.title}
              variants={staggerChild}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid gap-2 py-8 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-10"
            >
              <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                {offer.title}
              </h3>
              <p className="text-lg leading-relaxed text-white">{offer.body}</p>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>

    <HowItWorks />

    <EventsCalendar />

    <section className="px-6 py-24 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className={`mb-6 ${sectionTitle}`}>Get involved</h2>
          <p className="mb-10 text-lg leading-relaxed text-stone-700">
            Support our mission by donating tickets, making a financial
            contribution, or simply spreading the word.
          </p>
          <Link to="/donate" className={primaryButton}>
            How to donate
          </Link>
        </ScrollReveal>
      </div>
    </section>

    <section className="bg-[var(--color-mist)] px-6 py-24 md:px-12">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <ScrollReveal direction="left">
          <ScrollScrubVideo
            src="media/ramp-wheelchair.mp4"
            poster="media/ramp-wheelchair-poster.jpg"
            label="A wheelchair user propelling themselves along a wooden boardwalk, gloved hand gripping the wheel rim"
            aspect="aspect-square"
            className="mx-auto w-full max-w-md"
            // Last section on the page — the default range would leave the
            // final third of the clip unreachable before the footer stops us.
            endAt="center"
          />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={0.15}>
          <h2 className={`mb-6 ${sectionTitle}`}>Accessible venues</h2>
          <p className="text-lg leading-relaxed text-stone-700">
            Exploring accessible venues and locations for disabled adults opens up
            a world of inclusive opportunity.
          </p>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Home;

import { motion } from 'framer-motion';
import AmbientBackdrop from './AmbientBackdrop';
import ScrollReveal from './ScrollReveal';
import StaggerContainer, { staggerChild } from './StaggerContainer';

const steps = [
  {
    num: '01',
    title: 'Sign Up',
    description: 'Create your free AWDEA account.',
    note: 'Eligibility is restricted to disabled adults aged 19+.',
  },
  {
    num: '02',
    title: 'Register for an Event',
    description: "Browse what's available on the Raffle Events page and enter.",
  },
  {
    num: '03',
    title: 'Wait for the Raffle',
    description: 'Draws happen two weeks before each event date.',
  },
  {
    num: '04',
    title: 'Receive Your Tickets',
    description:
      'Winners get an email with their tickets roughly two weeks before the event.',
  },
];

const HowItWorks = () => (
  <section
    id="how-it-works"
    className="relative overflow-hidden bg-[var(--color-mist)] px-6 py-24 md:px-12"
  >
    <AmbientBackdrop />
    <div className="relative mx-auto max-w-6xl">
      <ScrollReveal className="mb-16 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-brand-deep)]">
          Coming soon
        </p>
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-stone-900 md:text-5xl">
          How it works
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-stone-700">
          Four steps between you and a night out.
        </p>
      </ScrollReveal>

      {/* Vertical timeline rather than a row of cards: the steps happen in
          sequence over weeks, and a top-to-bottom rail reads as time passing
          in a way four side-by-side boxes don't. */}
      <StaggerContainer className="relative mx-auto max-w-3xl">
        <span
          aria-hidden="true"
          className="absolute left-6 top-4 bottom-4 w-px bg-[var(--color-brand)]/25 md:left-8"
        />
        {steps.map((step, idx) => (
          <motion.article
            key={step.num}
            variants={staggerChild}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex gap-6 pb-12 last:pb-0 md:gap-8"
          >
            <span
              aria-hidden="true"
              className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[var(--color-brand)] text-lg font-extrabold tracking-tight text-white ring-8 ring-[var(--color-mist)] md:h-16 md:w-16 md:text-2xl"
            >
              {step.num}
            </span>
            <div className="pt-1.5 md:pt-3">
              <h3 className="mb-2 text-xl font-bold text-stone-900 md:text-2xl">
                {/* The numeral is decorative; screen readers get the step order
                    from here instead. */}
                <span className="sr-only">{`Step ${idx + 1} of ${steps.length}: `}</span>
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-stone-700 md:text-lg">
                {step.description}
              </p>
              {step.note && (
                <p className="mt-3 text-sm text-stone-700">{step.note}</p>
              )}
            </div>
          </motion.article>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

export default HowItWorks;

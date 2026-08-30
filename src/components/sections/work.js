import React from 'react';
import styled from 'styled-components';
import {
  Section,
  SectionStack,
  SectionHead,
  Kicker,
  SectionTitle,
  SectionLede,
  Rows,
  Tag,
  TagRow,
  Frame,
} from '../ui';

import tourhub from '@images/work/tourhub.jpg';
import swishtag from '@images/work/swishtag.jpg';
import icashcars from '@images/work/icashcars.png';
import traders from '@images/work/traders.png';
import hrPortal from '@images/work/hr-portal.png';
import statusReport from '@images/work/status-report.png';
import familytime from '@images/work/familytime.png';
import bakertown from '@images/work/bakertown.png';

const projects = [
  {
    kind: 'Marketplace',
    meta: 'Mine · 2024–Present',
    title: 'TourHub',
    body: 'Every tour in Pakistan in one place. A crawler reads operator websites, an LLM turns each tour page into a structured listing, and it only publishes itself once it clears every quality gate. Anything the model is unsure about waits for me in a review queue. Roughly 4,000 trips from 200 operators so far.',
    metric: '10K',
    metricLabel: 'Unique page views so far',
    tech: ['Laravel', 'Vue 3', 'Inertia.js', 'Filament', 'Meilisearch', 'OpenAI'],
    image: tourhub,
    alt: 'The TourHub homepage, showing tour search and popular destinations',
  },
  {
    kind: 'Commerce platform',
    meta: 'SwishTag · 2023–2024',
    title: 'SwishTag',
    body: 'A promotional products platform built on Shopify. Decorators and suppliers run production, orders, punchout catalogues and print on demand through it. I built the AI chatbot that answers order and product questions, and white-label Shopify apps for their clients.',
    metric: '−20%',
    metricLabel: 'On support tickets, once the chatbot was in',
    tech: ['Laravel', 'PHP', 'Shopify', 'OpenAI', 'Docker', 'Kubernetes'],
    image: swishtag,
    alt: 'The SwishTag promotional products platform',
  },
  {
    kind: 'Platform',
    meta: 'iCashCars · 2021–2023',
    title: 'iCashCars',
    body: 'You put in your registration and a few details about the car, and it comes back with a valuation. Then you send photos and paperwork through the portal, or over WhatsApp or email if you would rather, and it gets you in front of buyers.',
    metric: '+20%',
    metricLabel: 'On conversions, after the SEO and site work',
    tech: ['AWS', 'Laravel', 'PHP', 'Vue 3', 'Inertia.js'],
    image: icashcars,
    alt: 'The iCashCars vehicle valuation site',
  },
  {
    kind: 'Portal',
    meta: 'iCashCars · 2021–2023',
    title: 'Traders Dashboard',
    body: 'Where traders manage their vehicles, bids and purchases, and dig back through what they have bought before. New stock and updates on anything they are watching go out by email and WhatsApp, so they do not have to sit refreshing the page.',
    metric: '+40%',
    metricLabel: 'On operational efficiency across both portals',
    tech: ['AWS', 'Laravel', 'Vue 3', 'Inertia.js', 'Algolia'],
    image: traders,
    alt: 'The Traders Dashboard vehicle listing screen',
  },
  {
    kind: 'Internal tool',
    meta: 'iCashCars · 2021–2023',
    title: 'HR Portal',
    body: 'This one I built from nothing. Attendance, breaks, holidays, shift rotas, a company wiki, notifications that go to everyone. Profiles and feedback too. It is not the kind of thing anyone puts in a portfolio, but HR used it every single day.',
    metric: '−25%',
    metricLabel: 'On the manual work in HR and driver management',
    tech: ['AWS', 'Laravel', 'PHP', 'Vue 3', 'Inertia.js'],
    image: hrPortal,
    alt: 'The HR Portal employee management screen',
  },
  {
    kind: 'Monitoring',
    meta: 'iCashCars · 2021–2023',
    title: 'Status Report',
    body: 'It watches and logs every auxiliary and third party service we depended on. The point was simple. Support should find out something is down from us, not from a customer ringing in to tell them.',
    metric: '−35%',
    metricLabel: 'On downtime, once the automated side was in',
    tech: ['AWS', 'Laravel', 'Vue 3', 'WhatsApp API', 'Dial9', 'Zapier'],
    image: statusReport,
    alt: 'The Status Report service monitoring dashboard',
  },
  {
    kind: 'Consumer app',
    meta: 'YumyApps · 2019–2021',
    title: 'FamilyTime',
    body: 'A parental control app. Location, internet use, phone logs, app blocking, geo-fencing, all of it feeding live back to the parent app. I ran the full revamp, which meant the interface and the security both got pulled apart and rebuilt.',
    metric: '+35%',
    metricLabel: 'On user engagement after the revamp',
    tech: ['Laravel', 'Lumen', 'PHP', 'JavaScript'],
    image: familytime,
    alt: 'The FamilyTime parental control app',
  },
  {
    kind: 'E-commerce',
    meta: 'YumyApps · 2019–2021',
    title: 'BakerTown',
    body: 'A marketplace for bakers. They handle their products, orders and deliveries in a seller app and an admin panel, and buyers browse and order from a separate mobile app. Three clients, one Laravel backend underneath the lot.',
    metric: '3',
    metricLabel: 'Apps running off the same backend',
    tech: ['Laravel', 'PHP', 'Stripe', 'Firebase', 'APNs', 'OAuth'],
    image: bakertown,
    alt: 'The BakerTown e-commerce storefront',
  },
];

const WorkRow = styled.article`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  align-items: center;
  gap: 56px;
  padding-block: 72px;
  border-top: 1px solid var(--n-300);

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 32px;
    padding-block: 56px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

const MetaDate = styled.span`
  color: var(--n-600);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Title = styled.h3`
  font-size: 32px;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const Body = styled.p`
  max-width: 46ch;
  color: var(--n-700);
  font-size: 17px;
  line-height: 1.6;
`;

const Metric = styled.div`
  display: flex;
  align-items: baseline;
  gap: 14px;
`;

const MetricNum = styled.span`
  flex: none;
  color: var(--accent-text);
  font-family: var(--font-display);
  font-size: 30px;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

const MetricLabel = styled.span`
  color: var(--n-700);
  font-size: 15px;
  line-height: 1.4;
`;

const WorkFrame = styled(Frame)`
  height: 340px;

  @media (max-width: 900px) {
    height: 280px;
  }
`;

const Work = () => (
  <Section id="work">
    <SectionStack $tight>
      <SectionHead>
        <Kicker>Selected work</Kicker>
        <SectionTitle>Some of what I&rsquo;ve built.</SectionTitle>
        <SectionLede>
          Eight of the ones I can show. All still running, with staff or customers in them every
          day.
        </SectionLede>
      </SectionHead>

      <Rows>
        {projects.map(p => (
          <WorkRow key={p.title}>
            <Text>
              <Meta>
                <Tag>{p.kind}</Tag>
                <MetaDate>{p.meta}</MetaDate>
              </Meta>
              <Title>{p.title}</Title>
              <Body>{p.body}</Body>
              <Metric>
                <MetricNum>{p.metric}</MetricNum>
                <MetricLabel>{p.metricLabel}</MetricLabel>
              </Metric>
              <TagRow>
                {p.tech.map(t => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </TagRow>
            </Text>
            <WorkFrame>
              <img src={p.image} alt={p.alt} loading="lazy" />
            </WorkFrame>
          </WorkRow>
        ))}
      </Rows>
    </SectionStack>
  </Section>
);

export default Work;

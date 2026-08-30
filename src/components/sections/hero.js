import React from 'react';
import styled from 'styled-components';
import { email, resume, stats } from '@config';
import {
  Section,
  Container,
  Blob,
  Frame,
  StatusPill,
  StatusDot,
  PrimaryButton,
  GhostButton,
} from '../ui';
import headshot from '@images/me.png';

const StyledHero = styled(Section)`
  overflow: hidden;
`;

const Inner = styled(Container)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 96px;

  @media (max-width: 900px) {
    gap: 72px;
  }
`;

const HeroBlob = styled(Blob)`
  top: -340px;
  right: -280px;
  width: 620px;
  height: 620px;

  @media (max-width: 680px) {
    top: -250px;
    right: -200px;
    width: 420px;
    height: 420px;
  }
`;

/* Copy carries the column; the headshot rides alongside it until the layout stacks. */
const Lead = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  align-items: center;
  gap: 64px;

  @media (max-width: 1080px) {
    grid-template-columns: minmax(0, 1fr) 240px;
    gap: 48px;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 48px;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 960px;
`;

const Portrait = styled(Frame)`
  aspect-ratio: 1 / 1;

  @media (max-width: 900px) {
    max-width: 260px;
  }
`;

/* Two-tier heading: the name carries the h1 size, the thesis sits under it. */
const Title = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/* No max-width: the cap, not the size, was forcing the wrap. The floor is set
   so the full name still holds one line at 320px. Verified by measurement. */
const Name = styled.span`
  font-size: clamp(24px, 6.2vw, 80px);
  line-height: 1;
  letter-spacing: -0.03em;
`;

const Tagline = styled.span`
  color: var(--n-700);
  font-size: clamp(24px, 3.2vw, 34px);
  line-height: 1.15;
  letter-spacing: -0.02em;
  text-wrap: balance;

  em {
    color: var(--accent);
    font-style: normal;
  }
`;

const Lede = styled.p`
  max-width: 52ch;
  color: var(--n-800);
  font-size: 20px;
  line-height: 1.6;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px 16px;
`;

const StatBand = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;
  padding-block: 56px;
  border-top: 1px solid var(--n-300);
  border-bottom: 1px solid var(--n-300);

  @media (max-width: 680px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px 24px;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StatNum = styled.span`
  color: var(--accent);
  font-family: var(--font-display);
  font-size: clamp(36px, 4vw, 52px);
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  line-height: 1;
`;

const StatLabel = styled.span`
  max-width: 28ch;
  color: var(--n-700);
  font-size: 14.5px;
  line-height: 1.4;
`;

const Hero = () => (
  <StyledHero>
    <HeroBlob aria-hidden="true" />
    <Inner>
      <Lead>
        <Copy>
          <StatusPill>
            <StatusDot aria-hidden="true" />
            Contracting full time &middot; Building TourHub
          </StatusPill>

          <Title>
            <Name>Zille Muhammad Jafary.</Name>
            <Tagline>
              but if that&rsquo;s a mouthful, just go with <em>Jerry</em>.
            </Tagline>
          </Title>

          <Lede>
            Most of what I build sits behind a login. CRMs, HR systems, trader dashboards, the tools
            people have open all day. I&rsquo;ve been at it since 2017, mostly Laravel and Vue.
            Since November 2024 I&rsquo;ve been contracting full time and putting the rest of my
            hours into TourHub, which is mine. Think Uber Eats, but for tours.
          </Lede>

          <Actions>
            <PrimaryButton href={resume} target="_blank" rel="noreferrer">
              Read my r&eacute;sum&eacute;
            </PrimaryButton>
            <GhostButton href={`mailto:${email}`}>{email}</GhostButton>
          </Actions>
        </Copy>

        <Portrait>
          <img src={headshot} alt="Zille Muhammad Jafary" />
        </Portrait>
      </Lead>

      <StatBand>
        {stats.map(({ value, label }) => (
          <Stat key={label}>
            <StatNum>{value}</StatNum>
            <StatLabel>{label}</StatLabel>
          </Stat>
        ))}
      </StatBand>
    </Inner>
  </StyledHero>
);

export default Hero;

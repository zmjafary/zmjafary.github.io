import React from 'react';
import styled from 'styled-components';
import { approach } from '@config';
import { Section, SectionStack, SectionHead, Kicker, SectionTitle, SectionLede, Blob } from '../ui';

/* The one inverted band on the page. */
const Band = styled(Section)`
  overflow: hidden;
  background: var(--band);
  color: var(--band-ink);
`;

const Stack = styled(SectionStack)`
  position: relative;
  z-index: 1;

  ${Kicker} {
    color: var(--accent-bright);
  }

  ${SectionTitle} {
    color: var(--band-ink);
  }

  ${SectionLede} {
    color: color-mix(in oklch, var(--band-ink) 78%, transparent);
  }
`;

const BandBlob = styled(Blob)`
  bottom: -240px;
  left: -180px;
  width: 480px;
  height: 480px;
`;

const Reasons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4px 72px;

  @media (max-width: 1080px) {
    gap: 4px 48px;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Reason = styled.div`
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  padding-block: 44px;
  border-top: 1px solid color-mix(in oklch, var(--band-ink) 22%, transparent);
`;

const ReasonNum = styled.span`
  color: var(--accent-bright);
  font-family: var(--font-display);
  font-size: 34px;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

const ReasonText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ReasonTitle = styled.h3`
  color: var(--band-ink);
  font-size: 23px;
  line-height: 1.15;
  letter-spacing: -0.015em;
`;

const ReasonBody = styled.p`
  max-width: 46ch;
  color: color-mix(in oklch, var(--band-ink) 82%, transparent);
  font-size: 16px;
  line-height: 1.6;
`;

const Approach = () => (
  <Band id="approach">
    <BandBlob aria-hidden="true" />
    <Stack>
      <SectionHead>
        <Kicker>How I work</Kicker>
        <SectionTitle>Four things I stick to.</SectionTitle>
        <SectionLede>
          These didn&rsquo;t come from a book. They came from leading teams and then having to live
          with what I shipped afterwards.
        </SectionLede>
      </SectionHead>

      <Reasons>
        {approach.map(({ index, title, body }) => (
          <Reason key={index}>
            <ReasonNum>{index}</ReasonNum>
            <ReasonText>
              <ReasonTitle>{title}</ReasonTitle>
              <ReasonBody>{body}</ReasonBody>
            </ReasonText>
          </Reason>
        ))}
      </Reasons>
    </Stack>
  </Band>
);

export default Approach;

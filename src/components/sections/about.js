import React from 'react';
import styled from 'styled-components';
import { stack } from '@config';
import { Section, Container, SectionHead, Kicker, SectionTitle, Frame, ChipRow, Chip } from '../ui';
import family from '@images/us.jpg';

const Block = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 900px) {
    gap: 64px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 380px;
  align-items: start;
  gap: 80px;

  @media (max-width: 1080px) {
    grid-template-columns: minmax(0, 1fr) 320px;
    gap: 56px;
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 56ch;

  p {
    color: var(--n-800);
  }

  strong {
    color: var(--text);
    font-weight: 600;
  }
`;

/* A photo of people, not a screenshot, so it keeps its square crop. */
const Portrait = styled(Frame)`
  aspect-ratio: 1 / 1;

  @media (max-width: 900px) {
    max-width: 360px;
  }
`;

const StackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 40px 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const StackGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const StackLabel = styled.span`
  color: var(--n-600);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const About = () => (
  <Section id="about">
    <Block>
      <SectionHead>
        <Kicker>About</Kicker>
        <SectionTitle>How I got here.</SectionTitle>
      </SectionHead>

      <Grid>
        <Text>
          <p>
            I started as a web development intern on 17 January 2017, still at university, with no
            real plan beyond wanting to be paid to write code. Graduated in the summer of 2019.
          </p>
          <p>
            Through university I freelanced, took internships, and worked part time with startups at{' '}
            <strong>Plan9</strong>, the PITB incubator. First proper job was{' '}
            <strong>YumyApps</strong>. I went in as a Laravel developer and came out as Web Team
            Lead, and most of those two years went into revamping a parental control app and
            building product management tools.
          </p>
          <p>
            After that, <strong>iCashCars</strong> for nearly two years, full stack, across their
            CRM, CMS, HRM and customer portals. Then <strong>SwishTag</strong> until November 2024,
            doing Shopify apps and an OpenAI chatbot.
          </p>
          <p>
            My first daughter was born around then too. I wanted to find something remote so I could
            be there for her and help take care of my wife, so I left and went freelance. It ended
            up working out great.
          </p>
          <p>
            I&rsquo;ve been contracting full time since, and everything left over goes into{' '}
            <strong>TourHub</strong>. Tour prices here were scattered across a couple of hundred
            operator sites with no way to compare like for like, so I put them all in one place.
            Roughly 4,000 trips, updated daily. It&rsquo;s a one-man show.. just me.
          </p>
        </Text>

        <Portrait>
          <img src={family} alt="Zille Muhammad Jafary holding his daughter" />
        </Portrait>
      </Grid>

      <StackGrid>
        {stack.map(({ label, items }) => (
          <StackGroup key={label}>
            <StackLabel>{label}</StackLabel>
            <ChipRow>
              {items.map(item => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ChipRow>
          </StackGroup>
        ))}
      </StackGrid>
    </Block>
  </Section>
);

export default About;

import React from 'react';
import styled from 'styled-components';
import { jobs } from '@config';
import {
  Section,
  SectionStack,
  SectionHead,
  Kicker,
  SectionTitle,
  Rows,
  Bullets,
  Bullet,
} from '../ui';

const JobRow = styled.article`
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 56px;
  padding-block: 56px;
  border-top: 1px solid var(--n-300);
  transition: background 0.3s ease;

  &:hover {
    background: var(--n-200);
  }

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
    padding-block: 44px;
  }
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Company = styled.h3`
  font-size: 25px;
  line-height: 1.15;
  letter-spacing: -0.015em;
`;

const Range = styled.span`
  color: var(--n-600);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 64ch;
`;

const JobTitle = styled.span`
  color: var(--text);
  font-size: 17px;
  font-weight: 600;
`;

const Experience = () => (
  <Section id="experience">
    <SectionStack $tight>
      <SectionHead>
        <Kicker>Experience</Kicker>
        <SectionTitle>Where I&rsquo;ve worked.</SectionTitle>
      </SectionHead>

      <Rows>
        {jobs.map(({ company, range, title, points }) => (
          <JobRow key={`${company}-${range}`}>
            <Side>
              <Company>{company}</Company>
              <Range>{range}</Range>
            </Side>
            <Main>
              <JobTitle>{title}</JobTitle>
              <Bullets $flush>
                {points.map(point => (
                  <Bullet key={point}>
                    <span>{point}</span>
                  </Bullet>
                ))}
              </Bullets>
            </Main>
          </JobRow>
        ))}
      </Rows>
    </SectionStack>
  </Section>
);

export default Experience;

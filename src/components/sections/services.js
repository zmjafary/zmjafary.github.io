import React from 'react';
import styled from 'styled-components';
import { capabilities } from '@config';
import {
  Section,
  SectionStack,
  SectionHead,
  Kicker,
  SectionTitle,
  SectionLede,
  CardGrid,
  Card,
  Bullets,
  Bullet,
} from '../ui';

const CardIndex = styled.span`
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.14em;
`;

const CardTitle = styled.h3`
  font-size: 25px;
  line-height: 1.15;
  letter-spacing: -0.015em;
`;

const CardBody = styled.p`
  color: var(--n-700);
  font-size: 15.5px;
  line-height: 1.55;
`;

const Services = () => (
  <Section id="services">
    <SectionStack>
      <SectionHead>
        <Kicker>What I do</Kicker>
        <SectionTitle>Three things, mostly.</SectionTitle>
        <SectionLede>
          Nearly all of it sits behind a login and gets used all day by staff rather than visitors.
          That changes what matters. Nobody cares about a nice animation when they&rsquo;re trying
          to close a rota before they go home.
        </SectionLede>
      </SectionHead>

      <CardGrid>
        {capabilities.map(({ index, title, body, points }) => (
          <Card key={index}>
            <CardIndex>{index}</CardIndex>
            <CardTitle>{title}</CardTitle>
            <CardBody>{body}</CardBody>
            <Bullets>
              {points.map(point => (
                <Bullet key={point}>
                  <span>{point}</span>
                </Bullet>
              ))}
            </Bullets>
          </Card>
        ))}
      </CardGrid>
    </SectionStack>
  </Section>
);

export default Services;

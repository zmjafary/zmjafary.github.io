import React from 'react';
import styled from 'styled-components';
import { email } from '@config';
import { Section, Container, InvertedButton } from '../ui';

/* The one accent panel on the page, and the primary call to action. */
const Panel = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  align-items: center;
  gap: 64px;
  padding: 72px 64px;
  border-radius: var(--radius-lg);
  background: var(--accent);
  color: var(--on-accent);

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
    padding: 56px 40px;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  max-width: 14ch;
  color: var(--on-accent);
  font-size: clamp(36px, 4.4vw, 56px);
  line-height: 1.05;
  letter-spacing: -0.025em;
`;

const Body = styled.p`
  max-width: 44ch;
  color: color-mix(in oklch, var(--on-accent) 82%, transparent);
  font-size: 17px;
  line-height: 1.6;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 14px;
`;

const Contact = () => (
  <Section id="contact">
    <Container>
      <Panel>
        <Copy>
          <Title>Got something that needs building?</Title>
          <Body>
            Tell me what it is and roughly when you need it. If I&rsquo;m not the right person for
            it I&rsquo;ll say so, and usually know someone who is.
          </Body>
        </Copy>
        <Actions>
          <InvertedButton href={`mailto:${email}`}>{email}</InvertedButton>
        </Actions>
      </Panel>
    </Container>
  </Section>
);

export default Contact;

import React from 'react';
import styled from 'styled-components';
import { Layout } from '@components';
import { Section, Container, PrimaryButton } from '../components/ui';

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  min-height: 60vh;
  padding-block: 96px;
`;

const Code = styled.h1`
  color: var(--accent);
  font-size: clamp(72px, 18vw, 180px);
  line-height: 1;
  letter-spacing: -0.03em;
`;

const Message = styled.p`
  max-width: 46ch;
  color: var(--n-700);
  font-size: 20px;
  line-height: 1.6;
`;

const NotFoundPage = () => (
  <Layout>
    <main id="top">
      <Section>
        <Inner>
          <Code>404</Code>
          <Message>
            That page isn&rsquo;t here. It either moved or never existed. Either way, the work is
            back on the home page.
          </Message>
          <PrimaryButton href="/">Take me home</PrimaryButton>
        </Inner>
      </Section>
    </main>
  </Layout>
);

export default NotFoundPage;

import React from 'react';
import styled from 'styled-components';
import { email, resume, socialMedia, navLinks } from '@config';
import { Container, PrimaryButton } from './ui';

const StyledFooter = styled.footer`
  padding-top: 112px;
  padding-bottom: 40px;
  background: var(--n-200);
`;

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) repeat(3, minmax(0, 1fr));
  gap: 56px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 48px;
  }

  @media (max-width: 680px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }
`;

const Lead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const Title = styled.h2`
  max-width: 12ch;
  font-size: 36px;
  line-height: 1.05;
  letter-spacing: -0.025em;
`;

const Body = styled.p`
  max-width: 34ch;
  color: var(--n-700);
  font-size: 16px;
  line-height: 1.6;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ColTitle = styled.h4`
  color: var(--n-600);
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    color: var(--n-800);
    font-size: 15.5px;

    &:hover {
      color: var(--accent-text-2);
    }
  }
`;

const Baseline = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px 32px;
  padding-top: 28px;
  border-top: 1px solid var(--n-400);
  color: var(--n-600);
  font-size: 13.5px;
`;

const Footer = () => (
  <StyledFooter>
    <Inner>
      <Grid>
        <Lead>
          <Title>Get in touch.</Title>
          <Body>Email&rsquo;s the fastest way to reach me. I read everything that comes in.</Body>
          <PrimaryButton href={`mailto:${email}`}>Email me</PrimaryButton>
        </Lead>

        <Col>
          <ColTitle>Site</ColTitle>
          <Links>
            {navLinks.map(({ name, url }) => (
              <a key={name} href={url}>
                {name}
              </a>
            ))}
          </Links>
        </Col>

        <Col>
          <ColTitle>Elsewhere</ColTitle>
          <Links>
            {socialMedia.map(({ name, url }) => (
              <a key={name} href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            ))}
          </Links>
        </Col>

        <Col>
          <ColTitle>Direct</ColTitle>
          <Links>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={resume} target="_blank" rel="noreferrer">
              R&eacute;sum&eacute; [PDF]
            </a>
            <a href="https://zmjafary.com">zmjafary.com</a>
          </Links>
        </Col>
      </Grid>

      <Baseline>
        <span>&copy; {new Date().getFullYear()} Zille Muhammad Jafary</span>
        <span>{email}</span>
      </Baseline>
    </Inner>
  </StyledFooter>
);

export default Footer;
